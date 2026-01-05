import { ServiceCategory } from './types'

export const creativeService: ServiceCategory = {
  slug: 'creative',
  name: 'Creative',
  tagline: 'Design That Captivates',
  description: 'Elevate your brand with stunning visuals, compelling content, and creative strategies that resonate with your audience and drive engagement.',
  heroImage: '/services/creative-hero.svg',
  subCategories: [
    {
      name: 'Branding & Graphic Design',
      services: [
        {
          slug: 'logo-brand-identity',
          name: 'Logo Design & Brand Identity',
          shortDescription: 'Create a memorable visual identity',
          description: 'We design logos and visual identities that capture your brand essence and stand out in the market. From concept to complete brand system, we create visual assets that make an impact.',
          image: 'https://illustrations.popsy.co/amber/creative-work.svg',
          features: [
            'Logo Design',
            'Color Palette',
            'Typography System',
            'Icon Library',
            'Brand Applications',
            'Style Guide'
          ],
          techStack: [
            { category: 'Design', technologies: ['Adobe Illustrator', 'Figma', 'Sketch'] },
            { category: 'Prototyping', technologies: ['Figma', 'InVision', 'Principle'] },
            { category: 'Typography', technologies: ['Google Fonts', 'Adobe Fonts', 'Custom'] },
            { category: 'Documentation', technologies: ['Frontify', 'Brandpad', 'Figma'] }
          ],
          workflow: [
            { step: 1, title: 'Brief', description: 'Understand your vision and requirements.' },
            { step: 2, title: 'Exploration', description: 'Develop multiple creative directions.' },
            { step: 3, title: 'Refinement', description: 'Refine chosen concept with feedback.' },
            { step: 4, title: 'System', description: 'Build complete visual identity system.' },
            { step: 5, title: 'Delivery', description: 'Deliver all assets and guidelines.' }
          ],
          whyChooseUs: [
            { title: 'Creative Excellence', description: 'Award-winning design team.', icon: '🏆' },
            { title: 'Strategic Design', description: 'Logos backed by brand strategy.', icon: '🎯' },
            { title: 'Complete Systems', description: 'Full identity, not just a logo.', icon: '📦' },
            { title: 'Future-Proof', description: 'Designs that scale and adapt.', icon: '🚀' }
          ],
          faqs: [
            { question: 'How many logo concepts do you provide?', answer: 'We typically present 3-5 distinct concepts for your review.' },
            { question: 'What files do we receive?', answer: 'Vector files (AI, SVG, EPS), PNG, JPG in all sizes plus brand guidelines.' },
            { question: 'How long does the process take?', answer: 'Logo design: 2-3 weeks. Full identity: 4-6 weeks.' },
            { question: 'Can you work with our existing logo?', answer: 'Yes, we can refine or build a system around existing logos.' }
          ]
        },
        {
          slug: 'ui-ux-design',
          name: 'UI/UX Design for Web & Apps',
          shortDescription: 'Intuitive interfaces that users love',
          description: 'We design digital experiences that are beautiful and intuitive. From user research to high-fidelity designs, we create interfaces that delight users and achieve business goals.',
          image: 'https://illustrations.popsy.co/amber/app-design.svg',
          features: [
            'User Research',
            'Wireframing',
            'UI Design',
            'Prototyping',
            'Usability Testing',
            'Design Systems'
          ],
          techStack: [
            { category: 'Design', technologies: ['Figma', 'Sketch', 'Adobe XD'] },
            { category: 'Prototyping', technologies: ['Figma', 'Principle', 'ProtoPie'] },
            { category: 'Research', technologies: ['Maze', 'UserTesting', 'Hotjar'] },
            { category: 'Handoff', technologies: ['Zeplin', 'Figma Dev Mode'] }
          ],
          workflow: [
            { step: 1, title: 'Research', description: 'Understand users, goals, and constraints.' },
            { step: 2, title: 'Information Architecture', description: 'Structure content and navigation.' },
            { step: 3, title: 'Wireframes', description: 'Create low-fidelity layouts.' },
            { step: 4, title: 'UI Design', description: 'Design high-fidelity interfaces.' },
            { step: 5, title: 'Prototype & Test', description: 'Build prototypes and validate with users.' }
          ],
          whyChooseUs: [
            { title: 'User-Centered', description: 'Design decisions backed by research.', icon: '👥' },
            { title: 'Beautiful & Functional', description: 'Interfaces that look great and work great.', icon: '✨' },
            { title: 'Developer-Friendly', description: 'Clean handoffs with specifications.', icon: '💻' },
            { title: 'Conversion Focus', description: 'Designs that achieve business goals.', icon: '📈' }
          ],
          faqs: [
            { question: 'Do you do user research?', answer: 'Yes, we conduct user interviews, surveys, and usability testing.' },
            { question: 'What do you deliver?', answer: 'Figma files with components, prototypes, and developer specifications.' },
            { question: 'Do you build design systems?', answer: 'Yes, we create reusable component libraries for consistency.' },
            { question: 'How do you work with developers?', answer: 'We provide detailed specs and support during implementation.' }
          ]
        },
        {
          slug: 'social-media-design',
          name: 'Social Media Design',
          shortDescription: 'Stand out in the social feed',
          description: 'We create scroll-stopping social media graphics that engage your audience and reinforce your brand. From templates to campaigns, we help you own social.',
          image: 'https://illustrations.popsy.co/amber/social-media.svg',
          features: [
            'Post Templates',
            'Story Templates',
            'Campaign Graphics',
            'Profile Assets',
            'Carousel Designs',
            'Platform Optimization'
          ],
          techStack: [
            { category: 'Design', technologies: ['Figma', 'Canva', 'Photoshop'] },
            { category: 'Animation', technologies: ['After Effects', 'Lottie', 'Canva'] },
            { category: 'Templates', technologies: ['Canva', 'Figma', 'Custom'] },
            { category: 'Stock', technologies: ['Unsplash', 'Pexels', 'Shutterstock'] }
          ],
          workflow: [
            { step: 1, title: 'Audit', description: 'Review current social presence and goals.' },
            { step: 2, title: 'Strategy', description: 'Define visual strategy for each platform.' },
            { step: 3, title: 'Design', description: 'Create templates and graphics.' },
            { step: 4, title: 'Templates', description: 'Build easy-to-use template system.' },
            { step: 5, title: 'Delivery', description: 'Deliver with training on usage.' }
          ],
          whyChooseUs: [
            { title: 'Platform Native', description: 'Optimized for each social platform.', icon: '📱' },
            { title: 'Template Systems', description: 'Easy for your team to create content.', icon: '📦' },
            { title: 'Trend Aware', description: 'Designs that feel current.', icon: '🔥' },
            { title: 'Engagement Focus', description: 'Graphics designed to drive interaction.', icon: '💬' }
          ],
          faqs: [
            { question: 'Do you create templates we can edit?', answer: 'Yes, we create Canva or Figma templates your team can easily update.' },
            { question: 'Which platforms do you design for?', answer: 'Instagram, LinkedIn, Twitter, Facebook, TikTok, and more.' },
            { question: 'Can you match our existing brand?', answer: 'Yes, we work within your brand guidelines.' },
            { question: 'Do you handle posting?', answer: 'We focus on design; you can use our templates for posting.' }
          ]
        },
        {
          slug: 'ad-creatives-campaign-assets',
          name: 'Ad Creatives & Campaign Assets',
          shortDescription: 'Ads that convert clicks to customers',
          description: 'We design high-converting ad creatives for digital campaigns. From static images to animated banners, we create assets that drive results across all platforms.',
          image: 'https://illustrations.popsy.co/amber/marketing.svg',
          features: [
            'Display Ads',
            'Social Ads',
            'Google Ads',
            'Retargeting Ads',
            'Video Ads',
            'A/B Testing Assets'
          ],
          techStack: [
            { category: 'Design', technologies: ['Figma', 'Photoshop', 'Illustrator'] },
            { category: 'Animation', technologies: ['After Effects', 'HTML5', 'GIFs'] },
            { category: 'Platforms', technologies: ['Meta Ads', 'Google Ads', 'LinkedIn'] },
            { category: 'Testing', technologies: ['Multiple Variants', 'Size Optimization'] }
          ],
          workflow: [
            { step: 1, title: 'Brief', description: 'Understand campaign goals and targeting.' },
            { step: 2, title: 'Concepts', description: 'Develop creative concepts and messaging.' },
            { step: 3, title: 'Design', description: 'Create ad variations and sizes.' },
            { step: 4, title: 'Optimization', description: 'Optimize for platform requirements.' },
            { step: 5, title: 'Delivery', description: 'Deliver all sizes and formats.' }
          ],
          whyChooseUs: [
            { title: 'Conversion Focus', description: 'Designs optimized for clicks and conversions.', icon: '📈' },
            { title: 'Platform Expertise', description: 'Know specs for every ad platform.', icon: '🎯' },
            { title: 'Fast Iteration', description: 'Quick turnaround for testing.', icon: '⚡' },
            { title: 'Full Sizes', description: 'All sizes and formats you need.', icon: '📦' }
          ],
          faqs: [
            { question: 'What ad sizes do you provide?', answer: 'All standard sizes for your platforms plus custom sizes as needed.' },
            { question: 'Do you create animated ads?', answer: 'Yes, we create animated GIFs, HTML5, and video ads.' },
            { question: 'How many variations do you provide?', answer: 'We typically create 3-5 variations for A/B testing.' },
            { question: 'Can you design for specific campaigns?', answer: 'Yes, we design for seasonal, promotional, and brand campaigns.' }
          ]
        },
        {
          slug: 'pitch-decks-presentations',
          name: 'Pitch Decks & Business Presentations',
          shortDescription: 'Presentations that win deals',
          description: 'We design compelling pitch decks and presentations that help you tell your story and win business. From investor decks to sales presentations, we make you look your best.',
          image: 'https://illustrations.popsy.co/amber/presentation.svg',
          features: [
            'Investor Pitch Decks',
            'Sales Presentations',
            'Company Overviews',
            'Product Demos',
            'Conference Talks',
            'Template Systems'
          ],
          techStack: [
            { category: 'Design', technologies: ['PowerPoint', 'Keynote', 'Google Slides'] },
            { category: 'Graphics', technologies: ['Figma', 'Illustrator', 'Photoshop'] },
            { category: 'Animation', technologies: ['PowerPoint', 'Keynote', 'After Effects'] },
            { category: 'Templates', technologies: ['Custom', 'Branded Templates'] }
          ],
          workflow: [
            { step: 1, title: 'Content', description: 'Review and structure your content.' },
            { step: 2, title: 'Story', description: 'Develop narrative flow.' },
            { step: 3, title: 'Design', description: 'Create visually stunning slides.' },
            { step: 4, title: 'Polish', description: 'Add animations and transitions.' },
            { step: 5, title: 'Delivery', description: 'Deliver editable files and PDF.' }
          ],
          whyChooseUs: [
            { title: 'Story First', description: 'Structure content for maximum impact.', icon: '📖' },
            { title: 'Visual Excellence', description: 'Beautiful, professional designs.', icon: '✨' },
            { title: 'Investor Experience', description: 'Know what investors want to see.', icon: '💰' },
            { title: 'Editable Files', description: 'Easy for you to update and customize.', icon: '📝' }
          ],
          faqs: [
            { question: 'How long does a pitch deck take?', answer: '1-2 weeks depending on length and complexity.' },
            { question: 'Do you help with content?', answer: 'We can advise on structure and story, or work with your content.' },
            { question: 'What format do you deliver?', answer: 'PowerPoint, Keynote, or Google Slides plus PDF.' },
            { question: 'Can you create templates for our team?', answer: 'Yes, we create reusable templates with your branding.' }
          ]
        },
        {
          slug: 'print-packaging-design',
          name: 'Print & Packaging Design',
          shortDescription: 'Physical designs that make an impression',
          description: 'We design print materials and packaging that stand out on shelves and in hands. From product packaging to trade show displays, we create physical touchpoints that impress.',
          image: 'https://illustrations.popsy.co/amber/gift.svg',
          features: [
            'Product Packaging',
            'Label Design',
            'Print Collateral',
            'Trade Show Displays',
            'Signage',
            'Merchandise'
          ],
          techStack: [
            { category: 'Design', technologies: ['Adobe Illustrator', 'InDesign', 'Photoshop'] },
            { category: 'Prototyping', technologies: ['Dielines', 'Mockups', '3D Renders'] },
            { category: 'Production', technologies: ['Print-Ready Files', 'Pantone'] },
            { category: 'Proofing', technologies: ['Physical Proofs', 'Digital Proofs'] }
          ],
          workflow: [
            { step: 1, title: 'Brief', description: 'Understand product and requirements.' },
            { step: 2, title: 'Concepts', description: 'Develop design directions.' },
            { step: 3, title: 'Design', description: 'Create detailed designs.' },
            { step: 4, title: 'Prototyping', description: 'Create mockups or proofs.' },
            { step: 5, title: 'Production', description: 'Deliver print-ready files.' }
          ],
          whyChooseUs: [
            { title: 'Print Expertise', description: 'Know the technical requirements.', icon: '🖨️' },
            { title: 'Shelf Impact', description: 'Designs that stand out.', icon: '👁️' },
            { title: 'Production Ready', description: 'Files that print perfectly.', icon: '✅' },
            { title: 'Sustainable Options', description: 'Eco-friendly design solutions.', icon: '🌱' }
          ],
          faqs: [
            { question: 'Do you work with our manufacturer?', answer: 'Yes, we coordinate with your print or packaging vendor.' },
            { question: 'Can you source printing?', answer: 'We can recommend vendors; you handle production relationship.' },
            { question: 'What about die lines?', answer: 'We work with existing dielines or create new ones.' },
            { question: 'Do you do sustainable packaging?', answer: 'Yes, we design with sustainability in mind.' }
          ]
        }
      ]
    },
    {
      name: 'Video & Content Production',
      services: [
        {
          slug: 'video-editing-long-short',
          name: 'Video Editing (Long-Form & Short-Form)',
          shortDescription: 'Professional video editing that engages',
          description: 'We edit videos that captivate your audience. From YouTube content to corporate videos, we bring your footage to life with professional editing, graphics, and sound design.',
          image: 'https://illustrations.popsy.co/amber/video-editing.svg',
          features: [
            'YouTube Videos',
            'Corporate Videos',
            'Interview Editing',
            'Documentary Style',
            'Event Videos',
            'Color Grading'
          ],
          techStack: [
            { category: 'Editing', technologies: ['Premiere Pro', 'Final Cut Pro', 'DaVinci'] },
            { category: 'Graphics', technologies: ['After Effects', 'Motion', 'Fusion'] },
            { category: 'Audio', technologies: ['Audition', 'Logic Pro', 'Descript'] },
            { category: 'Color', technologies: ['DaVinci Resolve', 'Premiere Lumetri'] }
          ],
          workflow: [
            { step: 1, title: 'Review', description: 'Review footage and plan edit.' },
            { step: 2, title: 'Assembly', description: 'Create initial rough cut.' },
            { step: 3, title: 'Refinement', description: 'Refine pacing and story.' },
            { step: 4, title: 'Polish', description: 'Add graphics, color, and sound.' },
            { step: 5, title: 'Delivery', description: 'Export in required formats.' }
          ],
          whyChooseUs: [
            { title: 'Story Focus', description: 'Edit for maximum engagement.', icon: '🎬' },
            { title: 'Fast Turnaround', description: 'Quick delivery for content creators.', icon: '⚡' },
            { title: 'Platform Optimized', description: 'Formats for every platform.', icon: '📱' },
            { title: 'Consistent Quality', description: 'Professional results every time.', icon: '✨' }
          ],
          faqs: [
            { question: 'What formats do you deliver?', answer: 'Any format you need - YouTube, social, broadcast, etc.' },
            { question: 'Do you do color correction?', answer: 'Yes, color correction and grading included.' },
            { question: 'What about music and sound?', answer: 'We handle audio editing, music selection, and sound design.' },
            { question: 'How fast can you turn around edits?', answer: '24-48 hours for short-form, 1-2 weeks for long-form.' }
          ]
        },
        {
          slug: 'podcast-editing-production',
          name: 'Podcast Editing & Production',
          shortDescription: 'Professional podcast production',
          description: 'We handle podcast post-production so you can focus on content. From audio editing to show notes, we deliver polished episodes ready for publishing.',
          image: 'https://illustrations.popsy.co/amber/headphones.svg',
          features: [
            'Audio Editing',
            'Noise Reduction',
            'Intro/Outro',
            'Show Notes',
            'Transcription',
            'Distribution Setup'
          ],
          techStack: [
            { category: 'Audio', technologies: ['Adobe Audition', 'Logic Pro', 'Descript'] },
            { category: 'Hosting', technologies: ['Transistor', 'Buzzsprout', 'Anchor'] },
            { category: 'Transcription', technologies: ['Descript', 'Otter', 'Rev'] },
            { category: 'Distribution', technologies: ['Apple Podcasts', 'Spotify', 'RSS'] }
          ],
          workflow: [
            { step: 1, title: 'Upload', description: 'You upload raw audio files.' },
            { step: 2, title: 'Edit', description: 'We edit and enhance audio.' },
            { step: 3, title: 'Production', description: 'Add intro, outro, and music.' },
            { step: 4, title: 'Assets', description: 'Create show notes and artwork.' },
            { step: 5, title: 'Publish', description: 'Upload and schedule episodes.' }
          ],
          whyChooseUs: [
            { title: 'Audio Quality', description: 'Professional sound enhancement.', icon: '🎧' },
            { title: 'Full Service', description: 'Edit to publish, we handle it all.', icon: '📦' },
            { title: 'Consistent Schedule', description: 'Never miss a publish date.', icon: '📅' },
            { title: 'Growth Support', description: 'Help grow your podcast audience.', icon: '📈' }
          ],
          faqs: [
            { question: 'What do you need from us?', answer: 'Raw audio files and any notes about the episode.' },
            { question: 'Do you create show notes?', answer: 'Yes, we create SEO-optimized show notes and summaries.' },
            { question: 'Can you handle video podcasts?', answer: 'Yes, we edit video podcasts and create clips.' },
            { question: 'How fast is turnaround?', answer: 'Typically 3-5 business days per episode.' }
          ]
        },
        {
          slug: 'social-media-reels-shorts',
          name: 'Social Media Reels & Shorts',
          shortDescription: 'Viral-worthy short-form content',
          description: 'We create engaging short-form videos optimized for TikTok, Reels, and Shorts. From repurposing long content to original shorts, we help you win attention.',
          image: 'https://illustrations.popsy.co/amber/clip.svg',
          features: [
            'TikTok Videos',
            'Instagram Reels',
            'YouTube Shorts',
            'Content Repurposing',
            'Trend Integration',
            'Captions & Text'
          ],
          techStack: [
            { category: 'Editing', technologies: ['Premiere Pro', 'CapCut', 'DaVinci'] },
            { category: 'Captions', technologies: ['Auto Captions', 'Descript', 'Custom'] },
            { category: 'Music', technologies: ['Trending Audio', 'Licensed Music'] },
            { category: 'Optimization', technologies: ['Vertical Video', 'Platform Native'] }
          ],
          workflow: [
            { step: 1, title: 'Content', description: 'Receive footage or long-form content.' },
            { step: 2, title: 'Clip Selection', description: 'Identify best moments.' },
            { step: 3, title: 'Edit', description: 'Create engaging short edits.' },
            { step: 4, title: 'Optimize', description: 'Add captions, music, effects.' },
            { step: 5, title: 'Deliver', description: 'Platform-ready files.' }
          ],
          whyChooseUs: [
            { title: 'Trend Aware', description: 'Know whats working on each platform.', icon: '🔥' },
            { title: 'Scroll-Stopping', description: 'Hook viewers in the first second.', icon: '👆' },
            { title: 'Volume', description: 'Produce high volume of content.', icon: '📊' },
            { title: 'Fast Turnaround', description: 'Quick delivery for timely content.', icon: '⚡' }
          ],
          faqs: [
            { question: 'How many shorts can you produce monthly?', answer: 'Packages range from 8-30+ shorts per month.' },
            { question: 'Do you find trending audio?', answer: 'Yes, we select trending and appropriate audio.' },
            { question: 'Can you repurpose our long videos?', answer: 'Yes, we specialize in repurposing long-form content.' },
            { question: 'What about captions?', answer: 'Dynamic captions included on all shorts.' }
          ]
        },
        {
          slug: 'motion-graphics-animations',
          name: 'Motion Graphics & Animations',
          shortDescription: 'Bring ideas to life with motion',
          description: 'We create motion graphics and animations that explain, engage, and entertain. From logo animations to explainer videos, we add motion to your brand.',
          image: 'https://illustrations.popsy.co/amber/animation.svg',
          features: [
            'Logo Animations',
            'Explainer Videos',
            'Kinetic Typography',
            'Lower Thirds',
            'Social Animations',
            'Infographic Videos'
          ],
          techStack: [
            { category: 'Motion', technologies: ['After Effects', 'Motion', 'Cinema 4D'] },
            { category: 'Design', technologies: ['Illustrator', 'Figma', 'Photoshop'] },
            { category: 'Export', technologies: ['Lottie', 'GIF', 'MP4', 'WebM'] },
            { category: '3D', technologies: ['Cinema 4D', 'Blender', 'Element 3D'] }
          ],
          workflow: [
            { step: 1, title: 'Concept', description: 'Define the animation goals and style.' },
            { step: 2, title: 'Storyboard', description: 'Plan the animation sequence.' },
            { step: 3, title: 'Design', description: 'Create visual assets.' },
            { step: 4, title: 'Animate', description: 'Bring designs to life.' },
            { step: 5, title: 'Deliver', description: 'Export in required formats.' }
          ],
          whyChooseUs: [
            { title: 'Creative Excellence', description: 'Award-worthy motion design.', icon: '🏆' },
            { title: 'Brand Aligned', description: 'Motion that fits your brand.', icon: '🎨' },
            { title: 'Technical Quality', description: 'Smooth, professional animations.', icon: '✨' },
            { title: 'Flexible Formats', description: 'Lottie, GIF, video - any format.', icon: '📦' }
          ],
          faqs: [
            { question: 'What is the typical timeline?', answer: '1-2 weeks for simple animations, 4-6 weeks for explainer videos.' },
            { question: 'Do you provide Lottie files?', answer: 'Yes, we export to Lottie for web and app use.' },
            { question: 'Can you create 3D animations?', answer: 'Yes, we do both 2D and 3D motion graphics.' },
            { question: 'What about voiceover?', answer: 'We can source voiceover artists or work with yours.' }
          ]
        },
        {
          slug: 'youtube-content-video-editing',
          name: 'YouTube & Content-Driven Video Editing',
          shortDescription: 'Editing that grows YouTube channels',
          description: 'We specialize in YouTube video editing that maximizes watch time and engagement. From thumbnails to retention-optimized edits, we help creators grow.',
          image: 'https://illustrations.popsy.co/amber/video-call.svg',
          features: [
            'YouTube Editing',
            'Thumbnail Design',
            'Chapter Markers',
            'Cards & End Screens',
            'Retention Optimization',
            'Style Development'
          ],
          techStack: [
            { category: 'Editing', technologies: ['Premiere Pro', 'Final Cut Pro', 'DaVinci'] },
            { category: 'Thumbnails', technologies: ['Photoshop', 'Figma', 'Canva'] },
            { category: 'Graphics', technologies: ['After Effects', 'Motion'] },
            { category: 'Analytics', technologies: ['YouTube Studio', 'VidIQ', 'TubeBuddy'] }
          ],
          workflow: [
            { step: 1, title: 'Footage', description: 'Receive raw footage and notes.' },
            { step: 2, title: 'Edit', description: 'Create engaging, paced edit.' },
            { step: 3, title: 'Graphics', description: 'Add titles, graphics, effects.' },
            { step: 4, title: 'Thumbnail', description: 'Create click-worthy thumbnail.' },
            { step: 5, title: 'Optimize', description: 'Add chapters, cards, end screens.' }
          ],
          whyChooseUs: [
            { title: 'YouTube Native', description: 'Understand the platform deeply.', icon: '📺' },
            { title: 'Retention Focus', description: 'Edit for maximum watch time.', icon: '📈' },
            { title: 'Complete Package', description: 'Edit + thumbnail + optimization.', icon: '📦' },
            { title: 'Creator Focused', description: 'Support busy content creators.', icon: '🎥' }
          ],
          faqs: [
            { question: 'Do you create thumbnails?', answer: 'Yes, custom thumbnails with every video.' },
            { question: 'What editing style can you do?', answer: 'We adapt to your style or help develop a signature look.' },
            { question: 'How fast is turnaround?', answer: '3-7 days depending on video length and complexity.' },
            { question: 'Can you help with YouTube strategy?', answer: 'We provide optimization tips and analytics review.' }
          ]
        }
      ]
    }
  ]
}

