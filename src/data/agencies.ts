import { GovernmentAgency } from '../types';

export const governmentAgencies: GovernmentAgency[] = [
  {
    id: 'accc',
    name: 'Australian Competition and Consumer Commission',
    acronym: 'ACCC',
    description: 'Australia\'s primary consumer protection and competition regulator',
    website: 'https://www.accc.gov.au',
    contact: {
      phone: '1300 302 502',
      email: 'contact@accc.gov.au',
      onlineForm: 'https://www.accc.gov.au/contact-us/contact-the-accc'
    },
    jurisdiction: 'federal',
    industries: ['retail', 'telecommunications', 'energy', 'banking', 'insurance', 'automotive'],
    complaintTypes: ['misleading advertising', 'unfair contracts', 'price fixing', 'product safety', 'scams'],
    process: {
      steps: [
        'Submit complaint online or by phone',
        'ACCC reviews complaint and determines action',
        'May investigate if widespread issue identified',
        'Enforcement action taken if laws breached'
      ],
      timeframe: '2-4 weeks for initial response',
      requirements: [
        'Evidence of the issue (receipts, emails, photos)',
        'Details of attempts to resolve with company',
        'Contact information for all parties'
      ]
    }
  },
  {
    id: 'acma',
    name: 'Australian Communications and Media Authority',
    acronym: 'ACMA',
    description: 'Regulates broadcasting, internet, radio communications and telecommunications',
    website: 'https://www.acma.gov.au',
    contact: {
      phone: '1800 803 772',
      email: 'info@acma.gov.au',
      onlineForm: 'https://www.acma.gov.au/complaints'
    },
    jurisdiction: 'federal',
    industries: ['telecommunications', 'media', 'internet'],
    complaintTypes: ['phone services', 'internet services', 'spam', 'broadcasting content', 'phone scams'],
    process: {
      steps: [
        'Try to resolve with service provider first',
        'Contact Telecommunications Industry Ombudsman if unresolved',
        'Submit complaint to ACMA for regulatory issues',
        'ACMA investigates and may take enforcement action'
      ],
      timeframe: '1-2 weeks for acknowledgment',
      requirements: [
        'Evidence of contact with service provider',
        'Account details and service information',
        'Description of the problem and impact'
      ]
    }
  },
  {
    id: 'asic',
    name: 'Australian Securities and Investments Commission',
    acronym: 'ASIC',
    description: 'Regulates financial services, markets, and companies',
    website: 'https://www.asic.gov.au',
    contact: {
      phone: '1300 300 630',
      email: 'info.service@asic.gov.au',
      onlineForm: 'https://www.asic.gov.au/about-asic/contact-us/complain-about-misconduct'
    },
    jurisdiction: 'federal',
    industries: ['banking', 'insurance', 'financial services', 'superannuation', 'credit'],
    complaintTypes: ['financial advice', 'insurance claims', 'banking services', 'investment schemes', 'credit issues'],
    process: {
      steps: [
        'Report misconduct or breach online',
        'ASIC assesses the report',
        'Investigation may be commenced',
        'Enforcement action if laws breached'
      ],
      timeframe: '4-6 weeks for initial assessment',
      requirements: [
        'Detailed description of the misconduct',
        'Supporting documentation',
        'Contact details of all parties involved'
      ]
    }
  },
  {
    id: 'tio',
    name: 'Telecommunications Industry Ombudsman',
    acronym: 'TIO',
    description: 'Independent dispute resolution for telecommunications consumers',
    website: 'https://www.tio.com.au',
    contact: {
      phone: '1800 062 058',
      onlineForm: 'https://www.tio.com.au/making-a-complaint'
    },
    jurisdiction: 'federal',
    industries: ['telecommunications', 'internet', 'mobile'],
    complaintTypes: ['billing disputes', 'service faults', 'contract disputes', 'poor service', 'connection issues'],
    process: {
      steps: [
        'First try to resolve with your provider',
        'Lodge complaint with TIO if unresolved after 8 weeks',
        'TIO attempts to facilitate resolution',
        'Formal investigation if informal resolution fails',
        'Binding determination made if required'
      ],
      timeframe: '2-4 weeks for informal resolution',
      requirements: [
        'Complaint must be made within 2 years of issue',
        'Evidence of attempts to resolve with provider',
        'Account and service details'
      ]
    }
  }
];

export const getAgenciesByIndustry = (industry: string): GovernmentAgency[] => {
  return governmentAgencies.filter(agency => 
    agency.industries.includes(industry.toLowerCase())
  );
};

export const getAgencyById = (id: string): GovernmentAgency | undefined => {
  return governmentAgencies.find(agency => agency.id === id);
};
