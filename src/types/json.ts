// Type definitions for JSON data files
export interface AgencyJSON {
  id: string;
  name: string;
  acronym: string;
  description: string;
  website: string;
  contact: {
    phone: string;
    email?: string;
    onlineForm?: string;
  };
  jurisdiction: 'federal' | 'state' | 'territory';
  industries: string[];
  complaintTypes: string[];
  process: {
    steps: string[];
    timeframe: string;
    requirements: string[];
  };
}

export interface CompanyJSON {
  id: string;
  name: string;
  abn?: string;
  industry: string;
  description: string;
  logo?: string;
  website: string;
  contact: {
    phone?: string;
    email?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      postcode: string;
    };
    hours?: string;
  };
  complaints: {
    internalProcess: {
      steps: string[];
      timeframe: string;
      contactDetails: {
        phone?: string;
        email?: string;
        onlineForm?: string;
      };
    };
    escalation: {
      agencyIds: string[]; // References to agency IDs
      timeline: string;
    };
  };
  commonIssues: string[];
}

export interface AgenciesData {
  agencies: AgencyJSON[];
}

export interface CompaniesData {
  companies: CompanyJSON[];
}
