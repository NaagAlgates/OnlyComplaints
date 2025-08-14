import React, {
  useEffect,
  useState,
} from 'react';

import { About } from './components/About';
import { CompanyCard } from './components/CompanyCard';
import { CompanyDetail } from './components/CompanyDetail';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { SearchBar } from './components/SearchBar';
import { TermsOfUse } from './components/TermsOfUse';
import {
  analyticsConfig,
  isAnalyticsConfigured,
} from './config/analytics';
import {
  getCompanyById,
  searchCompanies,
} from './data/companies';
import { Company } from './types';
import {
  initializeAnalytics,
  trackCompanyView,
  trackEngagementMilestone,
  trackSearch,
} from './utils/analytics';

function App() {
  const [searchResults, setSearchResults] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      console.log('Navigation detected, hash:', hash); // Debug log
      
      if (hash === '#privacy') {
        setShowPrivacyPolicy(true);
        setShowTermsOfUse(false);
        setShowAbout(false);
        setSelectedCompany(null);
        setSearchResults([]);
      } else if (hash === '#terms') {
        setShowTermsOfUse(true);
        setShowPrivacyPolicy(false);
        setShowAbout(false);
        setSelectedCompany(null);
        setSearchResults([]);
      } else if (hash === '#about') {
        setShowAbout(true);
        setShowPrivacyPolicy(false);
        setShowTermsOfUse(false);
        setSelectedCompany(null);
        setSearchResults([]);
      } else if (hash.startsWith('#company/')) {
        const companyId = hash.replace('#company/', '');
        const company = getCompanyById(companyId);
        if (company) {
          setSelectedCompany(company);
          setShowPrivacyPolicy(false);
          setShowTermsOfUse(false);
          setShowAbout(false);
        }
      } else {
        // No hash or unknown hash - go to home
        setShowPrivacyPolicy(false);
        setShowTermsOfUse(false);
        setShowAbout(false);
        setSelectedCompany(null);
        // Don't clear search results on back to home
      }
    };

    // Check initial URL on load
    handlePopState();

    // Listen for browser navigation and hash changes
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Initialize Google Analytics
  useEffect(() => {
    if (isAnalyticsConfigured()) {
      initializeAnalytics(analyticsConfig);
    }
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchCompanies(query);
      setSearchResults(results);
      setSelectedCompany(null);

      // Track search event
      trackSearch({
        query: query.trim(),
        resultsCount: results.length
      });

      // Track first search milestone
      if (!hasSearched) {
        trackEngagementMilestone('first_search');
        setHasSearched(true);
      }
    } else {
      setSearchResults([]);
      setSelectedCompany(null);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedCompany(null);
  };

  const handleCompanySelect = (companyId: string) => {
    const company = getCompanyById(companyId);
    if (company) {
      setSelectedCompany(company);
      setShowPrivacyPolicy(false);

      // Update URL
      window.history.pushState(null, '', `#company/${companyId}`);

      // Track company view
      trackCompanyView({
        companyId: company.id,
        companyName: company.name,
        industry: company.industry,
        source: searchQuery ? 'search' : 'direct'
      });

      // Track milestone
      trackEngagementMilestone('company_selected');
    }
  };



  const handleBackToSearch = () => {
    setSelectedCompany(null);
    setShowPrivacyPolicy(false);
    
    // Update URL
    window.history.pushState(null, '', window.location.pathname);
    
    if (searchQuery.trim()) {
      const results = searchCompanies(searchQuery);
      setSearchResults(results);
    }
  };

  const handleBackFromPrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
    
    // Update URL
    window.history.pushState(null, '', window.location.pathname);
  };

  const appStyles: React.CSSProperties = {
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Helvetica, Arial, sans-serif',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
  };

  const mainStyles: React.CSSProperties = {
    flex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: searchResults.length > 0 || selectedCompany || showPrivacyPolicy || showTermsOfUse || showAbout ? '2rem' : '20vh',
    transition: 'padding-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  const resultsStyles: React.CSSProperties = {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    marginTop: '1rem',
    opacity: searchResults.length > 0 ? 1 : 0,
    transition: 'opacity 0.4s ease-out',
  };

  return (
    <div style={appStyles}>
      <Header 
        onHomeClick={handleBackFromPrivacyPolicy}
        showPrivacyLink={!showPrivacyPolicy}
      />
      
      <main style={mainStyles}>
        {showPrivacyPolicy ? (
          <PrivacyPolicy />
        ) : showTermsOfUse ? (
          <TermsOfUse />
        ) : showAbout ? (
          <About />
        ) : !selectedCompany ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <SearchBar 
                value={searchQuery}
                onSearch={handleSearch} 
                onClear={handleClearSearch}
              />
            </div>

            {searchResults.length > 0 && (
              <div style={resultsStyles}>
                {searchResults.map(company => (
                  <CompanyCard
                    key={company.id}
                    company={company}
                    onSelect={handleCompanySelect}
                  />
                ))}
              </div>
            )}

            {searchQuery && searchResults.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                color: '#666',
                backgroundColor: '#fff',
                borderRadius: '8px',
                marginTop: '1rem',
                opacity: 1,
                transition: 'opacity 0.3s ease-out',
              }}>
                <p>No companies found for "{searchQuery}". Try a different search term or company name.</p>
              </div>
            )}
          </>
        ) : (
          <CompanyDetail
            company={selectedCompany}
            onBack={handleBackToSearch}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
