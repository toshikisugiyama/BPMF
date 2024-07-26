import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_03 = {
  id: 'bpmf-03',
  label: 'ㄇ',
  bpmf: 'ㄇ',
  pinyin: 'm',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '03-001',
      label: '貓',
      bpmf: 'ㄇㄠ',
      pinyin: 'māo',
      ja: '猫',
      en: 'cat',
      audioUrl: null,
      items: null,
    },
    {
      id: '03-002',
      label: '門',
      bpmf: 'ㄇㄣˊ',
      pinyin: 'mén',
      ja: '門、ドア、扉',
      en: 'door',
      audioUrl: null,
      items: null,
    },
    {
      id: '03-003',
      label: '米',
      bpmf: 'ㄇㄧˇ',
      pinyin: 'mǐ',
      ja: '米',
      en: 'rice',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
