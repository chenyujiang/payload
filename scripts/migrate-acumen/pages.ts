import { h, p, pRuns, bullets } from './lexical'
import { TAGLINE, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, faqSection, ctaBanner } from './shared'

const IMG = (path: string) => `https://www.acumenonline.co.nz${path}`

type ColSize = 'oneThird' | 'half' | 'twoThirds' | 'full'
type Col = { size: ColSize; nodes: ReturnType<typeof h>[] | ReturnType<typeof p>[] | any[] }
type Section =
  | { type: 'content'; columns: Col[] }
  | { type: 'media'; url: string; alt: string }

export type PageDef = {
  slug: string
  title: string
  metaDescription: string
  heroType: 'none' | 'lowImpact' | 'mediumImpact' | 'highImpact'
  heroNodes: any[]
  heroImageUrl?: string
  heroAlt?: string
  heroLinks?: { label: string; url: string; appearance?: 'default' | 'outline' }[]
  sections: Section[]
  cta?: { heading: string; body: string; label: string; url: string }
}

const pillars = (items: { title: string; body: string }[]): Col[] =>
  items.map((i) => ({ size: 'oneThird' as ColSize, nodes: [h(3, i.title), p(i.body)] }))

const linkedPillars = (items: { title: string; body: string; url: string }[]): Col[] =>
  items.map((i) => ({
    size: 'oneThird' as ColSize,
    nodes: [
      h(3, i.title),
      p(i.body),
      pRuns([{ text: 'Learn more →', link: { url: i.url } }]),
    ],
  }))

// ---------------------------------------------------------------------------

const home: PageDef = {
  slug: 'home',
  title: 'Home',
  metaDescription:
    "New Zealand's Integrated Web Solutions Partner — connecting business systems, websites and customer experiences into one intelligent digital ecosystem.",
  heroType: 'lowImpact',
  heroNodes: [
    h(1, "New Zealand's Integrated Solutions Partner"),
    p(
      'Connecting your business systems, websites and customer experiences into one intelligent digital ecosystem.',
    ),
    p(
      'Acumen Online designs and delivers integrated web solutions that streamline business processes, automate workflows and connect the systems your business depends on — from ERP, CRM and HR platforms to customer portals, eCommerce, membership solutions and custom web applications.',
    ),
  ],
  heroLinks: [{ label: 'Book a Demo Now', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'A New Zealand-Owned Technology Partner for Modern Businesses'),
            p(
              'We design and deliver scalable integrated solutions that simplify complexity, drive performance, and grow with your business. Our dedicated team brings decades of combined experience across enterprise platforms, custom integrations, and cloud-first solutions.',
            ),
          ],
        },
        ...linkedPillars([
          {
            title: 'ERP',
            body: 'We develop integrations for Microsoft Dynamics 365 Business Central — localised custom extensions, automated workflows, and advanced reporting that scale with your growth.',
            url: '/services-implementation-business-central',
          },
          {
            title: 'eCommerce',
            body: 'Our expertise spans nopCommerce, Shopify and our own Alpha Commerce platform, connecting your storefront with ERP systems like Business Central and Accredo.',
            url: '/services',
          },
          {
            title: 'HR & Payroll',
            body: 'A referring partner for Employment Hero — everything you need to manage your workforce, from Hiring to HR, Payroll and Benefits.',
            url: '/our-partners-hr-payroll',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'A Word from the Technical Director'),
            h(3, 'Building Smarter Connections for New Zealand Business'),
            p(
              "At Acumen Online, we've always believed that software should adapt to your business — not the other way around. Today, we're proud to offer a suite of services that go far beyond basic development: from our flagship eCommerce platform Alpha Commerce, to deep integrations with Microsoft Dynamics 365 Business Central, Accredo, Shopify, and nopCommerce.",
            ),
            p(
              'Our team — spread across New Zealand — brings not only technical expertise, but a deep understanding of how local businesses operate. We approach every project with the same mindset: listen first, build second.',
            ),
            p('Warm regards, Jevan Potgieter | Director'),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Trusted by New Zealand Businesses'),
            p('Big Save · Sopers Mac · JA Russell · Windscreens Direct · Nichols · Produce Co · Ruralco'),
          ],
        },
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(
    "Don't wait",
    'Get in touch now to book a demo and see how we can help you move your business to the next level',
  ),
}

