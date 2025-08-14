# Analytics Setup Instructions

## Google Analytics 4 Configuration

Your OnlyComplaints platform now has comprehensive analytics tracking implemented. Follow these steps to activate it:

### 1. Get Your Google Analytics 4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property for your website
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```bash
# Google Analytics 4 Configuration
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX  # Replace with your actual ID
```

**Important**: Add `.env` to your `.gitignore` to keep your Measurement ID secure.

### 3. Analytics Features Implemented

#### Event Tracking
- **Search Events**: Tracks user searches with query terms and result counts
- **Company Views**: Records which companies users view most frequently
- **Engagement Milestones**: Monitors user journey progression
- **Back Navigation**: Tracks user return patterns

#### Privacy Compliance
- Anonymized IP addresses
- Disabled advertising features
- Configurable consent management ready
- GDPR/CCPA compliant setup

#### Analytics Data Available
- User search behavior and popular queries
- Most viewed companies and complaint types
- User journey patterns and drop-off points
- Geographic usage patterns (anonymized)
- Device and browser usage statistics

### 4. Viewing Your Data

Once configured, you can view analytics in your Google Analytics dashboard:

1. **Real-time**: See current users and their actions
2. **Engagement**: Track search patterns and company views
3. **Conversions**: Monitor milestone achievements
4. **Demographics**: Understand your user base (anonymized)

### 5. Free Tier Limits

Google Analytics 4 offers generous free limits:
- 10 million events per month
- 500 distinct custom events
- 25 custom parameters per event
- 100 custom parameters total

Your current implementation uses minimal events and should stay well within free limits for a long time.

### 6. Data Retention

- Standard events: 14 months (free tier)
- Custom events: 14 months (free tier)
- Raw data exports available for longer retention if needed

### 7. Next Steps

1. Set up your GA4 property
2. Add your Measurement ID to `.env`
3. Deploy your site
4. Monitor analytics data in GA4 dashboard
5. Use insights to improve user experience

## Technical Implementation

The analytics system includes:

- **Configuration**: `/src/config/analytics.ts`
- **Utilities**: `/src/utils/analytics.ts`
- **Event Tracking**: Integrated throughout React components
- **Privacy Settings**: GDPR-compliant configuration
- **Environment Setup**: Secure credential management

Your analytics are now ready to provide valuable insights into how users interact with your complaint platform!
