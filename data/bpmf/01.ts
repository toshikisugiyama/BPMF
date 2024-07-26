import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_01 = {
  id: 'bpmf-01',
  label: 'ㄅ',
  bpmf: 'ㄅ',
  pinyin: 'b',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '01-001',
      label: '筆',
      bpmf: 'ㄅㄧ',
      pinyin: 'bǐ',
      ja: 'ペン',
      en: 'pen',
      audioUrl: null,
      items: null,
    },
    {
      id: '01-002',
      label: '八月',
      bpmf: 'ㄅㄚ ㄩㄝˋ',
      pinyin: 'bā yuè',
      ja: '八月',
      en: 'August',
      audioUrl: null,
      items: null,
    },
    {
      id: '01-003',
      label: '鼻子',
      bpmf: 'ㄅㄧˊ ㄗˇ',
      pinyin: 'bí zi',
      ja: '鼻',
      en: 'nose',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
