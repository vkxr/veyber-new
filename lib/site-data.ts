

export const whatsappHref =
  "https://wa.me/916355183655?text=Hi%20Veyber%2C%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20discuss%3F";

export const popupWhatsappHref =
  "https://wa.me/918141494618?text=Hi%20Veyber%2C%20I%27m%20interested%20in%20your%20Free%20GMB%20Setup%20offer.%20Please%20share%20the%20details.";

export const popupCallHref = 'tel:+916355183655';
export const popupCallLabel = '+91 6355183655';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const servicesDropdown = [
  {
    title: 'Core Digital Marketing',
    href: '/digital-marketing',
    icon: 'campaign',
    desc: 'SEO, Google Ads, Meta Ads',
    subLinks: [
      { label: 'SEO', href: '/seo' },
      { label: 'Google Ads', href: '/google-ads' },
      { label: 'Meta Ads', href: '/meta-ads' },
    ],
  },
  {
    title: 'Web Services',
    href: '/web-services',
    icon: 'code_blocks',
    desc: 'Web Dev, Hosting, DevOps',
    subLinks: [
      { label: 'Website Development', href: '/web-services/development' },
      { label: 'Website Hosting', href: '/web-services/hosting' },
      { label: 'DevOps & Deployment', href: '/web-services/devops' },
    ],
  },
  {
    title: 'Ecommerce Development',
    href: '/ecommerce-development',
    icon: 'shopping_cart',
    desc: 'Shopify, WooCommerce & custom sites',
    subLinks: [
      { label: 'Shopify Development', href: '/shopify-development' },
      { label: 'WooCommerce Development', href: '/woocommerce-development' },
      { label: 'Custom Ecommerce', href: '/custom-ecommerce-development' },
    ],
  },
  {
    title: 'Account Management',
    href: '/ecommerce-account-management',
    icon: 'storefront',
    desc: 'Amazon, Flipkart, Meesho handling',
    subLinks: [
      { label: 'Amazon Management', href: '/amazon-account-management' },
      { label: 'Flipkart Management', href: '/flipkart-account-management' },
      { label: 'Meesho Management', href: '/meesho-account-management' },
    ],
  },
  {
    title: 'Social Media Handling',
    href: '/social-media-handling',
    icon: 'share',
    desc: 'Instagram & Facebook marketing',
    subLinks: [
      { label: 'Instagram Management', href: '/social-media-handling#instagram-management' },
      { label: 'Facebook Marketing', href: '/social-media-handling#facebook-marketing' },
      { label: 'Ad Campaigns', href: '/social-media-handling#ad-campaigns' },
    ],
  },
  {
    title: 'Content Marketing',
    href: '/content-marketing',
    icon: 'edit_note',
    desc: 'SEO blog writing & strategy',
    subLinks: [
      { label: 'SEO Blog Writing', href: '/content-marketing#seo-blog-writing' },
      { label: 'Website Copywriting', href: '/content-marketing#website-copywriting' },
      { label: 'Keyword Strategy', href: '/content-marketing#keyword-strategy' },
    ],
  },
  {
    title: 'Business Consulting',
    href: '/business-consulting',
    icon: 'psychology',
    desc: 'Growth strategy & market research',
    subLinks: [
      { label: 'Digital Strategy', href: '/business-consulting#digital-strategy' },
      { label: 'Market Research', href: '/business-consulting#market-research' },
      { label: 'Brand Positioning', href: '/business-consulting#brand-positioning' },
    ],
  },
];

export const serviceRouteMatchers = [
  '/services',
  '/digital-marketing',
  '/seo',
  '/google-ads',
  '/meta-ads',
  '/web-services',
  '/web-services/development',
  '/web-services/hosting',
  '/web-services/devops',
  '/ecommerce-development',
  '/shopify-development',
  '/woocommerce-development',
  '/custom-ecommerce-development',
  '/account-management',
  '/ecommerce-account-management',
  '/amazon-account-management',
  '/flipkart-account-management',
  '/meesho-account-management',
  '/social-media-handling',
  '/content-marketing',
  '/business-consulting',
];

export const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Locations Index', href: '/service-locations' },
    ],
  },
  {
    title: 'Digital Marketing',
    links: [
      { label: 'Digital Marketing', href: '/digital-marketing' },
      { label: 'SEO', href: '/seo' },
      { label: 'Google Ads', href: '/google-ads' },
      { label: 'Meta Ads', href: '/meta-ads' },
    ],
  },
  {
    title: 'Web Services',
    links: [
      { label: 'Web Services', href: '/web-services' },
      { label: 'Website Development', href: '/web-services/development' },
      { label: 'Website Hosting', href: '/web-services/hosting' },
      { label: 'DevOps & Deployment', href: '/web-services/devops' },
    ],
  },
  {
    title: 'Ecommerce & Marketplace',
    links: [
      { label: 'Ecommerce Development', href: '/ecommerce-development' },
      { label: 'Shopify Development', href: '/shopify-development' },
      { label: 'WooCommerce Development', href: '/woocommerce-development' },
      { label: 'Custom Ecommerce Development', href: '/custom-ecommerce-development' },
      { label: 'Account Management', href: '/ecommerce-account-management' },
      { label: 'Amazon Account Management', href: '/amazon-account-management' },
      { label: 'Flipkart Account Management', href: '/flipkart-account-management' },
      { label: 'Meesho Account Management', href: '/meesho-account-management' },
    ],
  },
  {
    title: 'Social Media & Content',
    links: [
      { label: 'Social Media Handling', href: '/social-media-handling' },
      { label: 'Content Marketing', href: '/content-marketing' },
    ],
  },
  {
    title: 'Consulting & Legal',
    links: [
      { label: 'Business Consulting', href: '/business-consulting' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'Blog', href: '/blogs' },
      { label: 'Google My Business for Small Business in Gujarat', href: '/blogs/google-my-business-gujarat' },
    ],
  },
];

export const sitemapXmlRoutes = [
  '/',
  '/about',
  '/contact',
  '/contact-us',
  '/services',
  '/service-locations',
  '/digital-marketing',
  '/seo',
  '/google-ads',
  '/meta-ads',
  '/web-services',
  '/web-services/development',
  '/web-services/hosting',
  '/web-services/devops',
  '/ecommerce-development',
  '/shopify-development',
  '/woocommerce-development',
  '/custom-ecommerce-development',
  '/account-management',
  '/ecommerce-account-management',
  '/amazon-account-management',
  '/flipkart-account-management',
  '/meesho-account-management',
  '/social-media-handling',
  '/content-marketing',
  '/business-consulting',
  '/privacy-policy',
  '/terms-and-conditions',
  '/blogs',
  '/blogs/google-my-business-gujarat',
  '/digital-marketing-vadodara',
  '/digital-marketing-ahmedabad',
  '/digital-marketing-surat',
  '/digital-marketing-rajkot',
  '/sitemap',
];
