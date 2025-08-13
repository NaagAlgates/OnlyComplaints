import React from 'react';

import { Company } from '../types';

interface CompanyDetailProps {
  company: Company;
  onBack: () => void;
}

export const CompanyDetail: React.FC<CompanyDetailProps> = ({ company, onBack }) => {
  const containerStyles: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    marginTop: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const backButtonStyles: React.CSSProperties = {
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem 1.5rem',
    fontSize: '0.95rem',
    cursor: 'pointer',
    marginBottom: '2rem',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
  };

  const headerStyles: React.CSSProperties = {
    marginBottom: '2rem',
    paddingBottom: '1.5rem',
    borderBottom: '2px solid #f0f0f0',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '0.5rem',
  };

  const industryTagStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#fef3c7',
    color: '#f97316',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem',
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1rem',
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: '2.5rem',
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const cardStyles: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
  };

  const contactGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  };

  const contactItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
    fontSize: '1rem',
  };

  const stepListStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const stepItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e1e5e9',
  };

  const stepNumberStyles: React.CSSProperties = {
    backgroundColor: '#1e3a8a',
    color: 'white',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: '600',
    flexShrink: 0,
  };

  const issueTagStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#fff3cd',
    color: '#856404',
    borderRadius: '20px',
    fontSize: '0.9rem',
    marginRight: '0.75rem',
    marginBottom: '0.75rem',
    border: '1px solid #ffeaa7',
  };

  const agencyCardStyles: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #e1e5e9',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem',
  };

  const agencyHeaderStyles: React.CSSProperties = {
    marginBottom: '1rem',
  };

  const agencyNameStyles: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.25rem',
  };

  const agencyAcronymStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.5rem',
  };

  const warningBoxStyles: React.CSSProperties = {
    backgroundColor: '#fff3cd',
    border: '1px solid #ffeaa7',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1.5rem',
  };

  const warningTitleStyles: React.CSSProperties = {
    color: '#856404',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const formatPhoneNumber = (phone: string) => {
    if (phone.startsWith('13')) {
      return phone.replace(/(\d{2})(\s)(\d{2})(\s)(\d{2})/, '$1 $3 $5');
    }
    return phone;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return '#28a745';
    if (rating >= 3) return '#ffc107';
    return '#dc3545';
  };

  const getRatingText = (rating: number) => {
    if (rating >= 4) return 'Good';
    if (rating >= 3) return 'Average';
    return 'Poor';
  };

  return (
    <div style={containerStyles}>
      <button
        style={backButtonStyles}
        onClick={onBack}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#5a6268';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#6c757d';
        }}
      >
        ← Back to search
      </button>

      <div style={headerStyles}>
        <h1 style={titleStyles}>{company.name}</h1>
        <div style={industryTagStyles}>
          {company.industry.charAt(0).toUpperCase() + company.industry.slice(1)}
        </div>
        <p style={descriptionStyles}>{company.description}</p>
        {company.abn && (
          <p style={{ color: '#666', fontSize: '0.9rem' }}>ABN: {company.abn}</p>
        )}
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>
          <span>📞</span> Contact Information
        </h2>
        <div style={cardStyles}>
          <div style={contactGridStyles}>
            <div>
              {company.contact.phone && (
                <div style={contactItemStyles}>
                  <span>📞</span>
                  <div>
                    <strong>Phone:</strong> {formatPhoneNumber(company.contact.phone)}
                  </div>
                </div>
              )}
              {company.contact.email && (
                <div style={contactItemStyles}>
                  <span>✉️</span>
                  <div>
                    <strong>Email:</strong> {company.contact.email}
                  </div>
                </div>
              )}
              <div style={contactItemStyles}>
                <span>🌐</span>
                <div>
                  <strong>Website:</strong>{' '}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#f97316', textDecoration: 'none' }}
                  >
                    {company.website.replace('https://', '').replace('http://', '')}
                  </a>
                </div>
              </div>
            </div>
            <div>
              {company.contact.address && (
                <div style={contactItemStyles}>
                  <span>📍</span>
                  <div>
                    <strong>Address:</strong><br />
                    {company.contact.address.street}<br />
                    {company.contact.address.city}, {company.contact.address.state} {company.contact.address.postcode}
                  </div>
                </div>
              )}
              {company.contact.hours && (
                <div style={contactItemStyles}>
                  <span>🕒</span>
                  <div>
                    <strong>Hours:</strong> {company.contact.hours}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>
          <span>⚠️</span> Common Issues
        </h2>
        <div>
          {company.commonIssues.map((issue, index) => (
            <span key={index} style={issueTagStyles}>
              {issue}
            </span>
          ))}
        </div>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>
          <span>📋</span> How to Make a Complaint
        </h2>
        
        <div style={warningBoxStyles}>
          <div style={warningTitleStyles}>💡 Before You Start</div>
          <p style={{ margin: 0, color: '#856404' }}>
            Try to resolve the issue directly with the company first. Keep records of all communications, 
            including emails, receipts, and notes from phone calls.
          </p>
        </div>

        <h3 style={{ marginBottom: '1rem', color: '#1a1a1a' }}>Step-by-Step Process:</h3>
        <ul style={stepListStyles}>
          {company.complaints.internalProcess.steps.map((step, index) => (
            <li key={index} style={stepItemStyles}>
              <div style={stepNumberStyles}>{index + 1}</div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, lineHeight: '1.5' }}>{step}</p>
              </div>
            </li>
          ))}
        </ul>

        <div style={cardStyles}>
          <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Complaint Contact Details:</h4>
          <div style={contactGridStyles}>
            <div>
              {company.complaints.internalProcess.contactDetails.phone && (
                <div style={contactItemStyles}>
                  <span>📞</span>
                  <span>{formatPhoneNumber(company.complaints.internalProcess.contactDetails.phone)}</span>
                </div>
              )}
              {company.complaints.internalProcess.contactDetails.email && (
                <div style={contactItemStyles}>
                  <span>✉️</span>
                  <span>{company.complaints.internalProcess.contactDetails.email}</span>
                </div>
              )}
            </div>
            <div>
              {company.complaints.internalProcess.contactDetails.onlineForm && (
                <div style={contactItemStyles}>
                  <span>🌐</span>
                  <a
                    href={company.complaints.internalProcess.contactDetails.onlineForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#f97316', textDecoration: 'none' }}
                  >
                    Online Complaint Form
                  </a>
                </div>
              )}
              <div style={contactItemStyles}>
                <span>⏱️</span>
                <span><strong>Expected Resolution:</strong> {company.complaints.internalProcess.timeframe}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>
          <span>🏛️</span> Escalation Options
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#555' }}>
          If the company doesn't resolve your complaint within their timeframe, or you're not satisfied 
          with their response, you can escalate to these government agencies:
        </p>

        {company.complaints.escalation.agencies.map((agency) => (
          <div key={agency.id} style={agencyCardStyles}>
            <div style={agencyHeaderStyles}>
              <h3 style={agencyNameStyles}>{agency.name}</h3>
              <p style={agencyAcronymStyles}>({agency.acronym})</p>
              <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{agency.description}</p>
            </div>

            <div style={contactGridStyles}>
              <div>
                <div style={contactItemStyles}>
                  <span>📞</span>
                  <span>{formatPhoneNumber(agency.contact.phone)}</span>
                </div>
                {agency.contact.email && (
                  <div style={contactItemStyles}>
                    <span>✉️</span>
                    <span>{agency.contact.email}</span>
                  </div>
                )}
                <div style={contactItemStyles}>
                  <span>🌐</span>
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#f97316', textDecoration: 'none' }}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div>
                {agency.contact.onlineForm && (
                  <div style={contactItemStyles}>
                    <span>📝</span>
                    <a
                      href={agency.contact.onlineForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#f97316', textDecoration: 'none' }}
                    >
                      File Complaint Online
                    </a>
                  </div>
                )}
                <div style={contactItemStyles}>
                  <span>⏱️</span>
                  <span><strong>Response Time:</strong> {agency.process.timeframe}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div style={warningBoxStyles}>
          <div style={warningTitleStyles}>📝 Remember</div>
          <p style={{ margin: 0, color: '#856404' }}>
            {company.complaints.escalation.timeline}
          </p>
        </div>
      </div>

      {company.rating && (
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>
            <span>⭐</span> Community Ratings
          </h2>
          <div style={cardStyles}>
            <p style={{ marginTop: 0, marginBottom: '1rem', color: '#666' }}>
              Based on user feedback and complaint resolution data:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.25rem' }}>Response Time</div>
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: getRatingColor(company.rating.responseTime),
                  marginBottom: '0.25rem'
                }}>
                  {company.rating.responseTime}/5
                </div>
                <div style={{ fontSize: '0.8rem', color: getRatingColor(company.rating.responseTime) }}>
                  {getRatingText(company.rating.responseTime)}
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.25rem' }}>Resolution Quality</div>
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: getRatingColor(company.rating.resolution),
                  marginBottom: '0.25rem'
                }}>
                  {company.rating.resolution}/5
                </div>
                <div style={{ fontSize: '0.8rem', color: getRatingColor(company.rating.resolution) }}>
                  {getRatingText(company.rating.resolution)}
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.25rem' }}>Overall Satisfaction</div>
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: getRatingColor(company.rating.satisfaction),
                  marginBottom: '0.25rem'
                }}>
                  {company.rating.satisfaction}/5
                </div>
                <div style={{ fontSize: '0.8rem', color: getRatingColor(company.rating.satisfaction) }}>
                  {getRatingText(company.rating.satisfaction)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
