import React from 'react';

export const Footer: React.FC = () => {
  const footerStyles: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #e1e5e9',
    padding: '2rem 0',
    marginTop: '3rem',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center',
  };

  const textStyles: React.CSSProperties = {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  };

  const linksStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  };

  const linkStyles: React.CSSProperties = {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  };

  const copyrightStyles: React.CSSProperties = {
    color: '#999',
    fontSize: '0.8rem',
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <p style={textStyles}>
          OnlyComplaints helps Australian consumers find official complaint channels and escalation paths.
          This is an open-source project aimed at improving consumer protection.
        </p>
        
        <div style={linksStyles}>
          <a
            href="#privacy"
            style={linkStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#f97316';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#666';
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            style={linkStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#f97316';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#666';
            }}
          >
            Terms of Use
          </a>
          <a
            href="https://github.com/NaagAlgates/OnlyComplaints"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#f97316';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#666';
            }}
          >
            Contribute on GitHub
          </a>
        </div>

        <p style={copyrightStyles}>
          © {currentYear} OnlyComplaints. Open source project for consumer protection.
        </p>
      </div>
    </footer>
  );
};
