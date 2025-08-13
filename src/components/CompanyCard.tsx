import React from 'react';

import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
  onSelect: (companyId: string) => void;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company, onSelect }) => {
  const cardStyles: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: '1px solid #f0f0f0',
  };

  const headerStyles: React.CSSProperties = {
    marginBottom: '1rem',
  };

  const nameStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.5rem',
  };

  const industryStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    backgroundColor: '#e3f2fd',
    color: '#1565c0',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
  };

  const descriptionStyles: React.CSSProperties = {
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '1rem',
    fontSize: '0.95rem',
  };

  const contactStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const contactItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: '#555',
  };

  const issuesStyles: React.CSSProperties = {
    borderTop: '1px solid #f0f0f0',
    paddingTop: '1rem',
  };

  const issuesLabelStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.5rem',
  };

  const issueTagStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    backgroundColor: '#f8f9fa',
    color: '#495057',
    borderRadius: '12px',
    fontSize: '0.8rem',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
  };

  const ratingStyles: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #f0f0f0',
  };

  const ratingItemStyles: React.CSSProperties = {
    textAlign: 'center',
    flex: 1,
  };

  const ratingLabelStyles: React.CSSProperties = {
    fontSize: '0.8rem',
    color: '#666',
    marginBottom: '0.25rem',
  };

  const ratingValueStyles: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: '600',
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return '#28a745';
    if (rating >= 3) return '#ffc107';
    return '#dc3545';
  };

  const formatPhoneNumber = (phone: string) => {
    // Simple formatting for Australian phone numbers
    if (phone.startsWith('13')) {
      return phone.replace(/(\d{2})(\s)(\d{2})(\s)(\d{2})/, '$1 $3 $5');
    }
    return phone;
  };

  return (
    <div
      style={cardStyles}
      onClick={() => onSelect(company.id)}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      }}
    >
      <div style={headerStyles}>
        <h3 style={nameStyles}>{company.name}</h3>
        <span style={industryStyles}>
          {company.industry.charAt(0).toUpperCase() + company.industry.slice(1)}
        </span>
      </div>

      <p style={descriptionStyles}>{company.description}</p>

      <div style={contactStyles}>
        {company.contact.phone && (
          <div style={contactItemStyles}>
            <span>📞</span>
            <span>{formatPhoneNumber(company.contact.phone)}</span>
          </div>
        )}
        {company.contact.email && (
          <div style={contactItemStyles}>
            <span>✉️</span>
            <span>{company.contact.email}</span>
          </div>
        )}
        <div style={contactItemStyles}>
          <span>🌐</span>
          <span>{company.website.replace('https://', '').replace('http://', '')}</span>
        </div>
      </div>

      <div style={issuesStyles}>
        <div style={issuesLabelStyles}>Common Issues:</div>
        <div>
          {company.commonIssues.slice(0, 3).map((issue, index) => (
            <span key={index} style={issueTagStyles}>
              {issue}
            </span>
          ))}
          {company.commonIssues.length > 3 && (
            <span style={issueTagStyles}>
              +{company.commonIssues.length - 3} more
            </span>
          )}
        </div>
      </div>

      {company.rating && (
        <div style={ratingStyles}>
          <div style={ratingItemStyles}>
            <div style={ratingLabelStyles}>Response</div>
            <div
              style={{
                ...ratingValueStyles,
                color: getRatingColor(company.rating.responseTime),
              }}
            >
              {company.rating.responseTime}/5
            </div>
          </div>
          <div style={ratingItemStyles}>
            <div style={ratingLabelStyles}>Resolution</div>
            <div
              style={{
                ...ratingValueStyles,
                color: getRatingColor(company.rating.resolution),
              }}
            >
              {company.rating.resolution}/5
            </div>
          </div>
          <div style={ratingItemStyles}>
            <div style={ratingLabelStyles}>Satisfaction</div>
            <div
              style={{
                ...ratingValueStyles,
                color: getRatingColor(company.rating.satisfaction),
              }}
            >
              {company.rating.satisfaction}/5
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
