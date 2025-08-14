import React from 'react';

export const About: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
    lineHeight: '1.6',
    color: '#333',
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: '2rem',
  };

  const subHeaderStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: '1rem',
    marginTop: '2rem',
  };

  const paragraphStyles: React.CSSProperties = {
    marginBottom: '1rem',
    fontSize: '1rem',
  };

  const linkStyles: React.CSSProperties = {
    color: '#f97316',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const highlightBoxStyles: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    border: '1px solid #e1e5e9',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '2rem',
  };

  const badgeStyles: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.875rem',
    fontWeight: '600',
    marginLeft: '0.5rem',
  };

  return (
    <div style={containerStyles}>

      <div style={highlightBoxStyles}>
        <p style={{ 
          ...paragraphStyles, 
          fontSize: '1.1rem', 
          fontWeight: '500', 
          textAlign: 'center', 
          margin: 0
        }}>
          Empowering Australian consumers with official complaint channels and escalation paths.
        </p>
        <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
          <span style={badgeStyles}>Open Source</span>
        </div>
      </div>

      <section style={sectionStyles}>
        <h2 style={subHeaderStyles}>Our Mission</h2>
        <p style={paragraphStyles}>
          OnlyComplaints was created to solve a common problem: consumers often don't know where to lodge complaints 
          or how to escalate issues when companies don't respond appropriately. We provide a centralized directory 
          of official complaint channels for Australian businesses and government agencies.
        </p>
        <p style={paragraphStyles}>
          Our goal is to improve consumer protection by making complaint processes transparent, accessible, 
          and properly escalated when needed.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={subHeaderStyles}>Open Source & Community Driven</h2>
        <p style={paragraphStyles}>
          OnlyComplaints is a fully open-source project, meaning anyone can contribute to improving consumer 
          protection in Australia. The source code, data, and development process are completely transparent 
          and available on GitHub.
        </p>
        <p style={paragraphStyles}>
          We encourage contributions from developers, consumer advocates, legal professionals, and everyday 
          Australians who want to help improve the complaint process for everyone.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={subHeaderStyles}>How to Contribute</h2>
        <p style={paragraphStyles}>
          <strong>Add New Companies:</strong> Submit pull requests to add new companies or government agencies 
          with their official complaint processes and escalation paths.
        </p>
        <p style={paragraphStyles}>
          <strong>Improve Data:</strong> Help us keep information accurate and up-to-date by suggesting corrections 
          or improvements to existing entries.
        </p>
        <p style={paragraphStyles}>
          <strong>Development:</strong> Contribute to the platform's features, user experience, or technical infrastructure.
        </p>
        <p style={paragraphStyles}>
          Visit our{' '}
          <a 
            href="https://github.com/NaagAlgates/OnlyComplaints" 
            target="_blank" 
            rel="noopener noreferrer"
            style={linkStyles}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            GitHub repository
          </a>{' '}
          to get started with contributing.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={subHeaderStyles}>Project Attribution</h2>
        <p style={paragraphStyles}>
          OnlyComplaints was founded and is maintained by{' '}
          <a 
            href="https://www.jcube.com.au" 
            target="_blank" 
            rel="noopener noreferrer"
            style={linkStyles}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Jcube Software Solutions
          </a>{' '}
          in collaboration with the open-source community. The project operates under open-source principles 
          to ensure transparency and community ownership.
        </p>
        <p style={paragraphStyles}>
          Jcube Software Solutions continues to provide technical leadership and hosting infrastructure, 
          while welcoming contributions from developers and consumer advocates across Australia.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={subHeaderStyles}>Technology & Transparency</h2>
        <p style={paragraphStyles}>
          Built with modern web technologies including React and TypeScript, OnlyComplaints prioritizes 
          performance, accessibility, and user privacy. All analytics are transparent, and we don't 
          track personal information without clear disclosure.
        </p>
        <p style={paragraphStyles}>
          The platform is designed to be fast, accessible on all devices, and easy to navigate when 
          you're dealing with consumer issues.
        </p>
      </section>

      <div style={highlightBoxStyles}>
        <p style={{ ...paragraphStyles, textAlign: 'center', margin: 0, fontWeight: '500' }}>
          Join us in making consumer protection more accessible for all Australians.
        </p>
      </div>
    </div>
  );
};
