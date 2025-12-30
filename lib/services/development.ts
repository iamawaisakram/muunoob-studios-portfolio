import { ServiceCategory } from './types'

export const developmentService: ServiceCategory = {
  slug: 'development',
  name: 'Development',
  tagline: 'Building Digital Excellence',
  description: 'End-to-end development solutions from concept to deployment. We build scalable, secure, and performant digital products that drive business growth.',
  heroImage: '/services/development-hero.svg',
  subCategories: [
    {
      name: 'Web, App & System Development',
      services: [
        {
          slug: 'website-design-development',
          name: 'Website Design & Development',
          shortDescription: 'Custom websites that captivate and convert',
          description: 'We create stunning, responsive websites that not only look beautiful but also deliver exceptional user experiences. From corporate sites to complex web portals, we build digital presences that represent your brand and drive results.',
          image: 'https://illustrations.popsy.co/amber/web-design.svg',
          features: [
            'Responsive Design',
            'SEO Optimization',
            'Custom CMS Integration',
            'Performance Optimization',
            'Accessibility Compliance',
            'Analytics Integration'
          ],
          techStack: [
            { category: 'Frontend', technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
            { category: 'Styling', technologies: ['Tailwind CSS', 'SCSS', 'Styled Components'] },
            { category: 'CMS', technologies: ['WordPress', 'Strapi', 'Sanity', 'Contentful'] },
            { category: 'Hosting', technologies: ['Vercel', 'AWS', 'Netlify'] }
          ],
          workflow: [
            { step: 1, title: 'Discovery & Planning', description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.' },
            { step: 2, title: 'Design & Prototyping', description: 'Our designers create wireframes and high-fidelity mockups that align with your brand identity.' },
            { step: 3, title: 'Development', description: 'We build your website using modern technologies, ensuring clean code and optimal performance.' },
            { step: 4, title: 'Testing & QA', description: 'Rigorous testing across devices and browsers to ensure flawless functionality.' },
            { step: 5, title: 'Launch & Support', description: 'We deploy your site and provide ongoing maintenance and support.' }
          ],
          whyChooseUs: [
            { title: 'Custom Solutions', description: 'Every website is tailored to your unique business needs and goals.', icon: '🎯' },
            { title: 'Modern Technologies', description: 'We use cutting-edge frameworks for optimal performance and scalability.', icon: '⚡' },
            { title: 'SEO-First Approach', description: 'Built-in SEO best practices to help you rank higher in search results.', icon: '🔍' },
            { title: 'Ongoing Support', description: 'Dedicated support team to keep your website running smoothly.', icon: '🛡️' }
          ],
          faqs: [
            { question: 'How long does it take to build a website?', answer: 'Typically 4-8 weeks depending on complexity. Simple sites may take 2-3 weeks, while complex web applications can take 3-6 months.' },
            { question: 'Do you provide website hosting?', answer: 'Yes, we offer managed hosting solutions with SSL, backups, and 24/7 monitoring included.' },
            { question: 'Can you redesign my existing website?', answer: 'Absolutely! We specialize in website redesigns that improve UX, performance, and conversion rates.' },
            { question: 'Will my website be mobile-friendly?', answer: 'Yes, all our websites are fully responsive and optimized for all devices and screen sizes.' }
          ]
        },
        {
          slug: 'web-application-development',
          name: 'Web Application Development',
          shortDescription: 'Powerful web apps that solve real problems',
          description: 'We build robust, scalable web applications that streamline operations and enhance productivity. From internal tools to customer-facing platforms, our solutions are designed to grow with your business.',
          image: 'https://illustrations.popsy.co/amber/app-launch.svg',
          features: [
            'Custom Business Logic',
            'Real-time Features',
            'User Authentication',
            'API Integrations',
            'Database Design',
            'Cloud Deployment'
          ],
          techStack: [
            { category: 'Frontend', technologies: ['React', 'Next.js', 'Angular', 'Vue.js'] },
            { category: 'Backend', technologies: ['Node.js', 'Python', 'Django', 'Express'] },
            { category: 'Database', technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
            { category: 'Cloud', technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker'] }
          ],
          workflow: [
            { step: 1, title: 'Requirements Analysis', description: 'Deep dive into your business processes to understand pain points and opportunities.' },
            { step: 2, title: 'Architecture Design', description: 'Design scalable system architecture and database schemas.' },
            { step: 3, title: 'Agile Development', description: 'Iterative development with regular demos and feedback sessions.' },
            { step: 4, title: 'Testing & Security', description: 'Comprehensive testing including security audits and penetration testing.' },
            { step: 5, title: 'Deployment & Training', description: 'Smooth deployment with thorough documentation and team training.' }
          ],
          whyChooseUs: [
            { title: 'Scalable Architecture', description: 'Built to handle growth from hundreds to millions of users.', icon: '📈' },
            { title: 'Security First', description: 'Enterprise-grade security measures built into every layer.', icon: '🔒' },
            { title: 'Agile Process', description: 'Transparent development with regular updates and demos.', icon: '🔄' },
            { title: 'Full Stack Expertise', description: 'End-to-end development from database to user interface.', icon: '💻' }
          ],
          faqs: [
            { question: 'Can you integrate with our existing systems?', answer: 'Yes, we specialize in system integrations and can connect your new app with existing tools via APIs.' },
            { question: 'How do you ensure application security?', answer: 'We implement industry-standard security practices including encryption, authentication, and regular security audits.' },
            { question: 'Do you provide ongoing maintenance?', answer: 'Yes, we offer various maintenance packages including 24/7 monitoring, updates, and feature enhancements.' },
            { question: 'Can the application scale as we grow?', answer: 'Absolutely. We design with scalability in mind, using cloud infrastructure that can handle increased load.' }
          ]
        },
        {
          slug: 'mobile-app-development',
          name: 'Mobile App Development (iOS & Android)',
          shortDescription: 'Native and cross-platform mobile experiences',
          description: 'We create beautiful, high-performance mobile applications for iOS and Android. Whether you need a native app or a cross-platform solution, we deliver mobile experiences that users love.',
          image: 'https://illustrations.popsy.co/amber/man-on-phone.svg',
          features: [
            'Native iOS & Android',
            'Cross-Platform Development',
            'Offline Functionality',
            'Push Notifications',
            'App Store Optimization',
            'Analytics & Tracking'
          ],
          techStack: [
            { category: 'Cross-Platform', technologies: ['React Native', 'Flutter', 'Expo'] },
            { category: 'Native iOS', technologies: ['Swift', 'SwiftUI', 'Objective-C'] },
            { category: 'Native Android', technologies: ['Kotlin', 'Jetpack Compose', 'Java'] },
            { category: 'Backend', technologies: ['Firebase', 'Node.js', 'AWS Amplify'] }
          ],
          workflow: [
            { step: 1, title: 'Strategy & Planning', description: 'Define target audience, platform strategy, and feature prioritization.' },
            { step: 2, title: 'UI/UX Design', description: 'Create intuitive interfaces following platform-specific design guidelines.' },
            { step: 3, title: 'Development', description: 'Build the app with clean, maintainable code and thorough testing.' },
            { step: 4, title: 'Beta Testing', description: 'Gather feedback from real users through beta testing programs.' },
            { step: 5, title: 'Launch & Iterate', description: 'Submit to app stores and continuously improve based on user feedback.' }
          ],
          whyChooseUs: [
            { title: 'Platform Expertise', description: 'Deep knowledge of iOS and Android ecosystems and guidelines.', icon: '📱' },
            { title: 'User-Centric Design', description: 'Beautiful interfaces that feel native to each platform.', icon: '🎨' },
            { title: 'Performance Focus', description: 'Optimized for speed, battery life, and smooth animations.', icon: '⚡' },
            { title: 'Post-Launch Support', description: 'Continuous updates and improvements after launch.', icon: '🔧' }
          ],
          faqs: [
            { question: 'Should I choose native or cross-platform?', answer: 'It depends on your budget, timeline, and requirements. We help you choose the best approach for your specific needs.' },
            { question: 'How long does mobile app development take?', answer: 'A basic app takes 2-3 months, while complex apps can take 6-12 months depending on features.' },
            { question: 'Do you handle app store submission?', answer: 'Yes, we manage the entire submission process for both Apple App Store and Google Play Store.' },
            { question: 'Can you update my existing app?', answer: 'Yes, we can enhance, modernize, or completely rebuild your existing mobile application.' }
          ]
        },
        {
          slug: 'saas-product-development',
          name: 'SaaS Product Development',
          shortDescription: 'Build your next subscription-based software product',
          description: 'We help startups and enterprises build successful SaaS products. From MVP to full-scale platforms, we create multi-tenant solutions with robust billing, user management, and analytics.',
          image: 'https://illustrations.popsy.co/amber/remote-work.svg',
          features: [
            'Multi-tenant Architecture',
            'Subscription Billing',
            'User Management',
            'Role-based Access',
            'Usage Analytics',
            'API Documentation'
          ],
          techStack: [
            { category: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript'] },
            { category: 'Backend', technologies: ['Node.js', 'Python', 'Go'] },
            { category: 'Payments', technologies: ['Stripe', 'Paddle', 'LemonSqueezy'] },
            { category: 'Infrastructure', technologies: ['AWS', 'Kubernetes', 'Terraform'] }
          ],
          workflow: [
            { step: 1, title: 'Product Strategy', description: 'Define your value proposition, pricing model, and go-to-market strategy.' },
            { step: 2, title: 'MVP Development', description: 'Build a minimum viable product to validate your idea with real users.' },
            { step: 3, title: 'Iteration', description: 'Gather feedback and iterate on features based on user behavior.' },
            { step: 4, title: 'Scale & Optimize', description: 'Optimize performance and prepare infrastructure for growth.' },
            { step: 5, title: 'Growth Features', description: 'Add analytics, integrations, and features that drive retention.' }
          ],
          whyChooseUs: [
            { title: 'SaaS Expertise', description: 'We have built multiple successful SaaS products across industries.', icon: '🚀' },
            { title: 'Billing Done Right', description: 'Robust subscription handling with trials, upgrades, and invoicing.', icon: '💳' },
            { title: 'Built to Scale', description: 'Architecture designed for thousands of concurrent users.', icon: '📊' },
            { title: 'Security Compliant', description: 'SOC 2, GDPR, and HIPAA compliance-ready infrastructure.', icon: '🛡️' }
          ],
          faqs: [
            { question: 'How much does it cost to build a SaaS product?', answer: 'MVPs typically range from $30K-$80K, while full products can be $100K-$500K+ depending on complexity.' },
            { question: 'How do you handle data security for multi-tenant apps?', answer: 'We implement row-level security, encryption, and logical data separation to ensure complete tenant isolation.' },
            { question: 'Can you integrate with Stripe for billing?', answer: 'Yes, we have extensive experience with Stripe, Paddle, and other billing platforms for subscription management.' },
            { question: 'Do you help with product strategy?', answer: 'Absolutely. We offer product consulting to help define features, pricing, and positioning.' }
          ]
        },
        {
          slug: 'custom-software-development',
          name: 'Custom Software Development',
          shortDescription: 'Tailored solutions for unique business challenges',
          description: 'When off-the-shelf solutions fall short, we build custom software that perfectly fits your requirements. From enterprise systems to specialized tools, we create solutions that give you a competitive edge.',
          image: 'https://illustrations.popsy.co/amber/work-party.svg',
          features: [
            'Business Process Automation',
            'Legacy System Modernization',
            'Enterprise Integration',
            'Custom Reporting',
            'Workflow Automation',
            'Data Migration'
          ],
          techStack: [
            { category: 'Languages', technologies: ['TypeScript', 'Python', 'Java', 'C#'] },
            { category: 'Frameworks', technologies: ['Node.js', 'Django', 'Spring Boot', '.NET'] },
            { category: 'Database', technologies: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL Server'] },
            { category: 'DevOps', technologies: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'] }
          ],
          workflow: [
            { step: 1, title: 'Business Analysis', description: 'Deep understanding of your business processes and pain points.' },
            { step: 2, title: 'Solution Design', description: 'Create detailed technical specifications and architecture.' },
            { step: 3, title: 'Development', description: 'Agile development with regular milestones and reviews.' },
            { step: 4, title: 'Integration', description: 'Seamless integration with your existing systems and workflows.' },
            { step: 5, title: 'Training & Handover', description: 'Comprehensive training and documentation for your team.' }
          ],
          whyChooseUs: [
            { title: 'Domain Expertise', description: 'Experience across industries including finance, healthcare, and logistics.', icon: '🏢' },
            { title: 'Proven Process', description: 'Refined methodology for delivering complex projects on time.', icon: '✅' },
            { title: 'Code Quality', description: 'Clean, documented code that is easy to maintain and extend.', icon: '📝' },
            { title: 'Long-term Partnership', description: 'We support you beyond launch with maintenance and enhancements.', icon: '🤝' }
          ],
          faqs: [
            { question: 'How do you ensure the software meets our needs?', answer: 'We follow an iterative approach with regular demos and feedback sessions to ensure alignment.' },
            { question: 'Can you modernize our legacy systems?', answer: 'Yes, we specialize in modernizing legacy applications while preserving business logic and data.' },
            { question: 'What happens after the project is complete?', answer: 'We offer various support packages and can continue developing new features as needed.' },
            { question: 'How do you handle project management?', answer: 'We use agile methodologies with dedicated project managers and regular status updates.' }
          ]
        }
      ]
    },
    {
      name: 'E-Commerce & Platforms',
      services: [
        {
          slug: 'shopify-development',
          name: 'Shopify Development & Optimization',
          shortDescription: 'Custom Shopify stores that drive sales',
          description: 'We build and optimize Shopify stores that convert browsers into buyers. From custom themes to app development, we help you create a world-class e-commerce experience.',
          image: 'https://illustrations.popsy.co/amber/online-shopping.svg',
          features: [
            'Custom Theme Development',
            'Shopify Plus Solutions',
            'App Integrations',
            'Checkout Optimization',
            'Performance Tuning',
            'Conversion Rate Optimization'
          ],
          techStack: [
            { category: 'Shopify', technologies: ['Liquid', 'Hydrogen', 'Oxygen', 'Shopify CLI'] },
            { category: 'Frontend', technologies: ['React', 'Remix', 'Tailwind CSS'] },
            { category: 'Apps', technologies: ['Polaris', 'Node.js', 'GraphQL'] },
            { category: 'Analytics', technologies: ['GA4', 'Hotjar', 'Klaviyo'] }
          ],
          workflow: [
            { step: 1, title: 'Store Audit', description: 'Analyze your current store or plan your new store architecture.' },
            { step: 2, title: 'Design', description: 'Create custom theme designs that reflect your brand.' },
            { step: 3, title: 'Development', description: 'Build your theme with clean Liquid code and modern practices.' },
            { step: 4, title: 'Optimization', description: 'Optimize for speed, SEO, and conversion rates.' },
            { step: 5, title: 'Launch & Growth', description: 'Launch your store and implement growth strategies.' }
          ],
          whyChooseUs: [
            { title: 'Shopify Partners', description: 'Official Shopify Partner with proven expertise.', icon: '🛍️' },
            { title: 'Conversion Focus', description: 'Every decision is made to increase your sales.', icon: '💰' },
            { title: 'Custom Apps', description: 'We build custom apps to extend your store functionality.', icon: '🔌' },
            { title: 'Migration Experts', description: 'Smooth migrations from other platforms.', icon: '🔄' }
          ],
          faqs: [
            { question: 'Can you migrate my store to Shopify?', answer: 'Yes, we handle migrations from WooCommerce, Magento, and other platforms with zero data loss.' },
            { question: 'Do you develop custom Shopify apps?', answer: 'Yes, we build public and private Shopify apps to extend your store functionality.' },
            { question: 'How do you improve store performance?', answer: 'We optimize images, minimize code, implement lazy loading, and use Shopify best practices.' },
            { question: 'Can you help with Shopify Plus?', answer: 'Absolutely. We have extensive experience with Shopify Plus for high-volume merchants.' }
          ]
        },
        {
          slug: 'woocommerce-development',
          name: 'WooCommerce Development',
          shortDescription: 'Flexible WordPress e-commerce solutions',
          description: 'We create powerful WooCommerce stores that leverage the flexibility of WordPress. Perfect for businesses that need complete control over their e-commerce platform.',
          image: 'https://illustrations.popsy.co/amber/product-launch.svg',
          features: [
            'Custom Theme Development',
            'Plugin Development',
            'Payment Integration',
            'Inventory Management',
            'Subscription Products',
            'Multi-vendor Marketplaces'
          ],
          techStack: [
            { category: 'Platform', technologies: ['WordPress', 'WooCommerce', 'PHP'] },
            { category: 'Frontend', technologies: ['JavaScript', 'React', 'Tailwind CSS'] },
            { category: 'Payments', technologies: ['Stripe', 'PayPal', 'Square'] },
            { category: 'Hosting', technologies: ['WP Engine', 'Cloudways', 'Kinsta'] }
          ],
          workflow: [
            { step: 1, title: 'Planning', description: 'Define your product catalog, payment methods, and shipping requirements.' },
            { step: 2, title: 'Design', description: 'Create a custom theme optimized for your products.' },
            { step: 3, title: 'Setup', description: 'Configure WooCommerce, payment gateways, and shipping.' },
            { step: 4, title: 'Customization', description: 'Develop custom plugins and integrations.' },
            { step: 5, title: 'Testing & Launch', description: 'Thorough testing of all checkout flows before launch.' }
          ],
          whyChooseUs: [
            { title: 'WordPress Experts', description: 'Deep expertise in WordPress and WooCommerce ecosystem.', icon: '🔧' },
            { title: 'Custom Plugins', description: 'We build plugins to add any functionality you need.', icon: '🔌' },
            { title: 'SEO Advantage', description: 'WordPress SEO capabilities for better organic traffic.', icon: '🔍' },
            { title: 'Full Control', description: 'You own your data and platform completely.', icon: '👑' }
          ],
          faqs: [
            { question: 'WooCommerce vs Shopify - which is better?', answer: 'WooCommerce offers more flexibility and control, while Shopify is easier to manage. We help you choose the right fit.' },
            { question: 'Can you integrate with my ERP?', answer: 'Yes, we build custom integrations with popular ERP systems like SAP, NetSuite, and QuickBooks.' },
            { question: 'How do you ensure site security?', answer: 'We implement SSL, regular updates, security plugins, and follow WordPress security best practices.' },
            { question: 'Do you provide hosting recommendations?', answer: 'Yes, we recommend and set up optimized WooCommerce hosting solutions.' }
          ]
        },
        {
          slug: 'custom-ecommerce-solutions',
          name: 'Custom E-Commerce Solutions',
          shortDescription: 'Bespoke e-commerce platforms for unique needs',
          description: 'When standard platforms do not meet your requirements, we build custom e-commerce solutions. Perfect for complex B2B commerce, marketplaces, and unique business models.',
          image: 'https://illustrations.popsy.co/amber/shaking-hands.svg',
          features: [
            'Multi-vendor Marketplaces',
            'B2B Commerce',
            'Subscription Commerce',
            'Custom Checkout Flows',
            'Inventory Management',
            'Analytics & Reporting'
          ],
          techStack: [
            { category: 'Frontend', technologies: ['React', 'Next.js', 'Vue.js'] },
            { category: 'Backend', technologies: ['Node.js', 'Python', 'Go'] },
            { category: 'Commerce', technologies: ['Medusa', 'Saleor', 'Custom'] },
            { category: 'Payments', technologies: ['Stripe', 'Adyen', 'Custom'] }
          ],
          workflow: [
            { step: 1, title: 'Discovery', description: 'Understand your business model, products, and customer journey.' },
            { step: 2, title: 'Architecture', description: 'Design a scalable platform architecture.' },
            { step: 3, title: 'Development', description: 'Build your custom e-commerce platform.' },
            { step: 4, title: 'Integrations', description: 'Connect with payment, shipping, and ERP systems.' },
            { step: 5, title: 'Launch & Scale', description: 'Launch and optimize for performance and growth.' }
          ],
          whyChooseUs: [
            { title: 'Complex Commerce', description: 'Experience with multi-vendor, B2B, and subscription models.', icon: '🏪' },
            { title: 'Headless Commerce', description: 'Modern headless architecture for ultimate flexibility.', icon: '🧩' },
            { title: 'Global Ready', description: 'Multi-currency, multi-language support built in.', icon: '🌍' },
            { title: 'Performance', description: 'Built for high traffic and large catalogs.', icon: '⚡' }
          ],
          faqs: [
            { question: 'When should I choose custom over Shopify?', answer: 'Custom solutions are ideal for unique business models, complex B2B needs, or when you need complete control.' },
            { question: 'Can you build a marketplace like Amazon?', answer: 'Yes, we build multi-vendor marketplaces with vendor management, commission systems, and order routing.' },
            { question: 'How do you handle high traffic?', answer: 'We use auto-scaling cloud infrastructure, CDNs, and performance optimization for millions of users.' },
            { question: 'What about payment compliance?', answer: 'We ensure PCI-DSS compliance and integrate with certified payment processors.' }
          ]
        },
        {
          slug: 'payment-gateway-integration',
          name: 'Payment Gateway Integration',
          shortDescription: 'Seamless payment processing for your platform',
          description: 'We integrate payment gateways that work seamlessly with your platform. From simple checkouts to complex subscription billing, we ensure secure, reliable payments.',
          image: 'https://illustrations.popsy.co/amber/bitcoin.svg',
          features: [
            'Multiple Payment Methods',
            'Subscription Billing',
            'One-Click Checkout',
            'Fraud Prevention',
            'International Payments',
            'PCI Compliance'
          ],
          techStack: [
            { category: 'Payments', technologies: ['Stripe', 'PayPal', 'Adyen', 'Braintree'] },
            { category: 'Billing', technologies: ['Chargebee', 'Recurly', 'Stripe Billing'] },
            { category: 'Security', technologies: ['3D Secure', 'Tokenization', 'Encryption'] },
            { category: 'Crypto', technologies: ['Coinbase Commerce', 'BitPay'] }
          ],
          workflow: [
            { step: 1, title: 'Requirements', description: 'Analyze your payment needs, regions, and methods.' },
            { step: 2, title: 'Gateway Selection', description: 'Recommend the best payment gateways for your needs.' },
            { step: 3, title: 'Integration', description: 'Implement secure payment flows in your application.' },
            { step: 4, title: 'Testing', description: 'Thorough testing of all payment scenarios.' },
            { step: 5, title: 'Go Live', description: 'Launch with monitoring and fraud protection.' }
          ],
          whyChooseUs: [
            { title: 'Security First', description: 'PCI-DSS compliant implementations every time.', icon: '🔐' },
            { title: 'Global Payments', description: 'Support for international currencies and methods.', icon: '🌐' },
            { title: 'Fraud Protection', description: 'Advanced fraud detection and prevention.', icon: '🛡️' },
            { title: 'Seamless UX', description: 'Optimized checkout flows for conversion.', icon: '💳' }
          ],
          faqs: [
            { question: 'Which payment gateway do you recommend?', answer: 'It depends on your location, volume, and needs. Stripe is often ideal, but we evaluate your specific case.' },
            { question: 'Can you integrate Apple Pay and Google Pay?', answer: 'Yes, we integrate all major digital wallets for faster checkout experiences.' },
            { question: 'How do you handle subscription billing?', answer: 'We implement recurring billing with trials, upgrades, downgrades, and dunning management.' },
            { question: 'What about PCI compliance?', answer: 'We use tokenization and hosted payment fields to minimize your PCI scope.' }
          ]
        }
      ]
    },
    {
      name: 'Backend & Infrastructure',
      services: [
        {
          slug: 'api-development-integration',
          name: 'API Development & Integration',
          shortDescription: 'Connect your systems with robust APIs',
          description: 'We design and build APIs that power your applications and enable seamless integrations. RESTful or GraphQL, we create APIs that are secure, documented, and developer-friendly.',
          image: 'https://illustrations.popsy.co/amber/data-sync.svg',
          features: [
            'RESTful API Design',
            'GraphQL APIs',
            'API Documentation',
            'Authentication & Security',
            'Rate Limiting',
            'Version Management'
          ],
          techStack: [
            { category: 'Frameworks', technologies: ['Node.js', 'FastAPI', 'Express', 'NestJS'] },
            { category: 'API Styles', technologies: ['REST', 'GraphQL', 'gRPC', 'WebSockets'] },
            { category: 'Documentation', technologies: ['Swagger', 'Postman', 'GraphQL Playground'] },
            { category: 'Security', technologies: ['OAuth 2.0', 'JWT', 'API Keys'] }
          ],
          workflow: [
            { step: 1, title: 'API Design', description: 'Design API endpoints, schemas, and authentication.' },
            { step: 2, title: 'Development', description: 'Build the API with proper error handling and validation.' },
            { step: 3, title: 'Documentation', description: 'Create comprehensive API documentation.' },
            { step: 4, title: 'Testing', description: 'Automated testing for all endpoints.' },
            { step: 5, title: 'Deployment', description: 'Deploy with monitoring and rate limiting.' }
          ],
          whyChooseUs: [
            { title: 'API-First Design', description: 'We design APIs that are intuitive for developers.', icon: '🔌' },
            { title: 'Security', description: 'Industry-standard authentication and authorization.', icon: '🔒' },
            { title: 'Documentation', description: 'Comprehensive docs that developers love.', icon: '📚' },
            { title: 'Performance', description: 'Optimized for low latency and high throughput.', icon: '⚡' }
          ],
          faqs: [
            { question: 'REST or GraphQL - which should I choose?', answer: 'REST is simpler and widely supported. GraphQL is ideal for complex data requirements. We help you choose.' },
            { question: 'How do you secure APIs?', answer: 'We implement OAuth 2.0, JWT tokens, rate limiting, and input validation.' },
            { question: 'Can you integrate with third-party APIs?', answer: 'Yes, we integrate with any API including CRMs, payment systems, and social platforms.' },
            { question: 'Do you provide API documentation?', answer: 'Yes, we create detailed documentation with examples using Swagger/OpenAPI.' }
          ]
        },
        {
          slug: 'third-party-integrations',
          name: 'Third-Party System Integrations',
          shortDescription: 'Connect all your business tools seamlessly',
          description: 'We integrate your systems to create a unified technology ecosystem. From CRMs to ERPs, we ensure your tools work together harmoniously to streamline operations.',
          image: 'https://illustrations.popsy.co/amber/puzzle.svg',
          features: [
            'CRM Integrations',
            'ERP Connections',
            'Marketing Automation',
            'Data Synchronization',
            'Webhook Management',
            'Custom Connectors'
          ],
          techStack: [
            { category: 'CRM', technologies: ['Salesforce', 'HubSpot', 'Zoho', 'Pipedrive'] },
            { category: 'ERP', technologies: ['SAP', 'NetSuite', 'QuickBooks', 'Odoo'] },
            { category: 'Marketing', technologies: ['Mailchimp', 'Klaviyo', 'ActiveCampaign'] },
            { category: 'Integration', technologies: ['Zapier', 'Make', 'n8n', 'Custom APIs'] }
          ],
          workflow: [
            { step: 1, title: 'Audit', description: 'Map your current systems and data flows.' },
            { step: 2, title: 'Design', description: 'Plan integration architecture and data mapping.' },
            { step: 3, title: 'Build', description: 'Develop integrations and data transformations.' },
            { step: 4, title: 'Test', description: 'Thoroughly test all integration scenarios.' },
            { step: 5, title: 'Monitor', description: 'Deploy with monitoring and error handling.' }
          ],
          whyChooseUs: [
            { title: 'Integration Experts', description: 'Experience with hundreds of different platforms.', icon: '🔗' },
            { title: 'Data Integrity', description: 'Ensure clean, consistent data across systems.', icon: '✅' },
            { title: 'Real-time Sync', description: 'Keep your data synchronized in real-time.', icon: '🔄' },
            { title: 'Error Handling', description: 'Robust error handling and retry mechanisms.', icon: '🛠️' }
          ],
          faqs: [
            { question: 'Can you integrate any system?', answer: 'If it has an API or supports data export, we can integrate it. We also build custom connectors.' },
            { question: 'How do you handle data conflicts?', answer: 'We implement conflict resolution strategies based on your business rules.' },
            { question: 'What about real-time vs batch sync?', answer: 'We support both. Real-time for critical data, batch for less time-sensitive syncs.' },
            { question: 'How do you ensure data security?', answer: 'Data is encrypted in transit and at rest. We follow security best practices.' }
          ]
        },
        {
          slug: 'database-architecture',
          name: 'Database Architecture & Optimization',
          shortDescription: 'Data foundations that scale with your business',
          description: 'We design and optimize databases that handle your data efficiently. From schema design to performance tuning, we ensure your data layer supports your application needs.',
          image: 'https://illustrations.popsy.co/amber/data-analytics.svg',
          features: [
            'Schema Design',
            'Performance Optimization',
            'Data Modeling',
            'Migration Strategies',
            'Backup & Recovery',
            'Replication & Sharding'
          ],
          techStack: [
            { category: 'SQL', technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle'] },
            { category: 'NoSQL', technologies: ['MongoDB', 'DynamoDB', 'Cassandra', 'Redis'] },
            { category: 'Search', technologies: ['Elasticsearch', 'Algolia', 'Meilisearch'] },
            { category: 'Tools', technologies: ['Prisma', 'TypeORM', 'Drizzle'] }
          ],
          workflow: [
            { step: 1, title: 'Analysis', description: 'Understand your data requirements and access patterns.' },
            { step: 2, title: 'Design', description: 'Create optimized database schemas and indexes.' },
            { step: 3, title: 'Implementation', description: 'Set up databases with proper configuration.' },
            { step: 4, title: 'Optimization', description: 'Tune queries and add indexes for performance.' },
            { step: 5, title: 'Monitoring', description: 'Implement monitoring and alerting.' }
          ],
          whyChooseUs: [
            { title: 'Performance Focus', description: 'Optimized for your specific query patterns.', icon: '⚡' },
            { title: 'Scalability', description: 'Designed to grow with your data.', icon: '📈' },
            { title: 'Data Integrity', description: 'Proper constraints and validation.', icon: '🔒' },
            { title: 'Disaster Recovery', description: 'Comprehensive backup strategies.', icon: '🛡️' }
          ],
          faqs: [
            { question: 'SQL or NoSQL - which should I use?', answer: 'It depends on your data structure and query patterns. We often use both in the same application.' },
            { question: 'How do you handle database migrations?', answer: 'We use migration tools for version-controlled, reversible schema changes.' },
            { question: 'Can you optimize my slow queries?', answer: 'Yes, we analyze query plans and add proper indexes to improve performance.' },
            { question: 'What about database scaling?', answer: 'We implement read replicas, sharding, and caching strategies as needed.' }
          ]
        },
        {
          slug: 'cloud-deployment-hosting',
          name: 'Cloud Deployment & Hosting Setup',
          shortDescription: 'Reliable cloud infrastructure for your applications',
          description: 'We set up cloud infrastructure that is secure, scalable, and cost-effective. From simple deployments to complex multi-region architectures, we handle your hosting needs.',
          image: 'https://illustrations.popsy.co/amber/engineer.svg',
          features: [
            'Cloud Architecture',
            'CI/CD Pipelines',
            'Container Orchestration',
            'Auto-scaling',
            'Security Configuration',
            'Cost Optimization'
          ],
          techStack: [
            { category: 'Cloud', technologies: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean'] },
            { category: 'Containers', technologies: ['Docker', 'Kubernetes', 'ECS'] },
            { category: 'CI/CD', technologies: ['GitHub Actions', 'GitLab CI', 'Jenkins'] },
            { category: 'IaC', technologies: ['Terraform', 'Pulumi', 'CloudFormation'] }
          ],
          workflow: [
            { step: 1, title: 'Assessment', description: 'Evaluate your application requirements and traffic patterns.' },
            { step: 2, title: 'Architecture', description: 'Design cloud architecture with security and scalability.' },
            { step: 3, title: 'Setup', description: 'Provision infrastructure using Infrastructure as Code.' },
            { step: 4, title: 'CI/CD', description: 'Set up automated deployment pipelines.' },
            { step: 5, title: 'Monitoring', description: 'Implement logging, monitoring, and alerting.' }
          ],
          whyChooseUs: [
            { title: 'Cloud Certified', description: 'Certified architects across major cloud platforms.', icon: '☁️' },
            { title: 'Cost Efficient', description: 'Right-sized infrastructure to minimize costs.', icon: '💰' },
            { title: 'Security First', description: 'Secure by default with proper IAM and networking.', icon: '🔐' },
            { title: '24/7 Support', description: 'Monitoring and support for critical applications.', icon: '🔧' }
          ],
          faqs: [
            { question: 'Which cloud provider should I use?', answer: 'It depends on your needs. AWS has the most services, GCP is great for AI/ML, Azure integrates well with Microsoft tools.' },
            { question: 'How do you ensure high availability?', answer: 'We use multi-AZ deployments, load balancing, and auto-scaling for reliability.' },
            { question: 'Can you help reduce my cloud costs?', answer: 'Yes, we audit your infrastructure and implement cost optimization strategies.' },
            { question: 'Do you provide DevOps services?', answer: 'Yes, we set up and manage CI/CD pipelines, monitoring, and infrastructure.' }
          ]
        }
      ]
    },
    {
      name: 'Performance & Security',
      services: [
        {
          slug: 'website-speed-optimization',
          name: 'Website Speed Optimization',
          shortDescription: 'Faster websites that convert better',
          description: 'We optimize your website for maximum speed and performance. Faster sites rank higher, convert better, and provide superior user experiences.',
          image: 'https://illustrations.popsy.co/amber/fast-car.svg',
          features: [
            'Core Web Vitals',
            'Image Optimization',
            'Code Minification',
            'Caching Strategy',
            'CDN Setup',
            'Lazy Loading'
          ],
          techStack: [
            { category: 'Analysis', technologies: ['Lighthouse', 'WebPageTest', 'GTmetrix'] },
            { category: 'Images', technologies: ['WebP', 'AVIF', 'Cloudinary', 'Imgix'] },
            { category: 'CDN', technologies: ['Cloudflare', 'Fastly', 'AWS CloudFront'] },
            { category: 'Caching', technologies: ['Redis', 'Varnish', 'Service Workers'] }
          ],
          workflow: [
            { step: 1, title: 'Audit', description: 'Comprehensive performance audit of your website.' },
            { step: 2, title: 'Analysis', description: 'Identify bottlenecks and opportunities.' },
            { step: 3, title: 'Optimization', description: 'Implement performance improvements.' },
            { step: 4, title: 'Verification', description: 'Measure improvements and refine.' },
            { step: 5, title: 'Monitoring', description: 'Set up ongoing performance monitoring.' }
          ],
          whyChooseUs: [
            { title: 'Measurable Results', description: 'Track improvements with real metrics.', icon: '📊' },
            { title: 'SEO Boost', description: 'Better Core Web Vitals means higher rankings.', icon: '🔍' },
            { title: 'User Experience', description: 'Faster sites = happier users.', icon: '😊' },
            { title: 'Conversion Focus', description: 'Speed improvements that increase sales.', icon: '💰' }
          ],
          faqs: [
            { question: 'How much faster can you make my site?', answer: 'Most sites see 40-70% improvement in load times. We provide specific projections after auditing.' },
            { question: 'Will optimization break anything?', answer: 'We test thoroughly and deploy incrementally to ensure nothing breaks.' },
            { question: 'How do you measure performance?', answer: 'We use Lighthouse, Core Web Vitals, and real user monitoring data.' },
            { question: 'Is this a one-time service?', answer: 'We offer both one-time optimization and ongoing performance monitoring.' }
          ]
        },
        {
          slug: 'security-hardening',
          name: 'Security Hardening & Data Protection',
          shortDescription: 'Protect your application and user data',
          description: 'We secure your applications against threats with comprehensive security hardening. From penetration testing to compliance, we protect your business and customers.',
          image: 'https://illustrations.popsy.co/amber/shield.svg',
          features: [
            'Security Audits',
            'Penetration Testing',
            'Vulnerability Scanning',
            'SSL/TLS Configuration',
            'Access Control',
            'Compliance (GDPR, SOC2)'
          ],
          techStack: [
            { category: 'Scanning', technologies: ['OWASP ZAP', 'Burp Suite', 'Snyk'] },
            { category: 'Monitoring', technologies: ['Datadog', 'Sentry', 'AWS GuardDuty'] },
            { category: 'Protection', technologies: ['WAF', 'CloudFlare', 'fail2ban'] },
            { category: 'Compliance', technologies: ['Vanta', 'Drata', 'OneTrust'] }
          ],
          workflow: [
            { step: 1, title: 'Assessment', description: 'Comprehensive security assessment of your application.' },
            { step: 2, title: 'Testing', description: 'Penetration testing and vulnerability scanning.' },
            { step: 3, title: 'Remediation', description: 'Fix identified vulnerabilities and implement controls.' },
            { step: 4, title: 'Hardening', description: 'Apply security best practices throughout.' },
            { step: 5, title: 'Monitoring', description: 'Set up security monitoring and alerting.' }
          ],
          whyChooseUs: [
            { title: 'Expert Team', description: 'Certified security professionals on staff.', icon: '👨‍💻' },
            { title: 'Proactive Approach', description: 'Find vulnerabilities before hackers do.', icon: '🔍' },
            { title: 'Compliance Ready', description: 'Help you meet GDPR, SOC2, HIPAA requirements.', icon: '✅' },
            { title: 'Incident Response', description: 'Ready to help if something goes wrong.', icon: '🚨' }
          ],
          faqs: [
            { question: 'How often should we do security testing?', answer: 'We recommend quarterly penetration tests and continuous vulnerability scanning.' },
            { question: 'Can you help with compliance?', answer: 'Yes, we help with GDPR, SOC2, HIPAA, and PCI-DSS compliance.' },
            { question: 'What if you find critical vulnerabilities?', answer: 'We report them immediately and help you remediate quickly.' },
            { question: 'Do you provide security training?', answer: 'Yes, we offer security awareness training for development teams.' }
          ]
        },
        {
          slug: 'maintenance-support',
          name: 'Maintenance & Support',
          shortDescription: 'Keep your systems running smoothly',
          description: 'We provide ongoing maintenance and support to keep your applications secure, updated, and running optimally. Focus on your business while we handle the technical upkeep.',
          image: 'https://illustrations.popsy.co/amber/pair-programming.svg',
          features: [
            'Proactive Monitoring',
            'Regular Updates',
            'Bug Fixes',
            'Performance Tuning',
            'Backup Management',
            '24/7 Support'
          ],
          techStack: [
            { category: 'Monitoring', technologies: ['Datadog', 'New Relic', 'Prometheus'] },
            { category: 'Alerting', technologies: ['PagerDuty', 'OpsGenie', 'Slack'] },
            { category: 'Logging', technologies: ['ELK Stack', 'Loki', 'CloudWatch'] },
            { category: 'Backup', technologies: ['AWS Backup', 'Restic', 'Duplicacy'] }
          ],
          workflow: [
            { step: 1, title: 'Onboarding', description: 'Document your systems and establish baselines.' },
            { step: 2, title: 'Monitoring', description: 'Set up comprehensive monitoring and alerting.' },
            { step: 3, title: 'Maintenance', description: 'Regular updates, patches, and optimizations.' },
            { step: 4, title: 'Support', description: 'Handle issues and requests as they arise.' },
            { step: 5, title: 'Reporting', description: 'Regular reports on system health and activities.' }
          ],
          whyChooseUs: [
            { title: 'Proactive', description: 'We fix issues before they become problems.', icon: '🔮' },
            { title: 'Responsive', description: 'Fast response times for critical issues.', icon: '⚡' },
            { title: 'Transparent', description: 'Clear communication and regular reports.', icon: '📊' },
            { title: 'Flexible', description: 'Support plans that fit your needs.', icon: '🤝' }
          ],
          faqs: [
            { question: 'What response times do you offer?', answer: 'Critical issues: 1 hour. High: 4 hours. Medium: 24 hours. Low: 72 hours.' },
            { question: 'Do you work on weekends?', answer: 'Yes, our 24/7 plans include weekend and holiday support.' },
            { question: 'Can you maintain apps you did not build?', answer: 'Yes, after an assessment period to understand the codebase.' },
            { question: 'How do I request support?', answer: 'Via dedicated support portal, email, Slack, or phone depending on your plan.' }
          ]
        },
        {
          slug: 'scalability-consulting',
          name: 'Scalability & Performance Consulting',
          shortDescription: 'Prepare your systems for growth',
          description: 'We help you prepare for scale with architecture reviews, performance tuning, and strategic recommendations. Be ready when your business takes off.',
          image: 'https://illustrations.popsy.co/amber/building-blocks.svg',
          features: [
            'Architecture Review',
            'Performance Profiling',
            'Bottleneck Analysis',
            'Scaling Strategy',
            'Load Testing',
            'Technology Recommendations'
          ],
          techStack: [
            { category: 'Load Testing', technologies: ['k6', 'Locust', 'Artillery', 'JMeter'] },
            { category: 'Profiling', technologies: ['Chrome DevTools', 'Pyroscope', 'Datadog APM'] },
            { category: 'Scaling', technologies: ['Kubernetes', 'Auto-scaling', 'Load Balancers'] },
            { category: 'Caching', technologies: ['Redis', 'Memcached', 'CDN'] }
          ],
          workflow: [
            { step: 1, title: 'Discovery', description: 'Understand your current architecture and growth plans.' },
            { step: 2, title: 'Analysis', description: 'Profile performance and identify bottlenecks.' },
            { step: 3, title: 'Load Testing', description: 'Simulate high traffic to find breaking points.' },
            { step: 4, title: 'Recommendations', description: 'Provide detailed scaling strategy and roadmap.' },
            { step: 5, title: 'Implementation', description: 'Help implement recommended improvements.' }
          ],
          whyChooseUs: [
            { title: 'Experience', description: 'Scaled systems to millions of users.', icon: '📈' },
            { title: 'Data-Driven', description: 'Recommendations based on real profiling data.', icon: '📊' },
            { title: 'Cost-Aware', description: 'Balance performance with infrastructure costs.', icon: '💰' },
            { title: 'Future-Ready', description: 'Prepare for 10x growth, not just 2x.', icon: '🚀' }
          ],
          faqs: [
            { question: 'When should I start thinking about scalability?', answer: 'Before you have scaling problems. We recommend an assessment at 30% of expected capacity.' },
            { question: 'How do you simulate traffic?', answer: 'We use load testing tools to simulate realistic user behavior at scale.' },
            { question: 'Can you help with auto-scaling?', answer: 'Yes, we set up auto-scaling policies to handle traffic spikes automatically.' },
            { question: 'What if we have a sudden viral moment?', answer: 'With proper preparation, we help you handle 10-100x normal traffic.' }
          ]
        }
      ]
    }
  ]
}

