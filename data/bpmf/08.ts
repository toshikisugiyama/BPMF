import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_08 = {
  id: 'bpmf-08',
  label: 'ㄌ',
  bpmf: 'ㄌ',
  pinyin: 'l',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '08-001',
      label: '老師',
      bpmf: 'ㄌㄠˇ ㄕ',
      pinyin: 'lǎo shī',
      ja: '先生',
      en: 'teacher',
      audioUrl: null,
      items: null,
    },
    {
      id: '08-002',
      label: '六月',
      bpmf: 'ㄌㄧㄡˋ ㄩㄝˋ',
      pinyin: 'liù yuè',
      ja: '六月',
      en: 'June',
      audioUrl: null,
      items: null,
    },
    {
      id: '08-003',
      label: '路',
      bpmf: 'ㄌㄨˋ',
      pinyin: 'lù',
      ja: '道',
      en: 'road',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