const about: PageDef = {
  slug: 'about-us',
  title: 'About Us',
  metaDescription:
    'Since 2016, Acumen Online has empowered NZ businesses with integrated ERP, eCommerce and web solutions.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/about-us.png'),
  heroAlt: 'Acumen Online team',
  heroNodes: [h(1, 'Innovation with Purpose and Precision Integration'), p(TAGLINE)],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Who We Are at Acumen Online'),
            p(
              'Acumen Online is a software development firm focused on the implementation and development of business solutions. Founded in 2016, we are recognised for integrating e-commerce systems with on-premise ERP platforms.',
            ),
            p(
              'Our team of business consultants and software developers deliver Microsoft Dynamics 365 Business Central, Shopify, and NopCommerce implementation, plus custom integration and plugin development.',
            ),
          ],
        },
      ],
    },
    { type: 'media', url: IMG('/Portals/0/Images/about-1.jpg'), alt: 'Acumen Online technology' },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Why Choose Acumen Online')] },
        ...pillars([
          {
            title: 'Technology',
            body: 'We build with the latest technologies and embrace the flexibility of open-source platforms like DotNetNuke and nopCommerce — delivering scalable, customizable solutions without vendor lock-in.',
          },
          {
            title: 'Education',
            body: 'Our certified professionals ensure every solution is built with precision, reliability, and industry-standard excellence.',
          },
          {
            title: 'Agile',
            body: 'We run SCRUM with discipline and purpose, delivering iterative value, continuous improvement, and transparent collaboration.',
          },
          {
            title: 'Track Record',
            body: 'We maintain long-standing client relationships — some spanning many years.',
          },
        ]),
      ],
    },
    { type: 'media', url: IMG('/Portals/0/Images/about-2.jpg'), alt: 'Acumen Online at work' },
  ],
  cta: ctaBanner(),
}

const contact: PageDef = {
  slug: 'contact',
  title: 'Contact',
  metaDescription: 'Get in touch with Acumen Online — sales, support, and office locations.',
  heroType: 'lowImpact',
  heroNodes: [h(1, 'Contact Acumen Online')],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'half',
          nodes: [
            h(2, 'Sales Enquiries'),
            pRuns([{ text: `Email us at ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.` }]),
            h(2, 'Support Enquiries'),
            pRuns([
              { text: 'Visit our ' },
              { text: 'support portal', link: { url: 'https://support.acumenonline.co.nz/', newTab: true } },
              { text: ' or email support@acumenonline.co.nz.' },
            ]),
          ],
        },
        {
          size: 'half',
          nodes: [
            h(2, 'Visit Our Offices'),
            p(`Auckland (Head Office): ${CONTACT_ADDRESS}`),
            p('Wellington'),
          ],
        },
      ],
    },
  ],
}

