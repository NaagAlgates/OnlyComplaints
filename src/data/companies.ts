import { Company } from '../types';
import { CompaniesData } from '../types/json';
import { getAgenciesByIds } from './agencies';
import companiesData from './companies.json';

// Type assertion for JSON data
const typedCompaniesData = companiesData as CompaniesData;

// Transform JSON data to Company objects with resolved agency references
export const companies: Company[] = typedCompaniesData.companies.map(companyData => ({
  ...companyData,
  complaints: {
    ...companyData.complaints,
    escalation: {
      agencies: getAgenciesByIds(companyData.complaints.escalation.agencyIds),
      timeline: companyData.complaints.escalation.timeline
    }
  }
}));

export const searchCompanies = (query: string): Company[] => {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  const results = companies.filter(company => 
    company.name.toLowerCase().includes(lowerQuery) ||
    company.industry.toLowerCase().includes(lowerQuery) ||
    company.commonIssues.some(issue => issue.toLowerCase().includes(lowerQuery))
  );
  
  // Sort by relevance (exact name matches first, then partial matches)
  return results.sort((a, b) => {
    const aNameMatch = a.name.toLowerCase().includes(lowerQuery);
    const bNameMatch = b.name.toLowerCase().includes(lowerQuery);
    
    if (aNameMatch && !bNameMatch) return -1;
    if (!aNameMatch && bNameMatch) return 1;
    return 0;
  });
};

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export const getCompaniesByIndustry = (industry: string): Company[] => {
  return companies.filter(company => 
    company.industry.toLowerCase() === industry.toLowerCase()
  );
};
