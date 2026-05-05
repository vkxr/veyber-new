export type SubserviceCard = {
  title: string;
  desc: string;
  items: string[];
};

export type SubserviceFaq = {
  q: string;
  a: string;
};

export type SubserviceStep = {
  label: string;
  desc: string;
};

export type SubservicePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  parentTitle: string;
  parentHref: string;
  badge: string;
  highlight: string;
  icon: string;
  benefits: string[];
  idealFor: string[];
  cards: SubserviceCard[];
  process: SubserviceStep[];
  faqs: SubserviceFaq[];
  relatedLinks: Array<{ label: string; href: string }>;
};

export const socialMediaSubLinks = [
  { label: 'Instagram Management', href: '/instagram-management' },
  { label: 'Facebook Marketing', href: '/facebook-marketing' },
  { label: 'Ad Campaigns', href: '/ad-campaigns' },
];

export const contentMarketingSubLinks = [
  { label: 'SEO Blog Writing', href: '/seo-blog-writing' },
  { label: 'Website Copywriting', href: '/website-copywriting' },
  { label: 'Keyword Strategy', href: '/keyword-strategy' },
];

export const businessConsultingSubLinks = [
  { label: 'Digital Strategy', href: '/digital-strategy' },
  { label: 'Market Research', href: '/market-research' },
  { label: 'Brand Positioning', href: '/brand-positioning' },
];