const servicesHub: PageDef = {
  slug: 'services',
  title: 'Services',
  metaDescription: 'Implementation, development and testing services for Business Central, eCommerce and more.',
  heroType: 'lowImpact',
  heroNodes: [h(1, 'Services'), p(TAGLINE)],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Implementation')] },
        ...linkedPillars([
          {
            title: 'Business Central',
            body: 'Microsoft Dynamics 365 Business Central implementation.',
            url: '/services-implementation-business-central',
          },
          {
            title: 'NopCommerce',
            body: 'nopCommerce development & implementation services.',
            url: '/services-implementation-nopcommerce',
          },
          {
            title: 'Shopify',
            body: 'Shopify development & integration services.',
            url: '/services-implementation-shopify',
          },
          {
            title: 'Alpha Commerce',
            body: 'Our own fully customizable eCommerce platform.',
            url: '/services-implementation-alpha-commerce',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Development')] },
        ...linkedPillars([
          {
            title: 'ERP Development',
            body: 'Custom Business Central extensions & customer portals.',
            url: '/services-development-erp-development',
          },
          {
            title: 'Web Development',
            body: 'High-converting business websites and eCommerce builds.',
            url: '/services-development-web-development',
          },
          {
            title: 'Mobile Development',
            body: 'Mobile-first apps for Alpha Commerce and B2B portals.',
            url: '/services-development-mobile-development',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Testing')] },
        ...linkedPillars([
          {
            title: 'BC Wave Upgrades',
            body: 'Seamless Business Central Wave upgrade testing, tested with confidence.',
            url: '/services-testing-bc-wave-upgrades',
          },
        ]),
      ],
    },
  ],
  cta: ctaBanner(),
}

const bcImplementation: PageDef = {
  slug: 'services-implementation-business-central',
  title: 'Microsoft Dynamics 365 Business Central Implementation',
  metaDescription: 'Microsoft Dynamics 365 Business Central implementation experts in New Zealand.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/BizCentral-laptop.png'),
  heroAlt: 'Business Central on laptop',
  heroNodes: [
    h(1, 'Microsoft Dynamics 365 Business Central Implementation in New Zealand'),
    p(
      'Improve productivity, streamline processes and enjoy unmatched visibility. Acumen Consulting can deliver a tailor-made solution to truly empower your business.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    { type: 'media', url: IMG('/Portals/0/Images/BizCentral-montage1.png'), alt: 'Business Central features' },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Business Central Implementation for the Future of Your Business'),
            p(
              'Business Central is next-generation cloud-based software that grows beyond the limits of basic business software and integrates with your existing infrastructure and Office 365.',
            ),
          ],
        },
        ...pillars([
          {
            title: 'Sell Smarter',
            body: 'Resource and workload visibility, plus faster quoting via Outlook integration.',
          },
          {
            title: 'On-Time Projects',
            body: 'Real-time resource, budget and timing data, with advanced reporting and job costing.',
          },
          {
            title: 'Accurate Financials',
            body: 'Rely on superior accuracy and faster reporting with Power BI dashboards and end-to-end data connectivity.',
          },
          {
            title: 'Secure Supply Chain',
            body: 'Supplier visibility, automatic stock management and reorder optimisation.',
          },
          {
            title: 'Optimised Operations',
            body: 'Manufacturing and warehouse optimisation, complete stock tracking and order fulfilment.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'What is Microsoft Dynamics 365 Business Central?'),
            p(
              'Business Central evolved from Dynamics NAV — a platform we have implemented since 2006 — retaining familiar functionality while adding a powerful Software as a Service (SaaS) model and modern cloud technology.',
            ),
          ],
        },
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(),
}

const nopCommerce: PageDef = {
  slug: 'services-implementation-nopcommerce',
  title: 'nopCommerce Development & Implementation',
  metaDescription: 'nopCommerce development & implementation services in New Zealand.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/main.webp'),
  heroAlt: 'nopCommerce',
  heroNodes: [
    h(1, 'nopCommerce Development & Implementation Services in New Zealand'),
    p(
      'We guide businesses through NopCommerce implementation — custom theme development, payment gateway integration, ERP integration, and website migration.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'A Platform Built for Modern Store Owners'),
            p(
              'nopCommerce is open-source and pluggable, with all enterprise features free — no transaction or hidden fees — and new versions shipping every 6–7 months. It offers multi-store, multi-vendor, advanced SEO, loyalty tools, one-page checkout, multi-currency and international payments, e-shipping, tax services and GDPR/EU compliance.',
            ),
            ...bullets([
              '15 years of experience',
              '60,000+ live shops',
              '10,000+ new stores per year',
              '150+ partners across 40+ countries',
              '800+ integrations',
              '350,000+ community members',
              '1,500,000+ downloads',
              'PCI DSS compliant',
            ]),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Solutions by Business Size')] },
        ...pillars([
          {
            title: 'Small & Medium Business',
            body: 'Quick launch and scaling, built-in payment/shipment integration, warehouse management, marketing/SEO tools and mobile-friendly stores.',
          },
          {
            title: 'Enterprise Business',
            body: 'Multi-vendor/multi-store (B2B/B2C), enterprise-grade performance, and unlimited customization.',
          },
          {
            title: 'Global Business',
            body: 'GDPR support, multi-currency/multi-language, regional tax compliance and international store management.',
          },
        ]),
      ],
    },
    faqSection(),
  ],
  cta: {
    heading: 'See it in action',
    body: 'Check out the demo, or read more about nopCommerce.',
    label: 'Check out the demo',
    url: 'https://nop-commerce.acumenonline.co.nz/',
  },
}

const shopify: PageDef = {
  slug: 'services-implementation-shopify',
  title: 'Shopify Development & Integration',
  metaDescription: 'Shopify development & integration services in New Zealand.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/story.webp'),
  heroAlt: 'Shopify development',
  heroNodes: [
    h(1, 'Shopify Development & Integration Services in New Zealand'),
    p('Shopify without the learning pitfalls.'),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Our Mission: Helping NZ Businesses Succeed with Shopify'),
            p(
              'As a Shopify Partner, we provide store design, development, project management, and technical integrations connecting Shopify with ERP systems like Business Central and Accredo, plus custom apps and themes.',
            ),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Sell Here, There, and Everywhere')] },
        ...pillars([
          {
            title: 'In-Person Point of Sale',
            body: 'Sync offline and online sales via Shopify POS.',
          },
          {
            title: 'Publish Across Channels',
            body: 'Multichannel integration keeps every storefront in sync.',
          },
          {
            title: 'The World’s Best Checkout',
            body: 'Fast, customizable Shopify Checkout, powered by Shop Pay.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Ready to Elevate Your Business with Shopify Plus?'),
            p(
              'Shopify Plus is a customizable enterprise solution offering a scalable, robust platform for high-volume businesses: customizable checkout with Shop Pay, B2B automation via Shopify Flow, Shopify Audiences, 24/7 dedicated tech support, and duties/import tax calculation via Shopify Markets.',
            ),
          ],
        },
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(),
}

