import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_37 = {
  id: 'bpmf-37',
  label: 'ㄩ',
  bpmf: 'ㄩ',
  pinyin: 'ü/yu',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '37-001',
      label: '語言',
      bpmf: 'ㄩˇ ㄧㄢˊ',
      pinyin: 'yǔ yán',
      ja: '言語',
      en: 'language',
      audioUrl: null,
      items: null,
    },
    {
      id: '37-002',
      label: '女兒',
      bpmf: 'ㄋㄩˇ ㄦˊ',
      pinyin: 'nǚ ér',
      ja: '娘',
      en: 'daughter',
      audioUrl: null,
      items: null,
    },
    {
      id: '37-003',
      label: '魚缸',
      bpmf: 'ㄩˊ ㄍㄤ',
      pinyin: 'yú gāng',
      ja: '水槽',
      en: 'fish tank',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
