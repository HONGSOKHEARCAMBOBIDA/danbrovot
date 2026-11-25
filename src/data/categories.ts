import type { Category, CategorySlug } from '../types'

export const categories: Category[] = [
  {
    slug: 'history',
    title: 'ប្រវត្តិសាស្ត្រ',
    titleEn: 'History',
    description: 'អរិយធម៌ ព្រឹត្តិការណ៍ និងរាជវង្សដែលបានបង្កើតពិភពលោក និងប្រទេសកម្ពុជា។',
    icon: 'clock',
    path: '/history',
  },
  {
    slug: 'biography',
    title: 'បុគ្គលល្បីៗ',
    titleEn: 'Biography',
    description: 'ជីវិត និងស្នាដៃរបស់អ្នកវិទ្យាសាស្ត្រ អ្នកប្រាជ្ញ និងមនុស្សដែលមានឥទ្ធិពលលើពិភពលោក។',
    icon: 'user',
    path: '/biography',
  },
  {
    slug: 'knowledge',
    title: 'ចំណេះដឹងទូទៅ',
    titleEn: 'General Knowledge',
    description: 'ចម្លើយដែលងាយយល់ចំពោះសំណួរជុំវិញខ្លួនយើង ពីវិទ្យាសាស្ត្រដល់ជីវិតប្រចាំថ្ងៃ។',
    icon: 'bulb',
    path: '/knowledge',
  },
  {
    slug: 'stories',
    title: 'រឿងរ៉ាវគួរឱ្យចាប់អារម្មណ៍',
    titleEn: 'Interesting Stories',
    description: 'រឿងពិតក្នុងប្រវត្តិសាស្ត្រដែលមិនសូវមានអ្នកដឹង និងគួរឱ្យស្វែងយល់។',
    icon: 'book',
    path: '/stories',
  },
]

export const getCategory = (slug: CategorySlug): Category =>
  categories.find((c) => c.slug === slug) ?? categories[0]
