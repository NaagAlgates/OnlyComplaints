import { GovernmentAgency } from '../types';
import { AgenciesData } from '../types/json';
import agenciesData from './agencies.json';

// Type assertion for JSON data
const typedAgenciesData = agenciesData as AgenciesData;

// Load agencies from JSON
export const agencies: GovernmentAgency[] = typedAgenciesData.agencies;

export const getAgencyById = (id: string): GovernmentAgency | undefined => {
  return agencies.find(agency => agency.id === id);
};

export const getAgenciesByIds = (ids: string[]): GovernmentAgency[] => {
  return ids.map(id => getAgencyById(id)).filter(Boolean) as GovernmentAgency[];
};

export const getAgenciesByIndustry = (industry: string): GovernmentAgency[] => {
  return agencies.filter(agency => 
    agency.industries.includes(industry.toLowerCase())
  );
};

export const getAgenciesByJurisdiction = (jurisdiction: 'federal' | 'state' | 'territory'): GovernmentAgency[] => {
  return agencies.filter(agency => agency.jurisdiction === jurisdiction);
};

// Legacy exports for backward compatibility
export const governmentAgencies = agencies;
