import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_01 = {
  id: 'bpmf-01',
  label: 'ㄅ',
  bpmf: 'ㄅ',
  pinyin: 'b',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '01-001',
      label: '筆',
      bpmf: 'ㄅㄧ',
      pinyin: 'bǐ',
      audioUrl: null,
      items: null,
    },
    {
      id: '01-002',
      label: '本',
      bpmf: 'ㄅㄣˇ',
      pinyin: 'běn',
      audioUrl: null,
      items: null,
    },
    {
      id: '01-003',
      label: '鼻子',
      bpmf: 'ㄅㄧˊ ㄗˇ',
      pinyin: 'bí zi',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
