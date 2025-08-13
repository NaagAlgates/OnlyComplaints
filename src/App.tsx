import React, { useState } from 'react';

import { CompanyCard } from './components/CompanyCard';
import { CompanyDetail } from './components/CompanyDetail';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import {
  getCompanyById,
  searchCompanies,
} from './data/companies';
import { Company } from './types';

function App() {
  const [searchResults, setSearchResults] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchCompanies(query);
      setSearchResults(results);
      setSelectedCompany(null);
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
      setSearchResults([]);
    }
  };

  const handleBackToSearch = () => {
    setSelectedCompany(null);
    if (searchQuery.trim()) {
      const results = searchCompanies(searchQuery);
      setSearchResults(results);
    }
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
    justifyContent: searchResults.length > 0 || selectedCompany ? 'flex-start' : 'center',
  };

  const heroStyles: React.CSSProperties = {
    textAlign: 'center',
    padding: '4rem 0 3rem 0',
    backgroundColor: '#fff',
    marginBottom: searchResults.length > 0 ? '2rem' : '0',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transform: searchResults.length === 0 && !selectedCompany ? 'translateY(-10vh)' : 'none',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '2rem',
  };

  const resultsStyles: React.CSSProperties = {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    marginTop: '2rem',
  };

  return (
    <div style={appStyles}>
      <Header />
      
      <main style={mainStyles}>
        {!selectedCompany ? (
          <>
            <div style={heroStyles}>
              <h1 style={titleStyles}>OnlyComplaints</h1>
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
                marginTop: '2rem'
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
