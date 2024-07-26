import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_28 = {
  id: 'bpmf-28',
  label: 'ㄠ',
  bpmf: 'ㄠ',
  pinyin: 'ao',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '28-001',
      label: '草',
      bpmf: 'ㄘㄠˇ',
      pinyin: 'cǎo',
      ja: '草',
      en: 'grass',
      audioUrl: null,
      items: null,
    },
    {
      id: '28-002',
      label: '老虎',
      bpmf: 'ㄌㄠˇ ㄏㄨˇ',
      pinyin: 'lǎo hǔ',
      ja: '虎',
      en: 'tiger',
      audioUrl: null,
      items: null,
    },
    {
      id: '28-003',
      label: '烤肉',
      bpmf: 'ㄎㄠˇ ㄖㄡˋ',
      pinyin: 'kǎo ròu',
      ja: '焼肉',
      en: 'barbecue',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
