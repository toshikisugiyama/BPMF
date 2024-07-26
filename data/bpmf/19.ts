import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_19 = {
  id: 'bpmf-19',
  label: 'ㄗ',
  bpmf: 'ㄗ',
  pinyin: 'z',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '19-001',
      label: '字',
      bpmf: 'ㄗˋ',
      pinyin: 'zì',
      ja: '文字',
      en: 'character',
      audioUrl: null,
      items: null,
    },
    {
      id: '19-002',
      label: '自',
      bpmf: 'ㄗˋ',
      pinyin: 'zì',
      ja: '自分',
      en: 'self',
      audioUrl: null,
      items: null,
    },
    {
      id: '19-003',
      label: '仔細',
      bpmf: 'ㄗˇ ㄒㄧˋ',
      pinyin: 'zǐ xì',
      ja: '細かい',
      en: 'careful',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
