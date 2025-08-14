// Google Analytics 4 configuration and tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export interface AnalyticsConfig {
  measurementId: string;
  enableDevelopment?: boolean;
  enableConsoleLogging?: boolean;
}

export interface SearchEvent {
  query: string;
  resultsCount: number;
  searchId?: string;
}

export interface CompanyViewEvent {
  companyId: string;
  companyName: string;
  industry: string;
  source: 'search' | 'direct' | 'suggestion';
}

export interface ComplaintActionEvent {
  companyId: string;
  companyName: string;
  action: 'view_contact' | 'click_phone' | 'click_email' | 'click_website' | 'view_complaint_process';
  value?: string;
}

export interface AgencyEscalationEvent {
  companyId: string;
  companyName: string;
  agencyId: string;
  agencyName: string;
  action: 'view_agency' | 'click_agency_website' | 'click_agency_phone';
}

class GoogleAnalytics {
  private config: AnalyticsConfig;
  private isInitialized = false;

  constructor(config: AnalyticsConfig) {
    this.config = config;
  }

  /**
   * Initialize Google Analytics 4
   */
  init(): void {
    if (this.isInitialized || !this.config.measurementId) {
      return;
    }

    // Skip in development unless explicitly enabled
    if (process.env.NODE_ENV === 'development' && !this.config.enableDevelopment) {
      if (this.config.enableConsoleLogging) {
        console.log('GA4: Skipping initialization in development mode');
      }
      return;
    }

    try {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.measurementId}`;
      document.head.appendChild(script);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      // Configure GA4
      window.gtag('js', new Date());
      window.gtag('config', this.config.measurementId, {
        // Privacy-compliant settings
        anonymize_ip: true,
        respect_dnt: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        // Performance settings
        send_page_view: true,
        // Custom parameters for OnlyComplaints
        custom_map: {
          'custom_parameter_1': 'company_industry',
          'custom_parameter_2': 'user_state'
        }
      });

      this.isInitialized = true;

      if (this.config.enableConsoleLogging) {
        console.log('GA4: Initialized successfully with ID:', this.config.measurementId);
      }
    } catch (error) {
      console.error('GA4: Failed to initialize:', error);
    }
  }

  /**
   * Track custom events
   */
  private trackEvent(eventName: string, eventParameters: Record<string, any>): void {
    if (!this.isInitialized || !window.gtag) {
      if (this.config.enableConsoleLogging) {
        console.log('GA4 Event (not initialized):', eventName, eventParameters);
      }
      return;
    }

    try {
      window.gtag('event', eventName, eventParameters);
      
      if (this.config.enableConsoleLogging) {
        console.log('GA4 Event:', eventName, eventParameters);
      }
    } catch (error) {
      console.error('GA4: Failed to track event:', eventName, error);
    }
  }

  /**
   * Track page views manually (for SPA navigation)
   */
  trackPageView(pagePath: string, pageTitle?: string): void {
    this.trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
      page_location: window.location.href
    });
  }

  /**
   * Track search events
   */
  trackSearch(searchData: SearchEvent): void {
    this.trackEvent('search', {
      search_term: searchData.query,
      search_results_count: searchData.resultsCount,
      search_id: searchData.searchId || '',
      event_category: 'engagement',
      value: searchData.resultsCount
    });
  }

  /**
   * Track company profile views
   */
  trackCompanyView(companyData: CompanyViewEvent): void {
    this.trackEvent('view_company', {
      company_id: companyData.companyId,
      company_name: companyData.companyName,
      company_industry: companyData.industry,
      traffic_source: companyData.source,
      event_category: 'engagement',
      content_type: 'company_profile'
    });
  }

  /**
   * Track complaint-related actions
   */
  trackComplaintAction(actionData: ComplaintActionEvent): void {
    this.trackEvent('complaint_action', {
      company_id: actionData.companyId,
      company_name: actionData.companyName,
      action_type: actionData.action,
      action_value: actionData.value || '',
      event_category: 'conversion',
      content_type: 'complaint_process'
    });
  }

  /**
   * Track government agency escalations
   */
  trackAgencyEscalation(escalationData: AgencyEscalationEvent): void {
    this.trackEvent('agency_escalation', {
      company_id: escalationData.companyId,
      company_name: escalationData.companyName,
      agency_id: escalationData.agencyId,
      agency_name: escalationData.agencyName,
      escalation_action: escalationData.action,
      event_category: 'conversion',
      content_type: 'government_agency'
    });
  }

  /**
   * Track external link clicks
   */
  trackExternalLink(url: string, linkType: 'company_website' | 'agency_website' | 'government_form', context?: string): void {
    this.trackEvent('click_external_link', {
      link_url: url,
      link_type: linkType,
      link_context: context || '',
      event_category: 'engagement',
      content_type: 'external_link'
    });
  }

  /**
   * Track user engagement milestones
   */
  trackEngagementMilestone(milestone: 'first_search' | 'company_selected' | 'complaint_process_viewed' | 'agency_viewed'): void {
    this.trackEvent('engagement_milestone', {
      milestone_type: milestone,
      event_category: 'engagement',
      content_type: 'user_journey'
    });
  }

  /**
   * Set user properties (privacy-compliant)
   */
  setUserProperty(propertyName: string, propertyValue: string): void {
    if (!this.isInitialized || !window.gtag) return;

    window.gtag('config', this.config.measurementId, {
      user_properties: {
        [propertyName]: propertyValue
      }
    });
  }
}

// Singleton instance
let analyticsInstance: GoogleAnalytics | null = null;

/**
 * Initialize Google Analytics with configuration
 */
export const initializeAnalytics = (config: AnalyticsConfig): GoogleAnalytics => {
  if (!analyticsInstance) {
    analyticsInstance = new GoogleAnalytics(config);
    analyticsInstance.init();
  }
  return analyticsInstance;
};

/**
 * Get the analytics instance
 */
export const getAnalytics = (): GoogleAnalytics | null => {
  return analyticsInstance;
};

// Export commonly used tracking functions
export const trackSearch = (searchData: SearchEvent) => getAnalytics()?.trackSearch(searchData);
export const trackCompanyView = (companyData: CompanyViewEvent) => getAnalytics()?.trackCompanyView(companyData);
export const trackComplaintAction = (actionData: ComplaintActionEvent) => getAnalytics()?.trackComplaintAction(actionData);
export const trackAgencyEscalation = (escalationData: AgencyEscalationEvent) => getAnalytics()?.trackAgencyEscalation(escalationData);
export const trackExternalLink = (url: string, linkType: 'company_website' | 'agency_website' | 'government_form', context?: string) => 
  getAnalytics()?.trackExternalLink(url, linkType, context);
export const trackEngagementMilestone = (milestone: 'first_search' | 'company_selected' | 'complaint_process_viewed' | 'agency_viewed') => 
  getAnalytics()?.trackEngagementMilestone(milestone);
