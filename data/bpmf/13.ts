import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_13 = {
  id: 'bpmf-13',
  label: 'ㄑ',
  bpmf: 'ㄑ',
  pinyin: 'q',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '13-001',
      label: '前面',
      bpmf: 'ㄑㄧㄢˊ ㄇㄧㄢˋ',
      pinyin: 'qián miàn',
      ja: '前',
      en: 'front',
      audioUrl: null,
      items: null,
    },
    {
      id: '13-002',
      label: '秋天',
      bpmf: 'ㄑㄧㄡ ㄊㄧㄢ',
      pinyin: 'qiū tiān',
      ja: '秋',
      en: 'autumn',
      audioUrl: null,
      items: null,
    },
    {
      id: '13-003',
      label: '七月',
      bpmf: 'ㄑㄧ ㄩㄝˋ',
      pinyin: 'qī yuè',
      ja: '七月',
      en: 'July',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
