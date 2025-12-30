import { ServiceCategory } from './types'

export const businessAnalyticsService: ServiceCategory = {
  slug: 'business-analytics',
  name: 'Business Analytics',
  tagline: 'Data-Driven Business Transformation',
  description: 'Optimize your operations with intelligent automation, strategic consulting, and data-driven insights that fuel business growth.',
  heroImage: '/services/analytics-hero.svg',
  subCategories: [
    {
      name: 'Business Solutions',
      services: [
        {
          slug: 'business-process-analysis',
          name: 'Business Process Analysis & Optimization',
          shortDescription: 'Streamline operations for maximum efficiency',
          description: 'We analyze your business processes to identify bottlenecks, redundancies, and opportunities for improvement. Our data-driven approach helps you optimize operations and reduce costs.',
          image: 'https://illustrations.popsy.co/amber/analytics.svg',
          features: [
            'Process Mapping',
            'Bottleneck Identification',
            'Cost Reduction Analysis',
            'Efficiency Metrics',
            'Change Management',
            'ROI Tracking'
          ],
          techStack: [
            { category: 'Process Tools', technologies: ['Lucidchart', 'Miro', 'Notion'] },
            { category: 'Analytics', technologies: ['Power BI', 'Tableau', 'Looker'] },
            { category: 'Project Mgmt', technologies: ['ClickUp', 'Asana', 'Monday.com'] },
            { category: 'Documentation', technologies: ['Confluence', 'Notion', 'GitBook'] }
          ],
          workflow: [
            { step: 1, title: 'Discovery', description: 'Deep dive into your current processes and pain points.' },
            { step: 2, title: 'Analysis', description: 'Map processes and identify improvement opportunities.' },
            { step: 3, title: 'Recommendations', description: 'Present data-driven optimization strategies.' },
            { step: 4, title: 'Implementation', description: 'Guide the implementation of process changes.' },
            { step: 5, title: 'Measurement', description: 'Track KPIs and measure improvement.' }
          ],
          whyChooseUs: [
            { title: 'Data-Driven', description: 'Recommendations backed by thorough analysis.', icon: '📊' },
            { title: 'Industry Experience', description: 'Worked across multiple industries.', icon: '🏢' },
            { title: 'Practical Focus', description: 'Actionable improvements, not just theory.', icon: '🎯' },
            { title: 'Change Support', description: 'Help your team adapt to new processes.', icon: '🤝' }
          ],
          faqs: [
            { question: 'How long does a process analysis take?', answer: 'Typically 2-4 weeks depending on the scope and complexity of processes.' },
            { question: 'Do you help with implementation?', answer: 'Yes, we can guide implementation or provide full hands-on support.' },
            { question: 'How do you measure success?', answer: 'We establish baseline KPIs and track improvements in efficiency, cost, and time.' },
            { question: 'What industries do you work with?', answer: 'We have experience across tech, finance, healthcare, retail, and more.' }
          ]
        },
        {
          slug: 'operations-workflow-design',
          name: 'Operations & Workflow Design',
          shortDescription: 'Design workflows that scale with your business',
          description: 'We design operational workflows that are efficient, scalable, and adaptable. From SOPs to team structures, we help you build operations that support growth.',
          image: 'https://illustrations.popsy.co/amber/business-planning.svg',
          features: [
            'Workflow Design',
            'SOP Development',
            'Team Structure',
            'Capacity Planning',
            'Quality Controls',
            'Scalability Planning'
          ],
          techStack: [
            { category: 'Workflow', technologies: ['ClickUp', 'Monday.com', 'Asana'] },
            { category: 'Documentation', technologies: ['Notion', 'Confluence', 'Trainual'] },
            { category: 'Communication', technologies: ['Slack', 'Teams', 'Loom'] },
            { category: 'Automation', technologies: ['Zapier', 'Make', 'n8n'] }
          ],
          workflow: [
            { step: 1, title: 'Assessment', description: 'Understand your current operations and goals.' },
            { step: 2, title: 'Design', description: 'Design optimized workflows and structures.' },
            { step: 3, title: 'Documentation', description: 'Create comprehensive SOPs and guides.' },
            { step: 4, title: 'Training', description: 'Train your team on new workflows.' },
            { step: 5, title: 'Optimization', description: 'Iterate based on real-world feedback.' }
          ],
          whyChooseUs: [
            { title: 'Startup Experience', description: 'Helped startups scale from 5 to 500+ employees.', icon: '🚀' },
            { title: 'Practical Design', description: 'Workflows that work in the real world.', icon: '✅' },
            { title: 'Team Buy-In', description: 'We involve your team in the design process.', icon: '👥' },
            { title: 'Future-Ready', description: 'Designed to scale with your growth.', icon: '📈' }
          ],
          faqs: [
            { question: 'How do you ensure team adoption?', answer: 'We involve teams early, provide training, and iterate based on feedback.' },
            { question: 'Can you work with remote teams?', answer: 'Absolutely. We specialize in designing operations for distributed teams.' },
            { question: 'What if our processes change frequently?', answer: 'We design flexible workflows with built-in adaptability.' },
            { question: 'Do you create documentation?', answer: 'Yes, we create comprehensive SOPs, playbooks, and training materials.' }
          ]
        },
        {
          slug: 'crm-implementation',
          name: 'CRM Implementation & Optimization',
          shortDescription: 'Get the most from your customer relationships',
          description: 'We implement and optimize CRM systems to help you manage customer relationships effectively. From setup to automation, we ensure your CRM drives growth.',
          image: 'https://illustrations.popsy.co/amber/customer-support.svg',
          features: [
            'CRM Selection',
            'Data Migration',
            'Custom Configuration',
            'Sales Pipelines',
            'Automation Setup',
            'Reporting & Dashboards'
          ],
          techStack: [
            { category: 'CRMs', technologies: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive'] },
            { category: 'Integration', technologies: ['Zapier', 'Make', 'Native APIs'] },
            { category: 'Analytics', technologies: ['Power BI', 'Tableau', 'Native Reports'] },
            { category: 'Email', technologies: ['Mailchimp', 'SendGrid', 'Klaviyo'] }
          ],
          workflow: [
            { step: 1, title: 'Requirements', description: 'Understand your sales and customer management needs.' },
            { step: 2, title: 'Selection', description: 'Help you choose the right CRM platform.' },
            { step: 3, title: 'Implementation', description: 'Set up and configure your CRM.' },
            { step: 4, title: 'Migration', description: 'Migrate data from existing systems.' },
            { step: 5, title: 'Training', description: 'Train your team for effective adoption.' }
          ],
          whyChooseUs: [
            { title: 'Platform Agnostic', description: 'Expertise across all major CRM platforms.', icon: '🔧' },
            { title: 'Data Integrity', description: 'Clean, organized data migration.', icon: '✅' },
            { title: 'Automation Focus', description: 'Automate repetitive tasks for efficiency.', icon: '⚡' },
            { title: 'ROI Driven', description: 'Focused on metrics that matter.', icon: '📈' }
          ],
          faqs: [
            { question: 'Which CRM do you recommend?', answer: 'It depends on your size and needs. HubSpot for SMBs, Salesforce for enterprise.' },
            { question: 'Can you migrate from our current CRM?', answer: 'Yes, we handle data migration from any system with proper mapping.' },
            { question: 'How long does CRM implementation take?', answer: 'Basic setup: 2-4 weeks. Complex implementations: 2-3 months.' },
            { question: 'Do you provide CRM training?', answer: 'Yes, comprehensive training for all user levels.' }
          ]
        },
        {
          slug: 'hr-resource-management',
          name: 'HR & Resource Management Systems',
          shortDescription: 'Streamline your people operations',
          description: 'We implement HR systems that simplify people management. From hiring to performance reviews, we set up systems that scale with your team.',
          image: 'https://illustrations.popsy.co/amber/teamwork.svg',
          features: [
            'HRIS Implementation',
            'Applicant Tracking',
            'Onboarding Automation',
            'Performance Management',
            'Time Tracking',
            'Payroll Integration'
          ],
          techStack: [
            { category: 'HRIS', technologies: ['BambooHR', 'Gusto', 'Rippling', 'Workday'] },
            { category: 'ATS', technologies: ['Lever', 'Greenhouse', 'Ashby', 'Workable'] },
            { category: 'Performance', technologies: ['Lattice', '15Five', 'Culture Amp'] },
            { category: 'Payroll', technologies: ['Gusto', 'Deel', 'Remote.com'] }
          ],
          workflow: [
            { step: 1, title: 'Needs Analysis', description: 'Understand your HR processes and pain points.' },
            { step: 2, title: 'Tool Selection', description: 'Recommend the right HR tech stack.' },
            { step: 3, title: 'Implementation', description: 'Set up and configure systems.' },
            { step: 4, title: 'Integration', description: 'Connect with payroll, benefits, etc.' },
            { step: 5, title: 'Rollout', description: 'Training and company-wide rollout.' }
          ],
          whyChooseUs: [
            { title: 'HR Tech Expertise', description: 'Deep knowledge of HR technology landscape.', icon: '👥' },
            { title: 'Employee Experience', description: 'Systems designed for great user experience.', icon: '😊' },
            { title: 'Compliance', description: 'Built with compliance in mind.', icon: '✅' },
            { title: 'Integration', description: 'Seamless connection between HR tools.', icon: '🔗' }
          ],
          faqs: [
            { question: 'What size companies do you work with?', answer: 'We work with companies from 10 to 5000+ employees.' },
            { question: 'Can you help with global HR?', answer: 'Yes, we implement solutions for international teams.' },
            { question: 'Do you handle compliance setup?', answer: 'We set up systems with compliance in mind, but recommend HR legal review.' },
            { question: 'How do you handle data privacy?', answer: 'All implementations follow data privacy best practices and regulations.' }
          ]
        },
        {
          slug: 'property-management-systems',
          name: 'Property Management Systems',
          shortDescription: 'Digitize your property operations',
          description: 'We implement property management systems that streamline operations for real estate businesses. From tenant management to maintenance tracking, we digitize your workflows.',
          image: 'https://illustrations.popsy.co/amber/house.svg',
          features: [
            'Property Listings',
            'Tenant Management',
            'Lease Tracking',
            'Maintenance Requests',
            'Payment Processing',
            'Reporting & Analytics'
          ],
          techStack: [
            { category: 'PMS', technologies: ['AppFolio', 'Buildium', 'Yardi', 'RentManager'] },
            { category: 'Payments', technologies: ['Stripe', 'PayPal', 'ACH'] },
            { category: 'Marketing', technologies: ['Zillow', 'Apartments.com', 'Facebook'] },
            { category: 'Custom', technologies: ['React', 'Node.js', 'PostgreSQL'] }
          ],
          workflow: [
            { step: 1, title: 'Assessment', description: 'Analyze your property portfolio and operations.' },
            { step: 2, title: 'Selection', description: 'Recommend the right PMS solution.' },
            { step: 3, title: 'Setup', description: 'Configure the system for your properties.' },
            { step: 4, title: 'Migration', description: 'Import property and tenant data.' },
            { step: 5, title: 'Training', description: 'Train your team on the new system.' }
          ],
          whyChooseUs: [
            { title: 'Industry Knowledge', description: 'Understand real estate operations deeply.', icon: '🏠' },
            { title: 'Integration', description: 'Connect with accounting, marketing, etc.', icon: '🔗' },
            { title: 'Custom Solutions', description: 'Build custom features when needed.', icon: '🔧' },
            { title: 'Scalability', description: 'Solutions that grow with your portfolio.', icon: '📈' }
          ],
          faqs: [
            { question: 'Commercial or residential properties?', answer: 'We work with both commercial and residential property managers.' },
            { question: 'Can you build custom features?', answer: 'Yes, we can extend platforms or build custom solutions.' },
            { question: 'How do you handle data migration?', answer: 'Careful mapping and migration of all property and tenant data.' },
            { question: 'Do you support multi-location?', answer: 'Yes, we set up systems for portfolios across multiple locations.' }
          ]
        },
        {
          slug: 'event-booking-systems',
          name: 'Event & Booking Management Systems',
          shortDescription: 'Simplify your event and booking operations',
          description: 'We implement booking and event management systems that automate reservations, payments, and communications. Perfect for venues, services, and experiences.',
          image: 'https://illustrations.popsy.co/amber/calendar.svg',
          features: [
            'Online Booking',
            'Calendar Management',
            'Payment Processing',
            'Automated Reminders',
            'Capacity Management',
            'Customer Portal'
          ],
          techStack: [
            { category: 'Booking', technologies: ['Calendly', 'Acuity', 'Booksy', 'SimplyBook'] },
            { category: 'Events', technologies: ['Eventbrite', 'Bizzabo', 'Splash'] },
            { category: 'Payments', technologies: ['Stripe', 'Square', 'PayPal'] },
            { category: 'Custom', technologies: ['Next.js', 'Node.js', 'PostgreSQL'] }
          ],
          workflow: [
            { step: 1, title: 'Requirements', description: 'Understand your booking and event needs.' },
            { step: 2, title: 'Solution Design', description: 'Design the optimal booking flow.' },
            { step: 3, title: 'Implementation', description: 'Set up and customize the system.' },
            { step: 4, title: 'Integration', description: 'Connect with calendars, payments, etc.' },
            { step: 5, title: 'Launch', description: 'Go live with training and support.' }
          ],
          whyChooseUs: [
            { title: 'UX Focus', description: 'Booking flows that convert.', icon: '🎯' },
            { title: 'Automation', description: 'Reduce manual work with automations.', icon: '⚡' },
            { title: 'Integration', description: 'Connect with your existing tools.', icon: '🔗' },
            { title: 'Custom', description: 'Build custom when off-the-shelf falls short.', icon: '🔧' }
          ],
          faqs: [
            { question: 'Can you build custom booking systems?', answer: 'Yes, we build custom solutions for unique requirements.' },
            { question: 'How do you handle recurring bookings?', answer: 'We set up recurring booking logic with flexible rules.' },
            { question: 'What about cancellations and refunds?', answer: 'We implement your cancellation policies with automated processing.' },
            { question: 'Can you integrate with my calendar?', answer: 'Yes, we integrate with Google Calendar, Outlook, and others.' }
          ]
        },
        {
          slug: 'portfolio-investment-systems',
          name: 'Portfolio & Investment Management Systems',
          shortDescription: 'Manage investments with clarity',
          description: 'We implement portfolio management systems for investment firms, family offices, and advisors. Track investments, generate reports, and manage client relationships.',
          image: 'https://illustrations.popsy.co/amber/cryptocurrency.svg',
          features: [
            'Portfolio Tracking',
            'Performance Analytics',
            'Client Reporting',
            'Document Management',
            'Compliance Tools',
            'Integration with Custodians'
          ],
          techStack: [
            { category: 'PMS', technologies: ['Addepar', 'Black Diamond', 'Orion'] },
            { category: 'Analytics', technologies: ['Power BI', 'Tableau', 'Custom'] },
            { category: 'CRM', technologies: ['Salesforce FSC', 'Wealthbox', 'Redtail'] },
            { category: 'Custom', technologies: ['React', 'Python', 'PostgreSQL'] }
          ],
          workflow: [
            { step: 1, title: 'Discovery', description: 'Understand your investment operations.' },
            { step: 2, title: 'Design', description: 'Design the system architecture.' },
            { step: 3, title: 'Implementation', description: 'Set up and configure the system.' },
            { step: 4, title: 'Data Integration', description: 'Connect with custodians and data sources.' },
            { step: 5, title: 'Training', description: 'Train your team on reporting and tools.' }
          ],
          whyChooseUs: [
            { title: 'Industry Knowledge', description: 'Understand investment management workflows.', icon: '📊' },
            { title: 'Data Accuracy', description: 'Rigorous data validation and reconciliation.', icon: '✅' },
            { title: 'Compliance', description: 'Built with regulatory requirements in mind.', icon: '🛡️' },
            { title: 'Custom Reports', description: 'Reports that match your needs exactly.', icon: '📄' }
          ],
          faqs: [
            { question: 'Do you work with alternative investments?', answer: 'Yes, we handle complex assets including private equity and real estate.' },
            { question: 'How do you handle data feeds?', answer: 'We integrate with major custodians and data providers.' },
            { question: 'What about compliance reporting?', answer: 'We set up reports that meet regulatory requirements.' },
            { question: 'Can you build custom dashboards?', answer: 'Yes, custom dashboards for your specific KPIs.' }
          ]
        },
        {
          slug: 'digital-marketing-systems',
          name: 'Digital Marketing & Content Production Systems',
          shortDescription: 'Systematize your marketing operations',
          description: 'We implement systems that streamline your marketing operations. From content calendars to campaign management, we help you market more effectively.',
          image: 'https://illustrations.popsy.co/amber/content-creator.svg',
          features: [
            'Content Calendars',
            'Campaign Management',
            'Asset Libraries',
            'Approval Workflows',
            'Analytics Dashboards',
            'Automation Rules'
          ],
          techStack: [
            { category: 'Content', technologies: ['Notion', 'Airtable', 'Monday.com'] },
            { category: 'Design', technologies: ['Figma', 'Canva', 'Adobe CC'] },
            { category: 'Automation', technologies: ['Zapier', 'Make', 'Buffer'] },
            { category: 'Analytics', technologies: ['Google Analytics', 'Mixpanel', 'Amplitude'] }
          ],
          workflow: [
            { step: 1, title: 'Audit', description: 'Review your current marketing processes.' },
            { step: 2, title: 'Design', description: 'Design optimized marketing workflows.' },
            { step: 3, title: 'Setup', description: 'Configure tools and integrations.' },
            { step: 4, title: 'Training', description: 'Train your marketing team.' },
            { step: 5, title: 'Optimization', description: 'Iterate based on results.' }
          ],
          whyChooseUs: [
            { title: 'Marketing Experience', description: 'Deep understanding of marketing operations.', icon: '📣' },
            { title: 'Tool Expertise', description: 'Know the marketing tech landscape.', icon: '🔧' },
            { title: 'Efficiency Focus', description: 'Reduce time spent on operations.', icon: '⚡' },
            { title: 'Results Driven', description: 'Systems that improve marketing ROI.', icon: '📈' }
          ],
          faqs: [
            { question: 'What marketing tools do you work with?', answer: 'All major tools including HubSpot, Mailchimp, Buffer, Hootsuite, etc.' },
            { question: 'Can you help with content workflows?', answer: 'Yes, we design end-to-end content production workflows.' },
            { question: 'Do you set up marketing automation?', answer: 'Yes, email sequences, social posting, lead nurturing, etc.' },
            { question: 'What about analytics?', answer: 'We set up dashboards to track marketing KPIs.' }
          ]
        }
      ]
    },
    {
      name: 'Technology & Automation Solutions',
      services: [
        {
          slug: 'revops-strategy',
          name: 'RevOps Strategy & Implementation',
          shortDescription: 'Align sales, marketing, and success for growth',
          description: 'We help you implement Revenue Operations that aligns your go-to-market teams. From strategy to tech stack, we build RevOps foundations that drive predictable growth.',
          image: 'https://illustrations.popsy.co/amber/success.svg',
          features: [
            'RevOps Strategy',
            'Process Alignment',
            'Tech Stack Optimization',
            'Data Unification',
            'Performance Metrics',
            'Team Enablement'
          ],
          techStack: [
            { category: 'CRM', technologies: ['Salesforce', 'HubSpot', 'Zoho'] },
            { category: 'Analytics', technologies: ['Clari', 'Gong', 'Chorus'] },
            { category: 'Operations', technologies: ['LeanData', 'Outreach', 'Salesloft'] },
            { category: 'BI', technologies: ['Looker', 'Tableau', 'Power BI'] }
          ],
          workflow: [
            { step: 1, title: 'Assessment', description: 'Evaluate current revenue operations maturity.' },
            { step: 2, title: 'Strategy', description: 'Define RevOps strategy and roadmap.' },
            { step: 3, title: 'Implementation', description: 'Implement processes and technology.' },
            { step: 4, title: 'Enablement', description: 'Train teams on new processes.' },
            { step: 5, title: 'Optimization', description: 'Continuous improvement based on data.' }
          ],
          whyChooseUs: [
            { title: 'RevOps Expertise', description: 'Built RevOps at high-growth companies.', icon: '🚀' },
            { title: 'Full Funnel', description: 'From lead gen to customer success.', icon: '📊' },
            { title: 'Data-Driven', description: 'Metrics that drive decisions.', icon: '📈' },
            { title: 'Tech Agnostic', description: 'Work with your existing stack.', icon: '🔧' }
          ],
          faqs: [
            { question: 'What is RevOps?', answer: 'Revenue Operations aligns sales, marketing, and CS around unified processes, data, and goals.' },
            { question: 'How long does RevOps implementation take?', answer: 'Foundational setup: 2-3 months. Full maturity: 6-12 months.' },
            { question: 'Do you work with our existing tools?', answer: 'Yes, we optimize your current stack before recommending new tools.' },
            { question: 'What results can we expect?', answer: 'Clients typically see 15-30% improvement in sales efficiency.' }
          ]
        },
        {
          slug: 'ai-business-automation',
          name: 'AI-Powered Business Automation',
          shortDescription: 'Leverage AI to automate and enhance operations',
          description: 'We implement AI solutions that automate tasks, enhance decision-making, and create new capabilities. From chatbots to predictive analytics, we bring AI into your business.',
          image: 'https://illustrations.popsy.co/amber/artificial-intelligence.svg',
          features: [
            'AI Strategy',
            'Chatbots & Assistants',
            'Document Processing',
            'Predictive Analytics',
            'Process Automation',
            'AI Integration'
          ],
          techStack: [
            { category: 'AI/ML', technologies: ['OpenAI', 'Claude', 'AWS AI', 'Google AI'] },
            { category: 'Chatbots', technologies: ['Intercom', 'Drift', 'Custom'] },
            { category: 'Automation', technologies: ['Zapier', 'Make', 'Custom'] },
            { category: 'Development', technologies: ['Python', 'LangChain', 'Vector DBs'] }
          ],
          workflow: [
            { step: 1, title: 'Discovery', description: 'Identify high-value AI opportunities.' },
            { step: 2, title: 'POC', description: 'Build proof of concept for key use cases.' },
            { step: 3, title: 'Development', description: 'Develop production-ready AI solutions.' },
            { step: 4, title: 'Integration', description: 'Integrate with your existing systems.' },
            { step: 5, title: 'Iteration', description: 'Monitor and improve AI performance.' }
          ],
          whyChooseUs: [
            { title: 'AI Expertise', description: 'Deep experience with AI technologies.', icon: '🤖' },
            { title: 'Practical Focus', description: 'AI that solves real business problems.', icon: '🎯' },
            { title: 'Integration', description: 'AI that works with your existing tools.', icon: '🔗' },
            { title: 'Ethical AI', description: 'Responsible AI implementation.', icon: '⚖️' }
          ],
          faqs: [
            { question: 'Where should we start with AI?', answer: 'We help identify high-impact, low-risk use cases to start.' },
            { question: 'Do you build custom AI solutions?', answer: 'Yes, we build custom AI applications and integrate AI into existing systems.' },
            { question: 'How do you handle data privacy?', answer: 'We implement AI with strict data privacy and security measures.' },
            { question: 'What ROI can we expect?', answer: 'AI projects typically show 3-5x ROI through efficiency and accuracy gains.' }
          ]
        },
        {
          slug: 'workflow-automation',
          name: 'Workflow Automation (Zapier, Make, Custom)',
          shortDescription: 'Connect and automate your business tools',
          description: 'We build workflow automations that connect your tools and eliminate manual work. From simple zaps to complex custom automations, we help you work smarter.',
          image: 'https://illustrations.popsy.co/amber/automation.svg',
          features: [
            'Process Automation',
            'Tool Integration',
            'Data Synchronization',
            'Notification Systems',
            'Custom Workflows',
            'Error Handling'
          ],
          techStack: [
            { category: 'Platforms', technologies: ['Zapier', 'Make', 'n8n', 'Workato'] },
            { category: 'Custom', technologies: ['Node.js', 'Python', 'Webhooks'] },
            { category: 'Data', technologies: ['Airtable', 'Google Sheets', 'APIs'] },
            { category: 'Monitoring', technologies: ['Datadog', 'Custom Dashboards'] }
          ],
          workflow: [
            { step: 1, title: 'Mapping', description: 'Map your current manual processes.' },
            { step: 2, title: 'Design', description: 'Design automated workflows.' },
            { step: 3, title: 'Build', description: 'Build and test automations.' },
            { step: 4, title: 'Deploy', description: 'Deploy with monitoring.' },
            { step: 5, title: 'Optimize', description: 'Refine based on usage.' }
          ],
          whyChooseUs: [
            { title: 'Automation Experts', description: 'Hundreds of automations built.', icon: '⚡' },
            { title: 'Platform Knowledge', description: 'Expert in all major platforms.', icon: '🔧' },
            { title: 'Custom When Needed', description: 'Build custom when platforms fall short.', icon: '💻' },
            { title: 'Reliability', description: 'Robust error handling and monitoring.', icon: '🛡️' }
          ],
          faqs: [
            { question: 'Zapier vs Make - which is better?', answer: 'Zapier is simpler, Make is more powerful. We help you choose the right fit.' },
            { question: 'Can you automate anything?', answer: 'If your tools have APIs or integrations, we can usually automate it.' },
            { question: 'How complex can automations be?', answer: 'From simple 2-step zaps to complex multi-branch workflows with logic.' },
            { question: 'What if an automation fails?', answer: 'We build error handling and alerting into all automations.' }
          ]
        },
        {
          slug: 'lowcode-nocode-development',
          name: 'Low-Code / No-Code Development',
          shortDescription: 'Build faster with low-code platforms',
          description: 'We build applications using low-code and no-code platforms for faster time-to-market. Perfect for MVPs, internal tools, and rapid prototyping.',
          image: 'https://illustrations.popsy.co/amber/rocket.svg',
          features: [
            'Rapid Prototyping',
            'Internal Tools',
            'Customer Portals',
            'Workflow Apps',
            'Data Management',
            'Mobile Apps'
          ],
          techStack: [
            { category: 'App Building', technologies: ['Retool', 'Bubble', 'Glide', 'Softr'] },
            { category: 'Databases', technologies: ['Airtable', 'Notion', 'Supabase'] },
            { category: 'Websites', technologies: ['Webflow', 'Framer', 'Carrd'] },
            { category: 'Automation', technologies: ['Zapier', 'Make', 'n8n'] }
          ],
          workflow: [
            { step: 1, title: 'Requirements', description: 'Define what you need to build.' },
            { step: 2, title: 'Platform Selection', description: 'Choose the right no-code platform.' },
            { step: 3, title: 'Build', description: 'Rapidly build your application.' },
            { step: 4, title: 'Test', description: 'User testing and refinement.' },
            { step: 5, title: 'Launch', description: 'Launch and iterate.' }
          ],
          whyChooseUs: [
            { title: 'Speed', description: 'Build in weeks, not months.', icon: '🚀' },
            { title: 'Platform Expertise', description: 'Expert in all major no-code tools.', icon: '🔧' },
            { title: 'Cost Effective', description: 'Lower development costs.', icon: '💰' },
            { title: 'Maintainable', description: 'Easy to update and maintain.', icon: '✨' }
          ],
          faqs: [
            { question: 'When should I use no-code vs custom?', answer: 'No-code is great for MVPs, internal tools, and simpler apps. Custom for complex needs.' },
            { question: 'Can no-code apps scale?', answer: 'Yes, many no-code platforms handle significant scale. We advise on limits.' },
            { question: 'Can you migrate to custom later?', answer: 'Yes, we can help migrate from no-code to custom when needed.' },
            { question: 'What about security?', answer: 'Major no-code platforms have enterprise-grade security.' }
          ]
        },
        {
          slug: 'custom-api-integration',
          name: 'Custom API & System Integration',
          shortDescription: 'Connect any systems with custom integrations',
          description: 'When off-the-shelf integrations are not enough, we build custom connections between your systems. Any API, any system, seamlessly connected.',
          image: 'https://illustrations.popsy.co/amber/network.svg',
          features: [
            'Custom Connectors',
            'Data Transformation',
            'Real-time Sync',
            'Error Handling',
            'API Development',
            'Monitoring'
          ],
          techStack: [
            { category: 'Languages', technologies: ['Node.js', 'Python', 'Go'] },
            { category: 'APIs', technologies: ['REST', 'GraphQL', 'SOAP', 'Webhooks'] },
            { category: 'Queue', technologies: ['Redis', 'RabbitMQ', 'SQS'] },
            { category: 'Monitoring', technologies: ['Datadog', 'Sentry', 'Custom'] }
          ],
          workflow: [
            { step: 1, title: 'Analysis', description: 'Analyze systems and data requirements.' },
            { step: 2, title: 'Design', description: 'Design integration architecture.' },
            { step: 3, title: 'Development', description: 'Build custom integration layer.' },
            { step: 4, title: 'Testing', description: 'Thorough integration testing.' },
            { step: 5, title: 'Deployment', description: 'Deploy with monitoring.' }
          ],
          whyChooseUs: [
            { title: 'API Expertise', description: 'Integrated with hundreds of APIs.', icon: '🔌' },
            { title: 'Data Integrity', description: 'Clean, accurate data transfer.', icon: '✅' },
            { title: 'Reliability', description: 'Robust error handling and retries.', icon: '🛡️' },
            { title: 'Scalability', description: 'Handle high volumes efficiently.', icon: '📈' }
          ],
          faqs: [
            { question: 'What if a system doesnt have an API?', answer: 'We explore alternatives like file exports, screen scraping, or vendor discussions.' },
            { question: 'How do you handle large data volumes?', answer: 'We use queuing, batching, and streaming for high-volume integrations.' },
            { question: 'What about legacy systems?', answer: 'We have experience integrating with legacy systems via various methods.' },
            { question: 'How do you ensure data accuracy?', answer: 'Data validation, reconciliation, and monitoring at every step.' }
          ]
        },
        {
          slug: 'project-management-setup',
          name: 'Project Management Systems Setup',
          shortDescription: 'Set up project management that works',
          description: 'We implement project management systems that fit your teams workflow. From ClickUp to Asana, we set up systems that improve visibility and productivity.',
          image: 'https://illustrations.popsy.co/amber/task-list.svg',
          features: [
            'Platform Setup',
            'Workflow Configuration',
            'Template Creation',
            'Integration Setup',
            'Training',
            'Best Practices'
          ],
          techStack: [
            { category: 'PM Tools', technologies: ['ClickUp', 'Asana', 'Monday.com', 'Linear'] },
            { category: 'Documentation', technologies: ['Notion', 'Confluence', 'Coda'] },
            { category: 'Communication', technologies: ['Slack', 'Teams', 'Discord'] },
            { category: 'Time Tracking', technologies: ['Toggl', 'Harvest', 'Clockify'] }
          ],
          workflow: [
            { step: 1, title: 'Discovery', description: 'Understand your team and processes.' },
            { step: 2, title: 'Design', description: 'Design project management workflows.' },
            { step: 3, title: 'Setup', description: 'Configure the platform.' },
            { step: 4, title: 'Training', description: 'Train your team.' },
            { step: 5, title: 'Iteration', description: 'Refine based on usage.' }
          ],
          whyChooseUs: [
            { title: 'PM Expertise', description: 'Know what works for different teams.', icon: '📋' },
            { title: 'Practical', description: 'Systems people will actually use.', icon: '✅' },
            { title: 'Training Focus', description: 'Comprehensive team training.', icon: '📚' },
            { title: 'Ongoing Support', description: 'Help as your needs evolve.', icon: '🤝' }
          ],
          faqs: [
            { question: 'Which PM tool do you recommend?', answer: 'It depends on team size and needs. We help you evaluate options.' },
            { question: 'How long does setup take?', answer: 'Basic setup: 1-2 weeks. Complex with migration: 4-6 weeks.' },
            { question: 'Can you migrate from our current tool?', answer: 'Yes, we handle data migration from most PM tools.' },
            { question: 'Do you provide training materials?', answer: 'Yes, custom training docs and videos for your team.' }
          ]
        },
        {
          slug: 'data-analytics-dashboards',
          name: 'Data Analytics, Reporting & Dashboards',
          shortDescription: 'Turn data into actionable insights',
          description: 'We build dashboards and reports that give you visibility into your business. From KPI tracking to advanced analytics, we help you make data-driven decisions.',
          image: 'https://illustrations.popsy.co/amber/chart.svg',
          features: [
            'Dashboard Design',
            'KPI Tracking',
            'Data Visualization',
            'Automated Reports',
            'Data Integration',
            'Self-Service Analytics'
          ],
          techStack: [
            { category: 'BI Tools', technologies: ['Power BI', 'Tableau', 'Looker', 'Metabase'] },
            { category: 'Data', technologies: ['Snowflake', 'BigQuery', 'Redshift'] },
            { category: 'ETL', technologies: ['Fivetran', 'Airbyte', 'dbt'] },
            { category: 'Visualization', technologies: ['D3.js', 'Recharts', 'Custom'] }
          ],
          workflow: [
            { step: 1, title: 'Requirements', description: 'Define metrics and reporting needs.' },
            { step: 2, title: 'Data Modeling', description: 'Design data models and pipelines.' },
            { step: 3, title: 'Dashboard Build', description: 'Create dashboards and visualizations.' },
            { step: 4, title: 'Training', description: 'Train users on self-service analytics.' },
            { step: 5, title: 'Iteration', description: 'Refine based on feedback.' }
          ],
          whyChooseUs: [
            { title: 'Analytics Expertise', description: 'Deep experience in data analytics.', icon: '📊' },
            { title: 'Business Focus', description: 'Metrics that matter for decisions.', icon: '🎯' },
            { title: 'Beautiful Dashboards', description: 'Clear, actionable visualizations.', icon: '✨' },
            { title: 'Self-Service', description: 'Empower your team to explore data.', icon: '🔍' }
          ],
          faqs: [
            { question: 'Which BI tool do you recommend?', answer: 'Depends on your stack and needs. We evaluate and recommend the best fit.' },
            { question: 'Can you work with our existing data?', answer: 'Yes, we integrate with any data source.' },
            { question: 'How do you ensure data accuracy?', answer: 'Validation, testing, and reconciliation at every step.' },
            { question: 'Can non-technical users use the dashboards?', answer: 'We design for usability with training and documentation.' }
          ]
        },
        {
          slug: 'sop-development-training',
          name: 'SOP Development & Team Training',
          shortDescription: 'Document and train for consistency',
          description: 'We develop standard operating procedures and training programs that ensure consistent execution. From documentation to training delivery, we help your team succeed.',
          image: 'https://illustrations.popsy.co/amber/online-education.svg',
          features: [
            'Process Documentation',
            'SOP Creation',
            'Training Programs',
            'Video Tutorials',
            'Knowledge Base',
            'Onboarding Systems'
          ],
          techStack: [
            { category: 'Documentation', technologies: ['Notion', 'Confluence', 'GitBook'] },
            { category: 'Training', technologies: ['Trainual', 'Lessonly', 'Loom'] },
            { category: 'Video', technologies: ['Loom', 'Screencast-O-Matic'] },
            { category: 'LMS', technologies: ['Teachable', 'Thinkific', 'Custom'] }
          ],
          workflow: [
            { step: 1, title: 'Audit', description: 'Review existing documentation and gaps.' },
            { step: 2, title: 'Documentation', description: 'Create comprehensive SOPs.' },
            { step: 3, title: 'Training Design', description: 'Design training programs.' },
            { step: 4, title: 'Content Creation', description: 'Create training materials.' },
            { step: 5, title: 'Delivery', description: 'Deliver training and measure effectiveness.' }
          ],
          whyChooseUs: [
            { title: 'Clear Writing', description: 'Documentation thats easy to follow.', icon: '📝' },
            { title: 'Engaging Training', description: 'Training that people complete.', icon: '🎓' },
            { title: 'Practical Focus', description: 'Focused on real-world execution.', icon: '🎯' },
            { title: 'Measurable', description: 'Track training effectiveness.', icon: '📊' }
          ],
          faqs: [
            { question: 'How do you create effective SOPs?', answer: 'We work with your team to document real processes with clear steps.' },
            { question: 'What training formats do you use?', answer: 'Written docs, videos, interactive guides, and live training sessions.' },
            { question: 'How do you ensure team adoption?', answer: 'Engaging content, easy access, and accountability systems.' },
            { question: 'Can you update existing documentation?', answer: 'Yes, we can audit and update your existing SOPs and training.' }
          ]
        }
      ]
    }
  ]
}

