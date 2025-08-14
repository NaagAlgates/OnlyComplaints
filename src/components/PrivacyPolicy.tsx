import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem 3rem',
    lineHeight: '1.6',
    color: '#333',
  };

  const headerStyles: React.CSSProperties = {
    borderBottom: '2px solid #f97316',
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'center' as const,
    marginTop: '0.5rem',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem',
  };

  const subtitleStyles: React.CSSProperties = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '0',
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: '2rem',
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem',
    borderLeft: '4px solid #f97316',
    paddingLeft: '1rem',
  };

  const paragraphStyles: React.CSSProperties = {
    marginBottom: '1rem',
    fontSize: '1rem',
  };

  const listStyles: React.CSSProperties = {
    marginLeft: '2rem',
    marginBottom: '1rem',
  };

  const linkStyles: React.CSSProperties = {
    color: '#f97316',
    textDecoration: 'none',
  };

  const highlightStyles: React.CSSProperties = {
    backgroundColor: '#fef3f2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Privacy Policy</h1>
        <p style={subtitleStyles}>Last updated: August 13, 2025</p>
      </div>

      <div style={highlightStyles}>
        <p style={{...paragraphStyles, marginBottom: '0', fontWeight: 'bold'}}>
          OnlyComplaints is committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you use our platform.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>1. Information We Collect</h2>
        
        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Analytics Data</h3>
        <p style={paragraphStyles}>
          We use Google Analytics 4 to understand how visitors interact with our platform. This includes:
        </p>
        <ul style={listStyles}>
          <li>Pages you visit and time spent on each page</li>
          <li>Search terms you enter when looking for companies</li>
          <li>Companies you view and complaint categories you explore</li>
          <li>General location data (country/region level only)</li>
          <li>Device and browser information</li>
          <li>How you arrived at our site (referrer information)</li>
        </ul>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>What We Don't Collect</h3>
        <p style={paragraphStyles}>
          We DO NOT collect:
        </p>
        <ul style={listStyles}>
          <li>Personal identification information (names, addresses, phone numbers)</li>
          <li>Email addresses or contact details</li>
          <li>Financial information</li>
          <li>Specific personal complaints or private information</li>
          <li>Precise location data</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>2. How We Use Your Information</h2>
        <p style={paragraphStyles}>We use the collected analytics data to:</p>
        <ul style={listStyles}>
          <li>Improve the platform's user experience and functionality</li>
          <li>Understand which companies and complaint processes are most searched</li>
          <li>Identify areas where we can add more helpful information</li>
          <li>Monitor platform performance and fix technical issues</li>
          <li>Make data-driven decisions about new features</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>3. Data Sharing and Third Parties</h2>
        
        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Google Analytics</h3>
        <p style={paragraphStyles}>
          Our analytics data is processed by Google Analytics 4. We have configured it with privacy-focused settings:
        </p>
        <ul style={listStyles}>
          <li>IP addresses are anonymized</li>
          <li>Advertising features are disabled</li>
          <li>Data sharing with Google for advertising is disabled</li>
          <li>Data retention is set to the minimum required period</li>
        </ul>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>No Data Sales</h3>
        <p style={paragraphStyles}>
          We never sell, rent, or trade your data to third parties. OnlyComplaints is a free, open-source platform designed to help consumers.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>4. Cookies and Tracking</h2>
        <p style={paragraphStyles}>
          We use minimal cookies for analytics purposes only:
        </p>
        <ul style={listStyles}>
          <li><strong>_ga:</strong> Distinguishes unique users (expires after 2 years)</li>
          <li><strong>_ga_*:</strong> Persists session state (expires after 2 years)</li>
        </ul>
        <p style={paragraphStyles}>
          These cookies do not contain personal information and are used solely for understanding website usage patterns.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>5. Your Rights</h2>
        <p style={paragraphStyles}>You have the right to:</p>
        <ul style={listStyles}>
          <li>Opt out of analytics tracking by enabling "Do Not Track" in your browser</li>
          <li>Clear cookies and browsing data at any time</li>
          <li>Use browser extensions that block analytics tracking</li>
          <li>Request information about data we may have collected (though we collect minimal data)</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>6. Data Security</h2>
        <p style={paragraphStyles}>
          We implement appropriate security measures to protect the limited data we collect:
        </p>
        <ul style={listStyles}>
          <li>All data transmission is encrypted (HTTPS)</li>
          <li>Analytics configuration follows privacy best practices</li>
          <li>Regular security updates and monitoring</li>
          <li>Minimal data collection principle</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>7. International Users</h2>
        <p style={paragraphStyles}>
          OnlyComplaints is designed for Australian consumers and complaint processes. If you're accessing from outside Australia:
        </p>
        <ul style={listStyles}>
          <li>Your data may be processed in countries where Google Analytics operates</li>
          <li>The same privacy protections apply regardless of your location</li>
          <li>GDPR and other international privacy rights are respected</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>8. Open Source and Transparency</h2>
        <p style={paragraphStyles}>
          OnlyComplaints is an open-source project. You can:
        </p>
        <ul style={listStyles}>
          <li>View our source code on <a href="https://github.com/NaagAlgates/OnlyComplaints" style={linkStyles} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li>See exactly how analytics is implemented</li>
          <li>Contribute to improving privacy practices</li>
          <li>Suggest improvements via GitHub issues</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>9. Children's Privacy</h2>
        <p style={paragraphStyles}>
          OnlyComplaints is not intended for children under 13. We do not knowingly collect information from children under 13 years of age.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>10. Changes to This Policy</h2>
        <p style={paragraphStyles}>
          We may update this privacy policy from time to time. When we do:
        </p>
        <ul style={listStyles}>
          <li>The "Last updated" date will be revised</li>
          <li>Material changes will be prominently displayed</li>
          <li>Continued use of the platform constitutes acceptance of changes</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>11. Contact Information</h2>
        <p style={paragraphStyles}>
          If you have questions about this privacy policy or our data practices:
        </p>
        <ul style={listStyles}>
          <li>Create an issue on our <a href="https://github.com/NaagAlgates/OnlyComplaints/issues" style={linkStyles} target="_blank" rel="noopener noreferrer">GitHub repository</a></li>
          <li>Email us at: privacy@onlycomplaints.au (if available)</li>
        </ul>
      </div>

      <div style={{...highlightStyles, backgroundColor: '#f0fdf4', borderColor: '#bbf7d0'}}>
        <p style={{...paragraphStyles, marginBottom: '0', fontWeight: 'bold'}}>
          <strong>Our Commitment:</strong> OnlyComplaints exists to help Australian consumers navigate complaint processes. 
          We collect only the minimum data necessary to improve this service and protect your privacy at every step.
        </p>
      </div>
    </div>
  );
};