const alphaCommerceImplementation: PageDef = {
  slug: 'services-implementation-alpha-commerce',
  title: 'Alpha Commerce Implementation',
  metaDescription: 'Alpha Commerce implementation & eCommerce solutions in New Zealand.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/main.webp'),
  heroAlt: 'Alpha Commerce',
  heroNodes: [
    h(1, 'About Alpha Commerce Implementation & eCommerce Solutions'),
    p(
      'When your eCommerce requirements go beyond a standard off-the-shelf solution, the Acumen-developed eCommerce solution might be what you need — supporting B2C, B2B, or hybrid commerce without platform restrictions.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Supported ERP Systems')] },
        ...pillars([
          {
            title: 'Business Central',
            body: 'Full module integration — Sales, Receivables, and Inventory.',
          },
          {
            title: 'Accredo',
            body: 'Proven accounting and business management software for growing NZ companies.',
          },
          {
            title: 'Propella',
            body: 'Windows-based financial, stock, distribution and job-costing system.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'half',
          nodes: [
            h(2, 'B2B Features'),
            ...bullets([
              'Account management with balance/credit-limit visibility',
              'Document access — invoices, credit memos, shipping reports',
              'Role-based access by location/employee level',
              'Self-hosted, Acumen-hosted, or third-party hosted',
              'Sub-portal capability for white-label reseller sites',
            ]),
          ],
        },
        {
          size: 'half',
          nodes: [
            h(2, 'B2C Features'),
            ...bullets([
              'SEO — URL rewriting and meta tag control',
              'Payment via DPS, PayPal, or Google Checkout',
              'Upsell suggestions ("customers who bought")',
              'Back-end ERP integration',
            ]),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'ERP Integration Model'),
            p(
              'Data is polled from your ERP system to our custom ERP manager, which feeds the e-commerce website — so if the connection to your ERP system goes down, your website does not. Orders sync automatically to inventory, eliminating manual entry.',
            ),
          ],
        },
      ],
    },
  ],
  cta: {
    heading: 'See it in action',
    body: 'Check out the demo of Alpha Commerce.',
    label: 'Check out the demo',
    url: 'https://demo.acumenonline.co.nz/',
  },
}

