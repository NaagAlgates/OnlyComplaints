# OnlyComplaints

> Find the official complaint channels for Australia's top companies

OnlyComplaints is an open-source platform that helps Australian consumers navigate the complaint resolution process. Find company contact details, understand internal complaint procedures, and know your escalation options with government agencies.

## 🌟 Features

- **Company Search**: Find companies by name, industry, or issue type
- **Contact Information**: Get direct contact details for complaints
- **Step-by-Step Guidance**: Clear process for filing complaints
- **Escalation Paths**: Know when and how to escalate to government agencies
- **Government Agency Database**: Comprehensive list of Australian consumer protection agencies

## 🚀 Live Demo

Visit [onlycomplaints.com.au](https://onlycomplaints.com.au) to use the platform.

## 🛠️ Development

This is a React + TypeScript project built with Vite and deployed on GitHub Pages.

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/NaagAlgates/OnlyComplaints.git
cd OnlyComplaints
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

### Deploying

The project automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the master branch.

For manual deployment:
```bash
npm run deploy
```

## 📊 Current Data

The platform currently includes sample data for major Australian companies:

- **Telecommunications**: Telstra, Optus
- **Banking**: Commonwealth Bank
- **Retail**: Woolworths  
- **Energy**: Origin Energy

Government agencies included:
- ACCC (Australian Competition and Consumer Commission)
- ACMA (Australian Communications and Media Authority)
- ASIC (Australian Securities and Investments Commission)
- TIO (Telecommunications Industry Ombudsman)

## 🤝 Contributing

We welcome contributions! This is an open-source project aimed at helping Australian consumers.

### How to Contribute

1. **Add Company Data**: Help expand our database of Australian companies
2. **Update Government Agencies**: Keep agency information current
3. **Improve UI/UX**: Enhance the user experience
4. **Bug Fixes**: Report and fix issues
5. **Documentation**: Improve guides and documentation

### Contributing Data (New JSON Structure!)

We've restructured our data to use JSON files for easier community contributions:

- **Companies**: `src/data/companies.json`
- **Government Agencies**: `src/data/agencies.json`

📖 **See [DATA_CONTRIBUTION.md](DATA_CONTRIBUTION.md) for detailed guidelines on adding companies and agencies.**

This new structure makes it much easier to contribute via GitHub Pull Requests - just edit the JSON files!

### Code Style

- Use TypeScript for all new code
- Follow existing code patterns
- Include inline styles as requested
- Test your changes locally before submitting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 MVP Goals

Current MVP focuses on:
- Core search functionality
- Company complaint processes  
- Government escalation paths
- Clean, modern interface

Future enhancements:
- User accounts and complaint tracking
- Company response ratings
- Expanded company database
- Mobile app
- API for developers

## 📞 Contact

- **Issues**: [GitHub Issues](https://github.com/NaagAlgates/OnlyComplaints/issues)
- **Discussions**: [GitHub Discussions](https://github.com/NaagAlgates/OnlyComplaints/discussions)

## 🙏 Acknowledgments

- Australian consumer protection agencies for their public information
- Open source community for tools and inspiration
- Australian consumers who deserve better complaint resolution processes

---

**Disclaimer**: This platform provides information for educational purposes. Always verify current contact details and processes directly with companies and government agencies. OnlyComplaints is not affiliated with any government agency or company listed.
