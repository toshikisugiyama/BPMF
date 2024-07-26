import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_07 = {
  id: 'bpmf-07',
  label: 'ㄋ',
  bpmf: 'ㄋ',
  pinyin: 'n',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '07-001',
      label: '牛奶',
      bpmf: 'ㄋㄧㄡˊ ㄋㄞˇ',
      pinyin: 'niú nǎi',
      ja: '牛乳',
      en: 'milk',
      audioUrl: null,
      items: null,
    },
    {
      id: '07-002',
      label: '年',
      bpmf: 'ㄋㄧㄢˊ',
      pinyin: 'nián',
      ja: '年',
      en: 'year',
      audioUrl: null,
      items: null,
    },
    {
      id: '07-003',
      label: '南',
      bpmf: 'ㄋㄢˊ',
      pinyin: 'nán',
      ja: '南',
      en: 'south',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