const erpDevelopment: PageDef = {
  slug: 'services-development-erp-development',
  title: 'ERP Development',
  metaDescription: 'ERP development services — Business Central portals and Alpha Commerce integration.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/B2B-Portal-product-catalogue-1536x1076.png'),
  heroAlt: 'B2B portal product catalogue',
  heroNodes: [h(1, 'Innovative ERP Development Solutions with Seamless Integration'), p(TAGLINE)],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Customer Portal Development for Business Central'),
            p(
              'A portal for customers to view invoices and statements, pay open invoices by credit card, and review and accept quotes — all within Business Central.',
            ),
          ],
        },
      ],
    },
    { type: 'media', url: IMG('/Portals/0/Images/B2C-Alpha-Commerce-Shop-1536x1011.png'), alt: 'Alpha Commerce shop' },
    {
      type: 'content',
      columns: [
        {
          size: 'half',
          nodes: [
            h(2, 'Alpha Commerce Development & Integration'),
            p(
              'A customizable eCommerce platform unifying CMS, marketing, and commerce — with direct Accredo ERP integration, near real-time sync, DotNetNuke CMS hosting, and starter templates.',
            ),
          ],
        },
        {
          size: 'half',
          nodes: [
            h(2, 'Shopify Integration with Accredo ERP'),
            p('A purpose-built integration between Shopify and the Accredo API for rapid deployment.'),
          ],
        },
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(),
}

const webDevelopment: PageDef = {
  slug: 'services-development-web-development',
  title: 'Web Development',
  metaDescription: 'Custom web development for high-converting business websites.',
  heroType: 'lowImpact',
  heroNodes: [
    h(1, 'Custom Web Development for High-Converting Business Websites'),
    p(
      'From full-scale B2B and B2C platforms to streamlined self-service portals, we build and extend eCommerce solutions that integrate and scale — including our proprietary Alpha Commerce framework.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'eCommerce Development & Integration Services')] },
        ...pillars([
          {
            title: 'Alpha Commerce',
            body: 'Comes with everything you need — change the colours and look and feel to match your brand, then focus on the products.',
          },
          {
            title: 'Shopify',
            body: 'As a Shopify Partner we assist from initial setup through to ERP integration, or support your own team or preferred partner.',
          },
          {
            title: 'Power Platform',
            body: 'Do more with less using low-code tools — Power BI, Power Apps, Power Automate and Power Apps Portals.',
          },
          {
            title: 'nopCommerce',
            body: 'Custom nopCommerce development, ensuring seamless integrations, optimised performance and tailored features.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Why Choose Acumen Online as Your Web Development Partner')] },
        ...pillars([
          {
            title: 'Product Selection',
            body: 'We bring different skill sets, experiences, and market knowledge, helping identify blind spots and opportunities you might have missed.',
          },
          {
            title: 'Efficient Project Management',
            body: 'A sizable project needs a partner with the experience to deliver it, with ongoing training and support as a valuable long-term touchpoint.',
          },
          {
            title: 'Quality Assurance & Launch Support',
            body: 'We test for performance, security, cross-browser/device compatibility, backend processes, payment processing, tax calculations and shipping costs.',
          },
        ]),
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(),
}

const mobileDevelopment: PageDef = {
  slug: 'services-development-mobile-development',
  title: 'Mobile Development',
  metaDescription: 'Mobile app development with a mobile-first design strategy.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/mobile.png'),
  heroAlt: 'Mobile app mockup',
  heroNodes: [
    h(1, 'Innovation Using a Mobile-First Design Strategy'),
    p(
      'Nearly half of all web traffic — 48.92% — comes from smartphones. Desktop-first designs adapted for mobile often cause cramped layouts, difficult navigation and performance issues.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Enable Anywhere, Anytime Ordering with Mobile Apps'),
            p(
              'We build mobile apps for Alpha Commerce and B2B Portals to expand accessibility and boost engagement.',
            ),
          ],
        },
        ...pillars([
          {
            title: 'Design & Branding',
            body: 'Customize branding to match your existing eCommerce solution, or redesign completely.',
          },
          {
            title: 'Infinite Reach',
            body: 'Mobile-exclusive marketing, promotions, and sales via a user-friendly ordering interface.',
          },
          {
            title: 'Feature Rich',
            body: 'Push notifications, location-based alerts, self-checkout, and custom functions.',
          },
          {
            title: 'Everything at Your Fingertips',
            body: 'Quick access to essential information via intuitive navigation.',
          },
        ]),
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(),
}

const bcWaveUpgrades: PageDef = {
  slug: 'services-testing-bc-wave-upgrades',
  title: 'Business Central Wave Upgrades',
  metaDescription: 'Seamless Business Central Wave upgrades, tested with confidence.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG(
    '/Portals/0/Images/people-testing-software-fixing-bugs-hardware-device-application-test-it-service-concept-vector-illustration-flat_186332-982.jpg',
  ),
  heroAlt: 'Software testing illustration',
  heroNodes: [
    h(1, 'Seamless Business Central Wave Upgrades, Tested with Confidence'),
    p(
      'We reduce the resource burden and maintain system resilience for Business Central environments — without requiring additional hires.',
    ),
  ],
  heroLinks: [{ label: 'Book a Testing Consultation', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Core Testing Services')] },
        ...pillars([
          {
            title: 'Updates & Upgrade Testing',
            body: 'Enterprise-grade practices and scenario-based testing to ensure Business Central functions properly after updates.',
          },
          {
            title: 'Regression Testing',
            body: 'Defines test scenarios for critical processes and iterates existing test cases to confirm no degradation from Wave releases.',
          },
          {
            title: 'End-to-End Integration Testing',
            body: 'Simulates authentic user workflows end to end — UI, backend services, databases, and external integrations.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Additional Testing Services'),
            ...bullets([
              'User Acceptance Testing',
              'Performance Testing',
              'Compatibility Testing across platforms, browsers and devices',
              'eCommerce and mobile app testing',
            ]),
          ],
        },
      ],
    },
  ],
  cta: { ...ctaBanner('Book a Testing Consultation'), label: 'Book a Testing Consultation' },
}

const applicationsHub: PageDef = {
  slug: 'applications',
  title: 'Applications',
  metaDescription: 'Alpha Commerce, Solution & Test Manager, and Microsoft Power Platform.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/AlphaCommerce-Hero2.png'),
  heroAlt: 'Acumen Online applications',
  heroNodes: [h(1, 'Innovation with Purpose. Integration with Precision'), p(TAGLINE)],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Alpha Commerce'),
            p('When Standard eCommerce Falls Short, We Build What You Need.'),
            p(
              'Alpha Commerce is our fully customizable eCommerce platform, purpose-built for businesses that demand more than out-of-the-box solutions. Built on the powerful DNN framework, it adapts to your unique business processes and scales with your growth, with seamless integration to Business Central, Accredo, and Propella.',
            ),
            pRuns([{ text: 'Learn more →', link: { url: '/applications-alpha-commerce' } }]),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Solution & Test Manager'),
            p('Stay Ahead of Every Update. Test with Confidence.'),
            p(
              'Systems like Business Central update frequently, often without warning. Solution & Test Manager is a powerful extension that helps you document business processes directly within BC, capture real-world scenarios, create themed test scripts, streamline test execution, and onboard new users with real process walkthroughs.',
            ),
            pRuns([{ text: 'Learn more →', link: { url: '/applications-solman' } }]),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Business Central Banking'),
            p('Seamless EFT & Bank Statement Processing — Tailored for New Zealand.'),
            p(
              "We've extended Business Central's Data Exchange Framework with a localized NZ banking extension: extra fields and logic for NZ banking standards, EFT payment file export compatible with all major NZ banks, and easy bank statement import for reconciliation.",
            ),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Microsoft Power Platform'),
            p(
              'Empower your organisation by building apps, automating workflows, and harnessing AI — with enterprise-grade governance and over 1000 Power Platform connectors.',
            ),
            pRuns([{ text: 'Learn more →', link: { url: '/applications-power-platform' } }]),
          ],
        },
      ],
    },
  ],
  cta: ctaBanner(),
}

