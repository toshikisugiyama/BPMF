import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_32 = {
  id: 'bpmf-32',
  label: 'ㄤ',
  bpmf: 'ㄤ',
  pinyin: 'ang',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '32-001',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
    {
      id: '32-002',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
    {
      id: '32-003',
      label: '',
      bpmf: '',
      pinyin: '',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
