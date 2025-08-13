export interface Company {
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
      agencies: GovernmentAgency[];
      timeline: string;
    };
  };
  commonIssues: string[];
  rating?: {
    responseTime: number; // 1-5 scale
    resolution: number; // 1-5 scale
    satisfaction: number; // 1-5 scale
  };
}

export interface GovernmentAgency {
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

export interface SearchResult {
  company: Company;
  score: number;
  matchType: 'name' | 'industry' | 'issue';
}