const alphaCommerceApp: PageDef = {
  slug: 'applications-alpha-commerce',
  title: 'Alpha Commerce',
  metaDescription: 'Alpha Commerce eCommerce platform & ERP integration solution.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/main.webp'),
  heroAlt: 'Alpha Commerce platform',
  heroNodes: [
    h(1, 'Alpha Commerce eCommerce Platform & ERP Integration Solution'),
    p(
      'Developed on the open-source DNN platform for customers who need more than standard eCommerce offerings — full customization to your specific business requirements is the key differentiator.',
    ),
  ],
  heroLinks: [
    { label: 'Check out the demo', url: 'https://demo.acumenonline.co.nz/' },
    { label: 'Contact Us', url: '/contact', appearance: 'outline' },
  ],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Supported ERP Systems')] },
        ...pillars([
          {
            title: 'Business Central',
            body: 'Fully integrated into your back-end systems, with all main modules (Sales & Receivables, Inventory) connected.',
          },
          {
            title: 'Accredo',
            body: 'Proven accounting and business management software purpose-designed for growing New Zealand companies.',
          },
          {
            title: 'Propella',
            body: 'Windows-based, full-featured management package covering financials, stock, distribution, manufacturing, rentals and job costing.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'half',
          nodes: [
            h(2, 'B2B eCommerce'),
            ...bullets([
              'Total account management — balances, credit limits, trade point balances, recurring payments',
              'Integrated custom reward modules',
              'Sub-portals for independent site copies',
              'Role-based security and permissions',
            ]),
          ],
        },
        {
          size: 'half',
          nodes: [
            h(2, 'B2C eCommerce'),
            p(
              'Cart integrates directly with your backend ERP; data polling prevents downtime if the office connection fails.',
            ),
            ...bullets([
              'SEO — friendly URL rewriting, individual page meta tags, full control over image names',
              'Payment via DPS, PayPal, Google Checkout, or custom providers',
              'Upsell suggestions ("customers who bought")',
              'Automatic high-margin product prioritisation',
            ]),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Global Item Syndication & ERP Integration'),
            p(
              'A cloud repository of up-to-date SKU and image info links to your ERP and stock via a secure encrypted API — backend updates reflect instantly across every connected website. Data is polled from your ERP to our custom ERP manager, so if the ERP connection goes down, your website does not. Web orders immediately deduct from available stock, preventing overselling across channels.',
            ),
          ],
        },
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(),
}

const powerPlatform: PageDef = {
  slug: 'applications-power-platform',
  title: 'Power Platform',
  metaDescription: 'Microsoft Power Platform services for business innovation.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/Artboard-2-100-1.webp'),
  heroAlt: 'Microsoft Power Platform',
  heroNodes: [
    h(1, 'Microsoft Power Platform Services for Business Innovation'),
    p(
      'We help you empower your entire organization by building apps, automating workflows, and harnessing AI — with enterprise-grade governance and over 1000 Power Platform connectors to unify your data and accelerate innovation.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Why Choose Microsoft Power Platform')] },
        ...pillars([
          {
            title: 'Cloud Ecosystem',
            body: 'Connect your solutions to Microsoft Fabric, Azure, Microsoft 365, and Dynamics 365.',
          },
          {
            title: 'AI Capabilities',
            body: 'Speed up app development, automate workflows, visualize data, and reduce repetitive tasks with AI-powered tools.',
          },
          {
            title: 'Enterprise-Grade Solutions',
            body: 'Enables developers to create scalable solutions rapidly.',
          },
          {
            title: 'Intelligent Chat Experiences',
            body: 'Leverages conversational AI for improved interactions.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Microsoft Power Platform Products')] },
        ...pillars([
          { title: 'Power Pages', body: 'Create websites and customer solutions fast while securely managing data.' },
          { title: 'Power Apps', body: 'Build and launch professional-grade apps and automate workflows without additional coding.' },
          { title: 'Power Automate', body: 'Boost productivity by automating repetitive tasks and workflows.' },
          { title: 'Power BI', body: 'Reporting and real-time organizational insights.' },
          { title: 'Copilot Studio', body: 'Transform customer and employee experiences with custom copilots.' },
        ]),
      ],
    },
  ],
  cta: ctaBanner(),
}

