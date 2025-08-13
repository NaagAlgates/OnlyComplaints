import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { searchCompanies } from '../data/companies';
import { Company } from '../types';

interface SearchBarProps {
  value?: string;
  onSearch: (query: string) => void;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onSearch, onClear }) => {
  const [query, setQuery] = useState(value || '');
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync with external value prop
  useEffect(() => {
    setQuery(value || '');
  }, [value]);

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

  const handleClear = () => {
    setQuery('');
    setShowSuggestions(false);
    if (onClear) {
      onClear();
    }
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
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputContainerStyles: React.CSSProperties = {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '1rem 1.5rem 1rem 3rem',
    fontSize: '1.1rem',
    border: '2px solid #e1e5e9',
    borderRadius: '50px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const searchIconStyles: React.CSSProperties = {
    position: 'absolute',
    left: '1.2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    fontSize: '1.2rem',
    pointerEvents: 'none',
  };

  const clearIconStyles: React.CSSProperties = {
    position: 'absolute',
    right: '1.2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6b7280',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.4rem',
    borderRadius: '50%',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.8rem',
    height: '1.8rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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
        <div style={searchIconStyles}>🔍</div>
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
            // Add focus styling
            (document.activeElement as HTMLInputElement).style.borderColor = '#1e3a8a';
            (document.activeElement as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(30, 58, 138, 0.1)';
          }}
          onBlur={() => {
            // Remove focus styling
            setTimeout(() => {
              if (inputRef.current) {
                inputRef.current.style.borderColor = '#e1e5e9';
                inputRef.current.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }
              setShowSuggestions(false);
            }, 200);
          }}
        />
        {query && (
          <div 
            style={clearIconStyles}
            onClick={handleClear}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1e3a8a';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#1e3a8a';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.color = '#6b7280';
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ✕
          </div>
        )}
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
