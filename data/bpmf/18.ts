import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_18 = {
  id: 'bpmf-18',
  label: 'ㄖ',
  bpmf: 'ㄖ',
  pinyin: 'r',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '18-001',
      label: '日',
      bpmf: 'ㄖˋ',
      pinyin: 'rì',
      ja: '日',
      en: 'day',
      audioUrl: null,
      items: null,
    },
    {
      id: '18-002',
      label: '人',
      bpmf: 'ㄖㄣˊ',
      pinyin: 'rén',
      ja: '人',
      en: 'person',
      audioUrl: null,
      items: null,
    },
    {
      id: '18-003',
      label: '熱',
      bpmf: 'ㄖㄜˋ',
      pinyin: 'rè',
      ja: '熱い',
      en: 'hot',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