const solman: PageDef = {
  slug: 'applications-solman',
  title: 'Solution & Test Manager (Solman)',
  metaDescription: 'A custom Business Central extension for documenting processes and managing test cycles.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/Create a tall vertic1.png'),
  heroAlt: 'Solution & Test Manager',
  heroNodes: [
    h(1, 'Acumen Solution & Test Manager'),
    p('A World of Opportunities – Are You Prepared?'),
    p(
      'A custom-developed Microsoft Business Central extension acting as a centralized repository for documenting business processes and test scenarios across test cycles.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'How It Works')] },
        ...pillars([
          {
            title: 'Installed in Your BC Environment',
            body: 'Deploys within Business Central Online, with permission-set-controlled access for contributors and testers.',
          },
          {
            title: 'For Analysts, Testers and Super Users',
            body: 'Any team member can access; testers can propose scenario additions subject to approval.',
          },
          {
            title: 'Four-Level Drill Down',
            body: 'System modules → processes → scenarios → specific scenario steps, with enrichment at each tier.',
          },
          {
            title: 'Central Process Repository',
            body: 'Consolidates processes across systems for regression testing without scattered documentation.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Features & Functions')] },
        ...pillars([
          { title: 'Business Process Documentation', body: 'Centralizes processes with uploadable docs, notes and repo links.' },
          { title: 'Scenarios with Steps', body: 'Defined scenarios and steps for knowledge transfer and testing.' },
          { title: 'Test Management', body: 'Generates test scripts per cycle with visible results.' },
          { title: 'Project Plan', body: 'Risk register and Gantt chart, exportable to Excel.' },
          { title: 'Deployment Management', body: 'Documents deployments with requirements and approvals.' },
        ]),
      ],
    },
  ],
  cta: ctaBanner(),
}

const solver: PageDef = {
  slug: 'our-partners-solver',
  title: 'Solver',
  metaDescription: 'Solver — AI-powered extended financial planning & analysis (xFP&A) for Business Central.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/Solver_Product_Pillar_Fan.jpg'),
  heroAlt: 'Solver product suite',
  heroNodes: [
    h(1, 'Accelerate Intelligent Decisions'),
    p(
      'Transform your organization with an extended financial planning and analysis (xFP&A) solution that is efficient, flexible, accurate, and driven by an AI-focused strategy.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'half',
          nodes: [
            h(2, 'Who We Are'),
            p(
              'Solver is an AI-powered xFP&A solution that helps mid-market finance and management teams accelerate intelligent decisions. Since 1996, Solver has empowered organizations worldwide with actionable insights, delivered through a network of trusted partners.',
            ),
          ],
        },
        {
          size: 'half',
          nodes: [
            h(2, 'What We Do'),
            p(
              'Patented QuickStart technology gets teams up and running in days, not months — consolidating data from any source into one AI-driven platform where you can budget, forecast, report and plan, all using the Excel functionality your team already knows.',
            ),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Solver Suite')] },
        ...pillars([
          { title: 'Planning', body: 'Automate budgeting and forecasting.' },
          { title: 'Reporting', body: 'Flexible financial and operational reports.' },
          { title: 'Consolidation', body: 'Unified data insights.' },
          { title: 'Analysis', body: 'Organizational performance insights.' },
          { title: 'Data Warehouse', body: 'Central data connection and consolidation.' },
          { title: 'Integrations', body: 'Pre-built cloud connections.' },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Business Central Integration'),
            p(
              'Solver is a cloud-based xFP&A solution that consolidates information from Microsoft Dynamics 365 Business Central and other data sources to provide a single source of truth — design reports and budget forms in Excel, create GL and sub-ledger dashboards, and automate budgeting and forecasting with driver-based models.',
            ),
          ],
        },
      ],
    },
  ],
  cta: ctaBanner(),
}

