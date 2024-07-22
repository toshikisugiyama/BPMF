import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_10 = {
  id: 'bpmf-10',
  label: 'ㄎ',
  bpmf: 'ㄎ',
  pinyin: 'k',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '10-001',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
    {
      id: '10-002',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
    {
      id: '10-003',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
