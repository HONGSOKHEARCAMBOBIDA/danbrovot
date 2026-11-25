import type { SiteSettings } from '../types'

// Edit the values below, or set VITE_SITE_URL / VITE_FACEBOOK_URL in your .env file.
export const settings: SiteSettings = {
  name: 'ដានប្រវត្តិ',
  nameEn: 'Historical Legacy',
  slogan: 'ចំណេះដឹងគឺជាអំណាច',
  sloganEn: 'Knowledge is Power',
  description:
    'ស្វែងយល់ពីប្រវត្តិសាស្ត្រ ប្រវត្តិបុគ្គលល្បីៗ ចំណេះដឹងទូទៅ និងរឿងរ៉ាវគួរឱ្យចាប់អារម្មណ៍ ជាភាសាខ្មែរ។',
  siteUrl: import.meta.env?.VITE_SITE_URL ?? 'https://your-project.pages.dev',
  facebookUrl: import.meta.env?.VITE_FACEBOOK_URL ?? 'https://www.facebook.com/',
  facebookPageName: 'ដានប្រវត្តិ',
  logo: '/images/logo.png',
  ogImage: '/images/og-cover.png',
  contact: {
    email: 'danprovot@gmail.com',
    phone: '',
    address: 'ភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា',
  },
}