const hrPayroll: PageDef = {
  slug: 'our-partners-hr-payroll',
  title: 'HR & Payroll',
  metaDescription: 'Employment Hero — HR software and automated payroll for New Zealand businesses.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/Employment hero/EmploymentOS.png'),
  heroAlt: 'Employment Hero',
  heroNodes: [
    h(1, 'Employment Hero — HR Software for New Zealand Businesses'),
    p(
      "Let us introduce you to Employment Hero, the world's first Employment Operating System bringing Hiring, HR, Payroll and Benefits under one roof.",
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Complete Pay Runs in Just a Few Clicks'),
            p(
              '92% of New Zealand pay runs take up to three days to complete. Employment Hero consolidates 150+ payroll steps into a few clicks, automating deductions (KiwiSaver, PAYE), leave calculations, and timesheet translation.',
            ),
          ],
        },
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Manage Everything Employment in One Platform')] },
        ...pillars([
          {
            title: 'Automated HR',
            body: 'Induct new recruits online and make performance reviews a breeze.',
          },
          {
            title: 'Faster Payroll',
            body: 'Save time with automated payroll — Employment Hero makes payroll 81% more efficient.',
          },
          {
            title: 'Global Teams',
            body: 'Hire anyone, from anywhere in the world, with ease.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        {
          size: 'full',
          nodes: [
            h(2, 'Manage Compliance with Confidence'),
            p(
              'Built for NZ employment law: automates Holidays Act leave calculations, manages KiwiSaver contributions, and is an IRD-recognised intermediary for payday filing.',
            ),
            ...bullets([
              'Tax and KiwiSaver deductions',
              'Expense management',
              'Payday filing',
              'Digital timesheets and automated rostering',
              'Shift swapping and bidding',
              'Paperless, flexible and customisable reporting',
            ]),
          ],
        },
      ],
    },
  ],
  cta: ctaBanner('Don’t wait', 'Get in touch now to book a demo and see how we and Employment Hero can help you move your business to the next level'),
}

const codelessPlatform: PageDef = {
  slug: 'our-partners-codeless-platform',
  title: 'Codeless Platform',
  metaDescription: 'Drag-and-drop business process automation and system integration.',
  heroType: 'mediumImpact',
  heroImageUrl: IMG('/Portals/0/Images/bpa-platform-connectors.png'),
  heroAlt: 'BPA Platform connectors',
  heroNodes: [
    h(1, 'Codeless Integration Platform for ERP & eCommerce Solutions'),
    p(
      'Codeless Platforms gives us the ability to automate and integrate through simple drag-and-drop technology — rapidly building and managing integration between a host of ERP and e-commerce solutions.',
    ),
  ],
  heroLinks: [{ label: 'Contact Us', url: '/contact' }],
  sections: [
    { type: 'media', url: IMG('/Portals/0/Images/BPA-Platform-interface.png'), alt: 'BPA Platform interface' },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'BPA Platform Benefits')] },
        ...pillars([
          {
            title: 'Improve Productivity',
            body: 'Employees focus on important activities instead of manual, repetitive tasks.',
          },
          {
            title: 'Increase Profits',
            body: 'Drive strategic goals and improve ROI.',
          },
          {
            title: 'Reduce Risk',
            body: 'Eliminate human error and enforce procedures.',
          },
        ]),
      ],
    },
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'What You Can Build')] },
        ...pillars([
          {
            title: 'Notifications & Alerts',
            body: 'Easy editor for HTML/plain-text notifications, with email, SMS and messenger API delivery, plus memory and escalation tracking.',
          },
          {
            title: 'Report & Document Automation',
            body: 'Drag-and-drop scheduler supporting Crystal Reports, SSRS and native reporting engines, saved to network locations or sent via email/FTP/print.',
          },
          {
            title: 'Data Integration & Synchronisation',
            body: 'Drag-and-drop visual integration steps, transformation functions, and hundreds of data connectors.',
          },
          {
            title: 'Workflow & Human Interaction',
            body: 'No-code drag-and-drop workflow editor, fully responsive, with multi-level workflow authorisations.',
          },
        ]),
      ],
    },
    faqSection(),
  ],
  cta: ctaBanner(),
}

const ourPartnersHub: PageDef = {
  slug: 'our-partners',
  title: 'Our Partners',
  metaDescription: 'Solver, Employment Hero, and Codeless Platform — our trusted technology partners.',
  heroType: 'lowImpact',
  heroNodes: [h(1, 'Our Partners'), p(TAGLINE)],
  sections: [
    {
      type: 'content',
      columns: [
        { size: 'full', nodes: [h(2, 'Who We Work With')] },
        ...linkedPillars([
          {
            title: 'Solver',
            body: 'AI-powered extended financial planning & analysis (xFP&A), integrated with Business Central.',
            url: '/our-partners-solver',
          },
          {
            title: 'HR & Payroll (Employment Hero)',
            body: "The world's first Employment Operating System — Hiring, HR, Payroll and Benefits under one roof.",
            url: '/our-partners-hr-payroll',
          },
          {
            title: 'Codeless Platform',
            body: 'Drag-and-drop business process automation and system integration.',
            url: '/our-partners-codeless-platform',
          },
        ]),
      ],
    },
  ],
  cta: ctaBanner(),
}

export const pages: PageDef[] = [
  home,
  about,
  contact,
  servicesHub,
  bcImplementation,
  nopCommerce,
  shopify,
  alphaCommerceImplementation,
  erpDevelopment,
  webDevelopment,
  mobileDevelopment,
  bcWaveUpgrades,
  applicationsHub,
  alphaCommerceApp,
  powerPlatform,
  solman,
  ourPartnersHub,
  solver,
  hrPayroll,
  codelessPlatform,
]
