import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_16 = {
  id: 'bpmf-16',
  label: 'ㄔ',
  bpmf: 'ㄔ',
  pinyin: 'ch',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '16-001',
      label: '車',
      bpmf: 'ㄔㄜ',
      pinyin: 'chē',
      ja: '車',
      en: 'car',
      audioUrl: null,
      items: null,
    },
    {
      id: '16-002',
      label: '吃',
      bpmf: 'ㄔ',
      pinyin: 'chī',
      ja: '食べる',
      en: 'eat',
      audioUrl: null,
      items: null,
    },
    {
      id: '16-003',
      label: '廠',
      bpmf: 'ㄔㄤˇ',
      pinyin: 'chǎng',
      ja: '工場',
      en: 'factory',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
