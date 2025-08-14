// Analytics configuration for OnlyComplaints
import { AnalyticsConfig } from '../utils/analytics';

// Environment variables for GA4 configuration
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || '';
const IS_DEVELOPMENT = import.meta.env.DEV;
const ENABLE_DEV_ANALYTICS = import.meta.env.VITE_ENABLE_DEV_ANALYTICS === 'true';
const ENABLE_CONSOLE_LOGGING = import.meta.env.VITE_ANALYTICS_DEBUG === 'true';

export const analyticsConfig: AnalyticsConfig = {
  measurementId: GA4_MEASUREMENT_ID,
  enableDevelopment: ENABLE_DEV_ANALYTICS,
  enableConsoleLogging: ENABLE_CONSOLE_LOGGING || IS_DEVELOPMENT
};

// Validation
export const isAnalyticsConfigured = (): boolean => {
  return !!GA4_MEASUREMENT_ID;
};

// Analytics event categories for OnlyComplaints
export const EventCategories = {
  ENGAGEMENT: 'engagement',
  CONVERSION: 'conversion',
  NAVIGATION: 'navigation',
  ERROR: 'error'
} as const;

// Content types for better categorization
export const ContentTypes = {
  COMPANY_PROFILE: 'company_profile',
  COMPLAINT_PROCESS: 'complaint_process',
  GOVERNMENT_AGENCY: 'government_agency',
  SEARCH_RESULTS: 'search_results',
  EXTERNAL_LINK: 'external_link',
  USER_JOURNEY: 'user_journey'
} as const;

// User journey milestones
export const UserJourneyMilestones = {
  FIRST_SEARCH: 'first_search',
  COMPANY_SELECTED: 'company_selected',
  COMPLAINT_PROCESS_VIEWED: 'complaint_process_viewed',
  AGENCY_VIEWED: 'agency_viewed',
  EXTERNAL_ACTION_TAKEN: 'external_action_taken'
} as const;

// Industry mapping for consistent tracking
export const IndustryMapping = {
  telecommunications: 'Telecommunications',
  banking: 'Banking & Finance',
  retail: 'Retail & Consumer Goods',
  energy: 'Energy & Utilities',
  insurance: 'Insurance',
  transport: 'Transport',
  utilities: 'Utilities',
  healthcare: 'Healthcare',
  education: 'Education',
  government: 'Government',
  other: 'Other'
} as const;
