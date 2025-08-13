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
    justifyContent: 'flex-start',
    paddingTop: searchResults.length > 0 || selectedCompany ? '2rem' : '20vh',
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
      <Header />
      
      <main style={mainStyles}>
        {!selectedCompany ? (
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