export const subservicePages: Record<string, SubservicePageData> = {
  'instagram-management': {
    slug: 'instagram-management',
    title: 'Instagram Management Services',
    metaTitle: 'Instagram Management Services in Gujarat | Veyber',
    description:
      'Professional Instagram management services for brands in Vadodara and across Gujarat, including content planning, posting, growth, and engagement.',
    keywords: [
      'Instagram management services Gujarat',
      'Instagram marketing Vadodara',
      'Instagram growth agency Gujarat',
      'social media manager Vadodara',
    ],
    parentTitle: 'Social Media Handling',
    parentHref: '/social-media-handling',
    badge: 'Instagram Growth | Gujarat',
    highlight:
      'Build a stronger Instagram presence with content, consistency, and audience engagement that supports real business growth.',
    icon: 'photo_camera',
    benefits: [
      'A consistent and polished Instagram presence',
      'Better reel, story, and feed planning',
      'Higher audience engagement and response quality',
      'More qualified leads from social traffic',
    ],
    idealFor: ['Local businesses', 'Ecommerce brands', 'Creators', 'Startups'],
    cards: [
      {
        title: 'Content Planning',
        desc: 'Monthly planning that keeps posting consistent and on-brand.',
        items: ['Content calendar', 'Reel ideas', 'Story themes', 'Posting cadence'],
      },
      {
        title: 'Profile Management',
        desc: 'Hands-on account support to keep your page active and optimized.',
        items: ['Bio updates', 'Highlight setup', 'Caption writing', 'Hashtag support'],
      },
      {
        title: 'Growth & Engagement',
        desc: 'Audience-focused actions that improve visibility and trust.',
        items: ['DM support', 'Comment management', 'Performance reviews', 'Growth recommendations'],
      },
    ],
    process: [
      { label: 'Brand Review', desc: 'We study your business, voice, offers, and existing Instagram presence.' },
      { label: 'Content Mapping', desc: 'We build a posting structure around education, trust, engagement, and sales.' },
      { label: 'Creative Execution', desc: 'Captions, reels, stories, and feed ideas are prepared for regular publishing.' },
      { label: 'Engagement Support', desc: 'We monitor audience activity and improve response quality over time.' },
      { label: 'Optimization', desc: 'Monthly insights guide the next round of content and growth actions.' },
    ],
    faqs: [
      { q: 'Do you create Instagram content?', a: 'Yes. We help with content direction, captions, posting plans, and campaign ideas.' },
      { q: 'Can Instagram management help local businesses?', a: 'Yes. It helps local brands stay visible, build trust, and generate steady inquiries.' },
      { q: 'Do you manage reels and stories?', a: 'Yes. We include reels, stories, and feed planning based on the package and strategy.' },
    ],
    relatedLinks: [
      { label: 'Social Media Handling', href: '/social-media-handling' },
      { label: 'Facebook Marketing', href: '/facebook-marketing' },
      { label: 'Ad Campaigns', href: '/ad-campaigns' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'facebook-marketing': {
    slug: 'facebook-marketing',
    title: 'Facebook Marketing Services',
    metaTitle: 'Facebook Marketing Services in Gujarat | Veyber',
    description:
      'Facebook marketing services for businesses in Gujarat, covering page management, post strategy, audience engagement, and campaign support.',
    keywords: [
      'Facebook marketing services Gujarat',
      'Facebook page management Vadodara',
      'social media marketing Gujarat',
      'Facebook ad support Vadodara',
    ],
    parentTitle: 'Social Media Handling',
    parentHref: '/social-media-handling',
    badge: 'Facebook Marketing | Gujarat',
    highlight:
      'Use Facebook to build reach, community trust, and steady lead generation with smarter page and campaign management.',
    icon: 'thumb_up',
    benefits: [
      'A more active and trustworthy Facebook page',
      'Stronger campaign support for local promotions',
      'More useful engagement from the right audience',
      'Better coordination between content and paid reach',
    ],
    idealFor: ['Service businesses', 'Retail stores', 'Ecommerce brands', 'Regional companies'],
    cards: [
      {
        title: 'Page Management',
        desc: 'Keep your brand page current, responsive, and aligned with your offers.',
        items: ['Page updates', 'Post scheduling', 'Offer promotion', 'Audience replies'],
      },
      {
        title: 'Organic Content',
        desc: 'Build authority with content suited to Facebook behavior and reach.',
        items: ['Post concepts', 'Community content', 'Event promotion', 'Visual planning'],
      },
      {
        title: 'Campaign Support',
        desc: 'Strengthen paid and organic coordination for better results.',
        items: ['Campaign alignment', 'Lead hooks', 'Audience suggestions', 'Performance review'],
      },
    ],
    process: [
      { label: 'Audit', desc: 'We review your page quality, content consistency, and audience signals.' },
      { label: 'Planning', desc: 'We define the content and promotion mix needed for your goals.' },
      { label: 'Publishing', desc: 'Posts, offers, and campaign-aligned content are scheduled and managed.' },
      { label: 'Engagement', desc: 'We support better response quality and page activity.' },
      { label: 'Refinement', desc: 'Performance data informs content adjustments and campaign direction.' },
    ],
    faqs: [
      { q: 'Is Facebook still useful for business growth?', a: 'Yes. It remains valuable for local reach, lead generation, retargeting, and community trust.' },
      { q: 'Do you manage both organic and paid Facebook activity?', a: 'Yes. We support page content and can align it with broader advertising campaigns.' },
      { q: 'Can Facebook marketing help service businesses?', a: 'Yes. It is especially useful for lead generation, local awareness, and offer promotion.' },
    ],
    relatedLinks: [
      { label: 'Social Media Handling', href: '/social-media-handling' },
      { label: 'Instagram Management', href: '/instagram-management' },
      { label: 'Ad Campaigns', href: '/ad-campaigns' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'ad-campaigns': {
    slug: 'ad-campaigns',
    title: 'Ad Campaign Management Services',
    metaTitle: 'Ad Campaign Management Services in Gujarat | Veyber',
    description:
      'Ad campaign management for businesses in Gujarat, including audience setup, creative direction, budget planning, and optimization support.',
    keywords: [
      'ad campaign management Gujarat',
      'social media ads Vadodara',
      'Facebook Instagram ad campaigns Gujarat',
      'lead generation ads India',
    ],
    parentTitle: 'Social Media Handling',
    parentHref: '/social-media-handling',
    badge: 'Paid Campaigns | Gujarat',
    highlight:
      'Launch ad campaigns with clearer targeting, better creative direction, and optimization that focuses on leads and sales.',
    icon: 'ads_click',
    benefits: [
      'Smarter audience targeting',
      'Stronger budget allocation decisions',
      'Creative aligned with campaign intent',
      'Cleaner reporting on ad performance',
    ],
    idealFor: ['Lead generation brands', 'Local service businesses', 'Product launches', 'Sales campaigns'],
    cards: [
      {
        title: 'Campaign Setup',
        desc: 'A stronger launch foundation helps reduce wasted spend.',
        items: ['Offer alignment', 'Audience setup', 'Objective mapping', 'Tracking review'],
      },
      {
        title: 'Creative Direction',
        desc: 'Sharper messaging improves click quality and conversion intent.',
        items: ['Hook ideas', 'Ad copy support', 'Creative testing angles', 'Landing page alignment'],
      },
      {
        title: 'Optimization',
        desc: 'Regular adjustments keep campaigns efficient and focused on results.',
        items: ['Budget tuning', 'Audience refinement', 'Performance checks', 'Reporting notes'],
      },
    ],
    process: [
      { label: 'Goal Alignment', desc: 'We define the campaign outcome, audience, and business constraints first.' },
      { label: 'Campaign Build', desc: 'Targeting, structure, messaging, and setup are configured carefully.' },
      { label: 'Launch Review', desc: 'Early data is monitored to confirm campaign health and direction.' },
      { label: 'Optimization', desc: 'We improve audience quality, creative relevance, and budget efficiency.' },
      { label: 'Reporting', desc: 'You get a clear view of what is driving clicks, leads, and conversions.' },
    ],
    faqs: [
      { q: 'Do you run ads only on social media?', a: 'This page focuses on social campaigns, but we also support broader digital advertising through other services.' },
      { q: 'Can you manage small ad budgets?', a: 'Yes. We can structure campaigns for smaller budgets and focus on the highest-priority outcomes first.' },
      { q: 'How quickly can campaigns go live?', a: 'That depends on creative readiness and tracking setup, but many campaigns can launch quickly once assets are approved.' },
    ],
    relatedLinks: [
      { label: 'Social Media Handling', href: '/social-media-handling' },
      { label: 'Facebook Marketing', href: '/facebook-marketing' },
      { label: 'Meta Ads', href: '/meta-ads' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'seo-blog-writing': {
    slug: 'seo-blog-writing',
    title: 'SEO Blog Writing Services',
    metaTitle: 'SEO Blog Writing Services in Gujarat | Veyber',
    description:
      'SEO blog writing services for businesses in Gujarat, combining keyword targeting, content structure, and brand messaging to grow organic traffic.',
    keywords: [
      'SEO blog writing Gujarat',
      'blog writing services Vadodara',
      'SEO content writing Gujarat',
      'organic traffic content strategy',
    ],
    parentTitle: 'Content Marketing',
    parentHref: '/content-marketing',
    badge: 'SEO Blog Writing | Gujarat',
    highlight:
      'Publish blogs that are built to rank, answer customer questions, and support steady organic traffic growth.',
    icon: 'article',
    benefits: [
      'More search-focused content on your website',
      'Better topical authority for your niche',
      'Stronger keyword coverage over time',
      'Content that supports awareness and conversions',
    ],
    idealFor: ['Service companies', 'Ecommerce brands', 'B2B businesses', 'Growing websites'],
    cards: [
      {
        title: 'Keyword-Led Topics',
        desc: 'Each article starts with the right intent and search opportunity.',
        items: ['Topic research', 'Keyword targeting', 'Search intent mapping', 'Cluster planning'],
      },
      {
        title: 'Structured Writing',
        desc: 'We write for humans first while keeping the page SEO-ready.',
        items: ['Readable headings', 'Clear hooks', 'Natural keyword use', 'Conversion-friendly flow'],
      },
      {
        title: 'Publishing Support',
        desc: 'Content is prepared for smoother publishing and internal linking.',
        items: ['Meta suggestions', 'CTA placement', 'Internal link ideas', 'Update recommendations'],
      },
    ],
    process: [
      { label: 'Research', desc: 'We identify the blog opportunities with the best traffic and business value.' },
      { label: 'Outline', desc: 'A keyword-aware structure is created before writing begins.' },
      { label: 'Writing', desc: 'We produce informative, brand-aligned content designed for clarity and ranking.' },
      { label: 'SEO Review', desc: 'Headings, search intent, links, and on-page cues are tightened before delivery.' },
      { label: 'Iteration', desc: 'Performance can guide refreshes, new clusters, and future blog planning.' },
    ],
    faqs: [
      { q: 'Do your blogs include SEO optimization?', a: 'Yes. We align topics, headings, keyword use, and structure with SEO goals.' },
      { q: 'Can you write blogs for niche industries?', a: 'Yes. We research the niche, audience, and language before drafting content.' },
      { q: 'How often should blogs be published?', a: 'That depends on your goals, but consistency matters more than volume alone.' },
    ],
    relatedLinks: [
      { label: 'Content Marketing', href: '/content-marketing' },
      { label: 'Website Copywriting', href: '/website-copywriting' },
      { label: 'Keyword Strategy', href: '/keyword-strategy' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'website-copywriting': {
    slug: 'website-copywriting',
    title: 'Website Copywriting Services',
    metaTitle: 'Website Copywriting Services in Gujarat | Veyber',
    description:
      'Website copywriting services for Gujarat businesses, covering homepage copy, service pages, CTA strategy, and brand messaging.',
    keywords: [
      'website copywriting Gujarat',
      'website content writing Vadodara',
      'service page copywriting India',
      'conversion copywriting Gujarat',
    ],
    parentTitle: 'Content Marketing',
    parentHref: '/content-marketing',
    badge: 'Website Copywriting | Gujarat',
    highlight:
      'Turn your website into a clearer sales tool with messaging that explains your value and moves visitors toward action.',
    icon: 'web',
    benefits: [
      'Clearer brand messaging on key pages',
      'Stronger conversion-focused page structure',
      'Better alignment between design and copy',
      'More confidence for visitors ready to buy',
    ],
    idealFor: ['New websites', 'Website redesigns', 'Service companies', 'Brand refresh projects'],
    cards: [
      {
        title: 'Core Page Copy',
        desc: 'We shape the pages visitors rely on most when evaluating your business.',
        items: ['Homepage copy', 'Service page copy', 'About page messaging', 'CTA refinement'],
      },
      {
        title: 'Messaging Framework',
        desc: 'Your site needs consistent language that supports trust and clarity.',
        items: ['Brand tone', 'Offer positioning', 'Headline direction', 'Value proposition work'],
      },
      {
        title: 'Conversion Support',
        desc: 'Copy is written to reduce confusion and improve action-taking.',
        items: ['Lead form prompts', 'Trust sections', 'FAQ copy', 'Section sequencing'],
      },
    ],
    process: [
      { label: 'Discovery', desc: 'We learn the product, audience, offer, and objections your website must address.' },
      { label: 'Message Design', desc: 'Headlines, positioning, and section logic are planned around conversions.' },
      { label: 'Drafting', desc: 'Copy is written for clarity, persuasion, and brand consistency.' },
      { label: 'Refinement', desc: 'We tighten readability, CTA flow, and message hierarchy.' },
      { label: 'Delivery', desc: 'You receive organized website copy ready for implementation or revision.' },
    ],
    faqs: [
      { q: 'Do you write copy for service pages?', a: 'Yes. Service page copywriting is one of the main use cases for this service.' },
      { q: 'Can you rewrite an existing website?', a: 'Yes. We can improve outdated messaging, page structure, and CTA clarity.' },
      { q: 'Does website copywriting help SEO too?', a: 'Yes. Strong site copy can support SEO when paired with keyword strategy and clear page structure.' },
    ],
    relatedLinks: [
      { label: 'Content Marketing', href: '/content-marketing' },
      { label: 'SEO Blog Writing', href: '/seo-blog-writing' },
      { label: 'Keyword Strategy', href: '/keyword-strategy' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'keyword-strategy': {
    slug: 'keyword-strategy',
    title: 'Keyword Strategy Services',
    metaTitle: 'Keyword Strategy Services in Gujarat | Veyber',
    description:
      'Keyword strategy services in Gujarat for websites and content teams that need cleaner targeting, content mapping, and SEO direction.',
    keywords: [
      'keyword strategy Gujarat',
      'SEO keyword research Vadodara',
      'content keyword planning Gujarat',
      'SEO strategy services India',
    ],
    parentTitle: 'Content Marketing',
    parentHref: '/content-marketing',
    badge: 'Keyword Strategy | Gujarat',
    highlight:
      'Build content and SEO around the right search terms instead of guessing what your audience is looking for.',
    icon: 'manage_search',
    benefits: [
      'Clearer SEO direction for future pages and blogs',
      'Less wasted effort on low-value content topics',
      'Better alignment between search intent and offers',
      'A stronger content roadmap for organic growth',
    ],
    idealFor: ['SEO campaigns', 'Content teams', 'New websites', 'Growing local businesses'],
    cards: [
      {
        title: 'Keyword Research',
        desc: 'We identify the terms that matter most for traffic and conversions.',
        items: ['Primary keywords', 'Long-tail terms', 'Intent grouping', 'Competitor checks'],
      },
      {
        title: 'Content Mapping',
        desc: 'Keywords are organized into pages, blogs, and clusters you can actually use.',
        items: ['Page mapping', 'Cluster building', 'Topic prioritization', 'Content sequencing'],
      },
      {
        title: 'SEO Direction',
        desc: 'The strategy becomes actionable instead of staying in a spreadsheet.',
        items: ['Quick-win targets', 'Internal link planning', 'Page opportunities', 'Growth recommendations'],
      },
    ],
    process: [
      { label: 'Audit', desc: 'We review your current site, content gaps, and search direction.' },
      { label: 'Research', desc: 'Relevant keywords are collected, grouped, and scored for business fit.' },
      { label: 'Prioritization', desc: 'We sort targets by intent, competition, and opportunity.' },
      { label: 'Mapping', desc: 'Keywords are assigned to landing pages, service pages, and blogs.' },
      { label: 'Execution Support', desc: 'You get a strategy that content and SEO work can follow immediately.' },
    ],
    faqs: [
      { q: 'Is keyword strategy only for blogs?', a: 'No. It helps service pages, landing pages, blogs, and broader site structure.' },
      { q: 'Can keyword strategy help a local business?', a: 'Yes. Local businesses often benefit from clearer service, city, and intent targeting.' },
      { q: 'Do you provide a content roadmap too?', a: 'Yes. We can connect keyword strategy directly to page and blog planning.' },
    ],
    relatedLinks: [
      { label: 'Content Marketing', href: '/content-marketing' },
      { label: 'SEO Blog Writing', href: '/seo-blog-writing' },
      { label: 'Website Copywriting', href: '/website-copywriting' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'digital-strategy': {
    slug: 'digital-strategy',
    title: 'Digital Strategy Consulting',
    metaTitle: 'Digital Strategy Consulting in Gujarat | Veyber',
    description:
      'Digital strategy consulting for businesses in Gujarat that need clearer channel planning, growth priorities, and execution direction.',
    keywords: [
      'digital strategy consulting Gujarat',
      'business strategy Vadodara',
      'growth consulting Gujarat',
      'digital business strategy India',
    ],
    parentTitle: 'Business Consulting',
    parentHref: '/business-consulting',
    badge: 'Digital Strategy | Gujarat',
    highlight:
      'Get a clearer digital roadmap that aligns your website, marketing, funnels, and business goals around practical growth.',
    icon: 'strategy',
    benefits: [
      'Better coordination across marketing channels',
      'Clearer priorities for growth investment',
      'Less confusion around what to improve first',
      'A stronger roadmap for digital execution',
    ],
    idealFor: ['Scaling businesses', 'Founders', 'Startups', 'Teams with unclear channel direction'],
    cards: [
      {
        title: 'Channel Planning',
        desc: 'We help define where to focus and why.',
        items: ['Website strategy', 'Lead funnel review', 'Channel selection', 'Priority planning'],
      },
      {
        title: 'Growth Direction',
        desc: 'Strategy needs to connect with revenue and operations, not just traffic.',
        items: ['Offer alignment', 'Acquisition planning', 'Retention ideas', 'Execution sequencing'],
      },
      {
        title: 'Decision Support',
        desc: 'You get clearer next steps for implementation and investment.',
        items: ['Roadmap creation', 'Opportunity review', 'Risk flags', 'Team guidance'],
      },
    ],
    process: [
      { label: 'Assessment', desc: 'We review the current digital ecosystem, goals, and bottlenecks.' },
      { label: 'Opportunity Mapping', desc: 'The best strategic levers are identified based on business stage and resources.' },
      { label: 'Roadmap Design', desc: 'We turn the strategy into prioritized actions and milestones.' },
      { label: 'Execution Guidance', desc: 'Teams get direction on where to focus first and how to measure progress.' },
      { label: 'Review', desc: 'The plan is refined as new data and business realities emerge.' },
    ],
    faqs: [
      { q: 'What does digital strategy consulting include?', a: 'It includes reviewing your channels, website, funnel, priorities, and growth opportunities to build a clearer plan.' },
      { q: 'Is this useful for startups?', a: 'Yes. Startups often benefit from sharper prioritization and channel focus early on.' },
      { q: 'Do you also help execute the strategy?', a: 'Yes. Veyber also offers implementation services across development, content, and marketing.' },
    ],
    relatedLinks: [
      { label: 'Business Consulting', href: '/business-consulting' },
      { label: 'Market Research', href: '/market-research' },
      { label: 'Brand Positioning', href: '/brand-positioning' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'market-research': {
    slug: 'market-research',
    title: 'Market Research Services',
    metaTitle: 'Market Research Services in Gujarat | Veyber',
    description:
      'Market research services in Gujarat to help businesses understand competitors, audience behavior, pricing signals, and growth opportunities.',
    keywords: [
      'market research Gujarat',
      'competitor analysis Vadodara',
      'business research services Gujarat',
      'market insights India',
    ],
    parentTitle: 'Business Consulting',
    parentHref: '/business-consulting',
    badge: 'Market Research | Gujarat',
    highlight:
      'Make business decisions with better information about competitors, customer behavior, and market positioning.',
    icon: 'query_stats',
    benefits: [
      'Better visibility into your competitive landscape',
      'Cleaner pricing and positioning decisions',
      'More confidence before launching campaigns or offers',
      'Research-backed business planning',
    ],
    idealFor: ['New ventures', 'Existing brands', 'Expansion planning', 'Offer validation'],
    cards: [
      {
        title: 'Competitor Analysis',
        desc: 'Understand how other players are winning attention and demand.',
        items: ['Offer review', 'Messaging analysis', 'Pricing review', 'Channel presence'],
      },
      {
        title: 'Audience Insights',
        desc: 'Research helps refine what customers care about before you invest more.',
        items: ['Customer concerns', 'Search behavior', 'Need patterns', 'Intent observations'],
      },
      {
        title: 'Opportunity Mapping',
        desc: 'We turn research into next-step recommendations you can act on.',
        items: ['Gap analysis', 'Differentiation ideas', 'Priority areas', 'Go-to-market notes'],
      },
    ],
    process: [
      { label: 'Scope Definition', desc: 'We define what market, offer, audience, or competitor problem needs clarity.' },
      { label: 'Research Collection', desc: 'Public data, competitor behavior, and observable customer patterns are analyzed.' },
      { label: 'Insight Review', desc: 'We identify the findings with the strongest business value.' },
      { label: 'Recommendation Build', desc: 'Insights are translated into practical guidance for positioning and growth.' },
      { label: 'Strategy Handoff', desc: 'The research feeds directly into marketing, offer, or business planning.' },
    ],
    faqs: [
      { q: 'Can market research help a small business?', a: 'Yes. It helps small businesses avoid assumptions and make clearer decisions about offers, pricing, and messaging.' },
      { q: 'Do you provide competitor analysis too?', a: 'Yes. Competitor analysis is one of the most useful parts of this service.' },
      { q: 'Is this only for launching new businesses?', a: 'No. Existing businesses use market research to refine offers, enter new segments, or improve strategy.' },
    ],
    relatedLinks: [
      { label: 'Business Consulting', href: '/business-consulting' },
      { label: 'Digital Strategy', href: '/digital-strategy' },
      { label: 'Brand Positioning', href: '/brand-positioning' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  'brand-positioning': {
    slug: 'brand-positioning',
    title: 'Brand Positioning Strategy',
    metaTitle: 'Brand Positioning Strategy in Gujarat | Veyber',
    description:
      'Brand positioning strategy services in Gujarat for businesses that need sharper messaging, differentiation, and market relevance.',
    keywords: [
      'brand positioning Gujarat',
      'brand strategy Vadodara',
      'business positioning services Gujarat',
      'messaging strategy India',
    ],
    parentTitle: 'Business Consulting',
    parentHref: '/business-consulting',
    badge: 'Brand Positioning | Gujarat',
    highlight:
      'Clarify what makes your brand different so your messaging, offers, and customer experience feel more focused and memorable.',
    icon: 'workspace_premium',
    benefits: [
      'Stronger differentiation in competitive markets',
      'Clearer messaging across website and campaigns',
      'More consistent brand communication',
      'Better alignment between value and audience expectations',
    ],
    idealFor: ['Growing brands', 'Rebrands', 'Startups', 'Businesses with unclear messaging'],
    cards: [
      {
        title: 'Positioning Review',
        desc: 'We identify where the current brand message feels weak or generic.',
        items: ['Brand audit', 'Message clarity', 'Offer framing', 'Trust signals'],
      },
      {
        title: 'Differentiation Strategy',
        desc: 'Your business needs a sharper reason for customers to choose it.',
        items: ['Value proposition', 'Audience fit', 'Market angle', 'Brand themes'],
      },
      {
        title: 'Messaging Support',
        desc: 'The new position is translated into practical messaging cues.',
        items: ['Headline direction', 'Tone guidance', 'CTA focus', 'Brand statement ideas'],
      },
    ],
    process: [
      { label: 'Brand Discovery', desc: 'We study the offer, audience, competitors, and current brand perception.' },
      { label: 'Positioning Analysis', desc: 'Gaps in clarity, differentiation, and communication are identified.' },
      { label: 'Strategic Framing', desc: 'We define the positioning angle that best supports trust and growth.' },
      { label: 'Messaging Development', desc: 'Core messaging and value statements are shaped for use across channels.' },
      { label: 'Application Guidance', desc: 'You leave with clearer brand direction for website, sales, and marketing work.' },
    ],
    faqs: [
      { q: 'What is brand positioning?', a: 'Brand positioning defines how your business should be understood and remembered in the market compared with competitors.' },
      { q: 'Can this help with website messaging too?', a: 'Yes. Positioning has a direct effect on website copy, headlines, and conversion clarity.' },
      { q: 'Is brand positioning only for large companies?', a: 'No. Small and growing businesses often benefit the most because strong positioning prevents generic messaging.' },
    ],
    relatedLinks: [
      { label: 'Business Consulting', href: '/business-consulting' },
      { label: 'Digital Strategy', href: '/digital-strategy' },
      { label: 'Website Copywriting', href: '/website-copywriting' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export function getSubservicePage(slug: string) {
  return subservicePages[slug];
}
