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
    transition: 'all 0.2s ease',
    border: '1px solid #f0f0f0',
    position: 'relative',
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
    backgroundColor: '#fef3c7',
    color: '#f97316',
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
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        e.currentTarget.style.borderColor = '#1e3a8a';
        
        // Enhance the click indicator on hover
        const clickIndicator = e.currentTarget.querySelector('[data-click-indicator]') as HTMLElement;
        if (clickIndicator) {
          clickIndicator.style.color = '#f97316';
          clickIndicator.style.transform = 'translateX(5px)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        e.currentTarget.style.borderColor = '#f0f0f0';
        
        // Reset the click indicator
        const clickIndicator = e.currentTarget.querySelector('[data-click-indicator]') as HTMLElement;
        if (clickIndicator) {
          clickIndicator.style.color = '#1e3a8a';
          clickIndicator.style.transform = 'translateX(0)';
        }
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
      
      {/* Click for more indicator */}
      <div 
        data-click-indicator
        style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid #f0f0f0',
          textAlign: 'center',
          color: '#1e3a8a',
          fontSize: '0.9rem',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s ease',
          transform: 'translateX(0)'
        }}
      >
        <span>Click for complaint process & details</span>
        <span style={{ fontSize: '0.8rem' }}>→</span>
      </div>
    </div>
  );
};
