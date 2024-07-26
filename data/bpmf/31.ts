import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_31 = {
  id: 'bpmf-31',
  label: 'ㄣ',
  bpmf: 'ㄣ',
  pinyin: 'en',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '31-001',
      label: '根本',
      bpmf: 'ㄍㄣ ㄅㄣˇ',
      pinyin: 'gēn běn',
      ja: '基本',
      en: 'fundamental',
      audioUrl: null,
      items: null,
    },
    {
      id: '31-002',
      label: '門口',
      bpmf: 'ㄇㄣˊ ㄎㄡˇ',
      pinyin: 'mén kǒu',
      ja: '玄関',
      en: 'entrance',
      audioUrl: null,
      items: null,
    },
    {
      id: '31-003',
      label: '恩人',
      bpmf: 'ㄣ ㄖㄣˊ',
      pinyin: 'ēn rén',
      ja: '恩人',
      en: 'benefactor',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
