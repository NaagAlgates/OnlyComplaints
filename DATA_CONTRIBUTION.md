# OnlyComplaints Data Contribution Guide

## 📊 Data Structure

OnlyComplaints uses JSON files for data management to enable easy community contributions via GitHub Pull Requests.

### Data Files

- **`src/data/companies.json`** - Company information and complaint processes
- **`src/data/agencies.json`** - Government agencies and ombudsman services

## 🏢 Adding a New Company

To add a new company, edit `src/data/companies.json` and add a new company object:

```json
{
  "id": "unique-company-id",
  "name": "Company Name Pty Ltd",
  "abn": "12 345 678 901",
  "industry": "telecommunications|banking|retail|energy|insurance|other",
  "description": "Brief description of the company",
  "website": "https://www.company.com.au",
  "contact": {
    "phone": "1800 XXX XXX",
    "email": "customer.service@company.com.au",
    "address": {
      "street": "123 Main Street",
      "city": "Melbourne",
      "state": "VIC",
      "postcode": "3000"
    },
    "hours": "Business hours description"
  },
  "complaints": {
    "internalProcess": {
      "steps": [
        "Step 1: Contact customer service",
        "Step 2: Request escalation if needed",
        "Step 3: Formal complaint process",
        "Step 4: Investigation period",
        "Step 5: Resolution provided"
      ],
      "timeframe": "X business days for resolution",
      "contactDetails": {
        "phone": "1800 XXX XXX",
        "email": "complaints@company.com.au",
        "onlineForm": "https://www.company.com.au/complaints"
      }
    },
    "escalation": {
      "agencyIds": ["relevant-agency-id"],
      "timeline": "When and how to escalate to external agencies"
    }
  },
  "commonIssues": [
    "Issue 1",
    "Issue 2",
    "Issue 3"
  ]
}
```

### Required Fields
- `id` - Unique identifier (lowercase, hyphenated)
- `name` - Official company name
- `industry` - One of the predefined industries
- `description` - Brief company description
- `website` - Official company website
- `complaints.internalProcess.steps` - Step-by-step complaint process
- `complaints.escalation.agencyIds` - Array of relevant agency IDs
- `commonIssues` - Array of typical complaint categories

### Optional Fields
- `abn` - Australian Business Number
- `contact.*` - Contact information (recommended)
- `complaints.internalProcess.timeframe` - Expected resolution time
- `complaints.internalProcess.contactDetails` - Specific complaint contact info

## 🏛️ Adding a Government Agency

To add a new government agency, edit `src/data/agencies.json`:

```json
{
  "id": "unique-agency-id",
  "name": "Full Agency Name",
  "acronym": "ACRONYM",
  "description": "What the agency does and their role",
  "website": "https://www.agency.gov.au",
  "contact": {
    "phone": "1800 XXX XXX",
    "email": "contact@agency.gov.au",
    "onlineForm": "https://www.agency.gov.au/complaints"
  },
  "jurisdiction": "federal|state|territory",
  "industries": ["industry1", "industry2"],
  "complaintTypes": [
    "Type of complaints they handle"
  ],
  "process": {
    "steps": [
      "Step 1: How to start",
      "Step 2: What happens next",
      "Step 3: Resolution process"
    ],
    "timeframe": "Expected timeframe",
    "requirements": [
      "Requirement 1",
      "Requirement 2"
    ]
  }
}
```

## 🔗 Linking Companies to Agencies

Companies reference agencies using the `agencyIds` array in their escalation section:

```json
"escalation": {
  "agencyIds": ["tio", "acma"],
  "timeline": "Contact TIO after 8 weeks, ACMA for regulatory issues"
}
```

Available agency IDs:
- `tio` - Telecommunications Industry Ombudsman
- `acma` - Australian Communications and Media Authority  
- `afca` - Australian Financial Complaints Authority
- `accc` - Australian Competition and Consumer Commission
- `ewon-nsw` - Energy & Water Ombudsman NSW
- `esc-vic` - Essential Services Commission Victoria

## 📝 Contribution Guidelines

### Pull Request Process

1. **Fork** the repository
2. **Edit** the appropriate JSON file (`companies.json` or `agencies.json`)
3. **Validate** your JSON syntax
4. **Test** locally if possible
5. **Submit** a Pull Request with:
   - Clear description of what you're adding/changing
   - Source of information (company website, official documents)
   - Any relevant links or references

### Data Quality Standards

- **Accuracy**: All information must be current and factual
- **Sources**: Provide sources for complaint processes and contact details
- **Completeness**: Include all required fields
- **Consistency**: Follow existing naming conventions and formats

### What We Accept

✅ **New Companies**: Major Australian companies with established complaint processes
✅ **New Agencies**: Government agencies, ombudsman services, regulatory bodies
✅ **Updates**: Corrections to existing information
✅ **Improvements**: Better descriptions, additional contact methods

### What We Don't Accept

❌ **Incomplete Data**: Missing required fields
❌ **Inaccurate Information**: Unverified or outdated details
❌ **Duplicate Entries**: Companies or agencies already listed
❌ **Non-Australian Entities**: This platform focuses on Australian businesses

## 🧪 Testing Your Changes

Before submitting a PR:

1. Validate JSON syntax using an online JSON validator
2. Check that all required fields are present
3. Verify agency IDs exist in `agencies.json`
4. Ensure industry names match existing categories

## 📞 Questions?

If you have questions about contributing data:

1. Check existing issues on GitHub
2. Create a new issue with the `question` label
3. Provide as much context as possible

## 🎯 Industry Categories

Use these predefined industry categories:

- `telecommunications`
- `banking`
- `retail`
- `energy`
- `insurance`
- `transport`
- `utilities`
- `healthcare`
- `education`
- `government`
- `other`

---

**Thank you for helping make OnlyComplaints a comprehensive resource for Australian consumers!** 🇦🇺
