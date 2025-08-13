import React from 'react';

export const Header: React.FC = () => {
  const headerStyles: React.CSSProperties = {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e1e5e9',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e3a8a',
    textDecoration: 'none',
  };

  const navStyles: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const linkStyles: React.CSSProperties = {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  };

  const betaTagStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.2rem 0.5rem',
    backgroundColor: '#ffc107',
    color: '#000',
    borderRadius: '12px',
    fontSize: '0.7rem',
    fontWeight: '600',
    marginLeft: '0.5rem',
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={logoStyles}>OnlyComplaints</span>
          <span style={betaTagStyles}>BETA</span>
        </div>
        <nav style={navStyles}>
          <a
            href="#about"
            style={linkStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#f97316';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#666';
            }}
          >
            About
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
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};
