import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { searchCompanies } from '../data/companies';
import { Company } from '../types';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim().length > 1) {
      const results = searchCompanies(query).slice(0, 5);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = () => {
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (company: Company) => {
    setQuery(company.name);
    onSearch(company.name);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const containerStyles: React.CSSProperties = {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  };

  const inputStyles: React.CSSProperties = {
    flex: 1,
    padding: '1rem 1.5rem',
    fontSize: '1.1rem',
    border: '2px solid #e1e5e9',
    borderRadius: '50px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const buttonStyles: React.CSSProperties = {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.2s ease',
  };

  const suggestionsStyles: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #e1e5e9',
    borderRadius: '12px',
    marginTop: '0.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    maxHeight: '300px',
    overflowY: 'auto',
  };

  const suggestionItemStyles: React.CSSProperties = {
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #f0f0f0',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  const suggestionNameStyles: React.CSSProperties = {
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.25rem',
  };

  const suggestionIndustryStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#666',
  };

  return (
    <div style={containerStyles}>
      <div style={inputContainerStyles}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search companies..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={inputStyles}
          onFocus={() => {
            if (suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
        />
        <button
          onClick={handleSearch}
          style={buttonStyles}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
          }}
        >
          Search
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div style={suggestionsStyles}>
          {suggestions.map((company, index) => (
            <div
              key={company.id}
              style={{
                ...suggestionItemStyles,
                borderBottom: index === suggestions.length - 1 ? 'none' : '1px solid #f0f0f0',
              }}
              onClick={() => handleSuggestionClick(company)}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <div style={suggestionNameStyles}>{company.name}</div>
              <div style={suggestionIndustryStyles}>
                {company.industry.charAt(0).toUpperCase() + company.industry.slice(1)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
