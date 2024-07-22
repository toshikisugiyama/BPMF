import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_30 = {
  id: 'bpmf-30',
  label: 'ㄢ',
  bpmf: 'ㄢ',
  pinyin: 'an',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '30-001',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
    {
      id: '30-002',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
    {
      id: '30-003',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
