import { h, p, pRuns } from './lexical'

export const TAGLINE =
  "Since 2016, Acumen Online has been empowering businesses with cutting-edge software solutions, bridging e‑commerce and ERP systems with seamless integration and future‑ready technology."

export const CONTACT_PHONE = '+64 (0)4 655 0144'
export const CONTACT_EMAIL = 'sales@acumenonline.co.nz'
export const CONTACT_ADDRESS = 'Floor 2, 101 Station Road, Penrose, Auckland 1061'
export const SUPPORT_URL = 'https://support.acumenonline.co.nz/'

export const faqSection = () => ({
  type: 'content' as const,
  columns: [
    {
      size: 'full' as const,
      nodes: [
        h(2, 'Frequently Asked Questions'),
        h(3, 'What support services do you offer?'),
        p(
          'We deliver fast, reliable IT support for Microsoft Business Central, Shopify and NopCommerce with a focus on exceptional customer service.',
        ),
        h(3, 'What eCommerce services do you provide?'),
        p(
          'We develop eCommerce plugins and the integration to your ERP, providing a whole suite of services from getting your store online to integrating it with your backend system.',
        ),
        h(3, 'What should I do to get started?'),
        p(
          'Fill out our contact form and we will get in touch with you to schedule an in-person or online demo, assess your needs and get you up and selling in no time.',
        ),
        h(3, 'How much will it cost?'),
        pRuns([
          { text: 'Pricing depends on your requirements — ' },
          { text: 'get in touch', link: { url: '/contact' } },
          { text: ' and our sales team will provide a quote.' },
        ]),
        h(3, 'Do you have any B2B solutions?'),
        pRuns([
          { text: 'Yes — see our ' },
          { text: 'Alpha Commerce', link: { url: '/applications/alpha-commerce' } },
          { text: ' B2B features, or give us a call to discuss what would work for you.' },
        ]),
      ],
    },
  ],
})

export const ctaBanner = (heading = 'Don’t wait', body?: string) => ({
  heading,
  body:
    body ??
    'Get in touch now to book a demo and see how we can help you move your business to the next level',
  label: 'Contact Us',
  url: '/contact',
})
