import React from 'react';

export const TermsOfUse: React.FC = () => {
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

  const importantBoxStyles: React.CSSProperties = {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Terms of Use</h1>
        <p style={subtitleStyles}>Last updated: August 14, 2025</p>
      </div>

      <div style={highlightStyles}>
        <p style={{...paragraphStyles, marginBottom: '0', fontWeight: 'bold'}}>
          Welcome to OnlyComplaints. By using our platform, you agree to these terms. Please read them carefully as they contain important information about your rights and obligations.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>1. Acceptance of Terms</h2>
        <p style={paragraphStyles}>
          By accessing or using OnlyComplaints ("the Platform," "we," "us," "our"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our platform.
        </p>
        <p style={paragraphStyles}>
          These terms apply to all users, including visitors who browse without creating an account.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>2. About OnlyComplaints</h2>
        
        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Our Purpose</h3>
        <p style={paragraphStyles}>
          OnlyComplaints is a free, open-source platform designed to help Australian consumers:
        </p>
        <ul style={listStyles}>
          <li>Find official complaint channels for companies and services</li>
          <li>Understand escalation paths to government agencies and ombudsmen</li>
          <li>Access accurate, up-to-date contact information for filing complaints</li>
          <li>Navigate Australia's consumer protection system effectively</li>
        </ul>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>What We Are NOT</h3>
        <p style={paragraphStyles}>
          OnlyComplaints is NOT:
        </p>
        <ul style={listStyles}>
          <li>A complaint filing service or intermediary</li>
          <li>A legal advice provider</li>
          <li>A dispute resolution service</li>
          <li>A customer service platform for companies</li>
          <li>A review or rating website</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>3. How to Use OnlyComplaints</h2>
        
        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Permitted Uses</h3>
        <p style={paragraphStyles}>You may use OnlyComplaints to:</p>
        <ul style={listStyles}>
          <li>Search for companies and their complaint processes</li>
          <li>Find contact information for filing complaints</li>
          <li>Learn about your consumer rights and escalation options</li>
          <li>Access links to official government agencies and ombudsmen</li>
          <li>Contribute to our open-source codebase via GitHub</li>
        </ul>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Prohibited Uses</h3>
        <p style={paragraphStyles}>You may NOT use OnlyComplaints to:</p>
        <ul style={listStyles}>
          <li>Submit actual complaints through our platform</li>
          <li>Post defamatory, false, or misleading information</li>
          <li>Attempt to hack, disrupt, or damage our systems</li>
          <li>Use automated tools to scrape our data excessively</li>
          <li>Impersonate others or provide false information</li>
          <li>Use the platform for commercial advertising or spam</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>4. Information Accuracy and Disclaimers</h2>
        
        <div style={importantBoxStyles}>
          <p style={{...paragraphStyles, marginBottom: '0', fontWeight: 'bold'}}>
            <strong>IMPORTANT:</strong> OnlyComplaints provides information for guidance only. We make reasonable efforts to ensure accuracy but cannot guarantee that all information is current, complete, or error-free.
          </p>
        </div>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Your Responsibility</h3>
        <p style={paragraphStyles}>
          It is your responsibility to:
        </p>
        <ul style={listStyles}>
          <li>Verify contact information before using it</li>
          <li>Check company websites for the most current complaint procedures</li>
          <li>Confirm agency jurisdiction and eligibility requirements</li>
          <li>Follow proper complaint procedures as outlined by each organization</li>
        </ul>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>No Legal Advice</h3>
        <p style={paragraphStyles}>
          OnlyComplaints does not provide legal advice. The information on our platform is for informational purposes only and should not be considered legal counsel. For legal advice, consult with a qualified attorney.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>5. Third-Party Links and Services</h2>
        <p style={paragraphStyles}>
          Our platform contains links to external websites, including:
        </p>
        <ul style={listStyles}>
          <li>Company websites and complaint forms</li>
          <li>Government agency websites</li>
          <li>Ombudsman services</li>
          <li>Regulatory body websites</li>
        </ul>
        <p style={paragraphStyles}>
          We are not responsible for the content, privacy practices, or availability of these external sites. When you click these links, you leave our platform and are subject to the terms and policies of those external sites.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>6. Intellectual Property</h2>
        
        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Open Source License</h3>
        <p style={paragraphStyles}>
          OnlyComplaints is open-source software. Our source code is available on <a href="https://github.com/NaagAlgates/OnlyComplaints" style={linkStyles} target="_blank" rel="noopener noreferrer">GitHub</a> under the terms specified in our repository license.
        </p>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Content and Data</h3>
        <p style={paragraphStyles}>
          The complaint procedure information and contact details we provide are factual information intended for public use. Our compilation and presentation of this information is our intellectual property.
        </p>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Trademark Notices</h3>
        <p style={paragraphStyles}>
          Company names, logos, and trademarks mentioned on OnlyComplaints belong to their respective owners. We use these only for identification purposes.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>7. Limitation of Liability</h2>
        
        <div style={highlightStyles}>
          <p style={{...paragraphStyles, marginBottom: '0.5rem', fontWeight: 'bold'}}>
            <strong>DISCLAIMER:</strong> OnlyComplaints is provided "as is" without warranties of any kind.
          </p>
          <p style={{...paragraphStyles, marginBottom: '0'}}>
            We are not liable for any damages arising from your use of our platform, including but not limited to direct, indirect, incidental, punitive, or consequential damages.
          </p>
        </div>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Specific Limitations</h3>
        <p style={paragraphStyles}>We are not responsible for:</p>
        <ul style={listStyles}>
          <li>Outdated or incorrect contact information</li>
          <li>Changes in company complaint procedures</li>
          <li>Results of complaints filed using our information</li>
          <li>Actions taken by companies or agencies you contact</li>
          <li>Technical issues or platform downtime</li>
          <li>Lost data or interrupted service</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>8. User Contributions</h2>
        
        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>GitHub Contributions</h3>
        <p style={paragraphStyles}>
          We welcome contributions to improve OnlyComplaints through our GitHub repository. By contributing:
        </p>
        <ul style={listStyles}>
          <li>You grant us the right to use your contributions under our open-source license</li>
          <li>You confirm that your contributions are original or properly licensed</li>
          <li>You agree to follow our contribution guidelines</li>
        </ul>

        <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Data Submissions</h3>
        <p style={paragraphStyles}>
          If you submit information about companies or agencies:
        </p>
        <ul style={listStyles}>
          <li>Ensure the information is accurate and up-to-date</li>
          <li>Only submit publicly available information</li>
          <li>Do not include personal opinions or reviews</li>
          <li>Follow our data contribution guidelines</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>9. Privacy and Data Protection</h2>
        <p style={paragraphStyles}>
          Your privacy is important to us. Our data collection and use practices are described in our <a href="#privacy" style={linkStyles}>Privacy Policy</a>, which forms part of these terms.
        </p>
        <p style={paragraphStyles}>
          Key points:
        </p>
        <ul style={listStyles}>
          <li>We collect minimal data necessary for platform operation</li>
          <li>We use Google Analytics to understand platform usage</li>
          <li>We do not collect personal complaint information</li>
          <li>We do not share your data with companies or agencies</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>10. Platform Availability</h2>
        <p style={paragraphStyles}>
          OnlyComplaints is provided free of charge. We make reasonable efforts to maintain platform availability but do not guarantee:
        </p>
        <ul style={listStyles}>
          <li>Continuous, uninterrupted access</li>
          <li>Freedom from technical errors or bugs</li>
          <li>Compatibility with all devices or browsers</li>
          <li>Permanent availability of the service</li>
        </ul>
        <p style={paragraphStyles}>
          We reserve the right to modify, suspend, or discontinue the platform at any time without prior notice.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>11. Governing Law and Jurisdiction</h2>
        <p style={paragraphStyles}>
          These Terms of Use are governed by the laws of Australia. Any disputes arising from your use of OnlyComplaints will be subject to the jurisdiction of Australian courts.
        </p>
        <p style={paragraphStyles}>
          For international users, these terms apply regardless of your location when using our platform.
        </p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>12. Changes to Terms</h2>
        <p style={paragraphStyles}>
          We may update these Terms of Use from time to time to reflect:
        </p>
        <ul style={listStyles}>
          <li>Changes in our platform functionality</li>
          <li>Legal or regulatory requirements</li>
          <li>Best practices in platform operation</li>
        </ul>
        <p style={paragraphStyles}>
          When we make changes:
        </p>
        <ul style={listStyles}>
          <li>We will update the "Last updated" date</li>
          <li>Material changes will be prominently displayed</li>
          <li>Continued use constitutes acceptance of new terms</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>13. Contact Information</h2>
        <p style={paragraphStyles}>
          If you have questions about these Terms of Use or our platform:
        </p>
        <ul style={listStyles}>
          <li>Create an issue on our <a href="https://github.com/NaagAlgates/OnlyComplaints/issues" style={linkStyles} target="_blank" rel="noopener noreferrer">GitHub repository</a></li>
          <li>Email us at: terms@onlycomplaints.au (if available)</li>
          <li>Review our documentation and FAQs on GitHub</li>
        </ul>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>14. Severability</h2>
        <p style={paragraphStyles}>
          If any provision of these Terms of Use is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.
        </p>
      </div>

      <div style={importantBoxStyles}>
        <p style={{...paragraphStyles, marginBottom: '0', fontWeight: 'bold'}}>
          <strong>Remember:</strong> OnlyComplaints is a tool to help you find complaint channels and understand your rights. We provide information and guidance, but you are responsible for taking action on your own complaints. Always verify information and follow proper procedures when filing complaints.
        </p>
      </div>
    </div>
  );
};
