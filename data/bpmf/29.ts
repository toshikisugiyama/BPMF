import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_29 = {
  id: 'bpmf-29',
  label: 'ㄡ',
  bpmf: 'ㄡ',
  pinyin: 'ou',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '29-001',
      label: '口',
      bpmf: 'ㄎㄡˇ',
      pinyin: 'kǒu',
      ja: '口',
      en: 'mouth',
      audioUrl: null,
      items: null,
    },
    {
      id: '29-002',
      label: '狗',
      bpmf: 'ㄍㄡˇ',
      pinyin: 'gǒu',
      ja: '犬',
      en: 'dog',
      audioUrl: null,
      items: null,
    },
    {
      id: '29-003',
      label: '臭豆腐',
      bpmf: 'ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ',
      pinyin: 'chòu dòu fu',
      ja: '臭豆腐',
      en: 'stinky tofu',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
