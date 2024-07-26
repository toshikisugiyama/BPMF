import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_26 = {
  id: 'bpmf-26',
  label: 'ㄞ',
  bpmf: 'ㄞ',
  pinyin: 'ai',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '26-001',
      label: '海',
      bpmf: 'ㄏㄞˇ',
      pinyin: 'hǎi',
      ja: '海',
      en: 'sea',
      audioUrl: null,
      items: null,
    },
    {
      id: '26-002',
      label: '愛',
      bpmf: 'ㄞˋ',
      pinyin: 'ài',
      ja: '愛',
      en: 'love',
      audioUrl: null,
      items: null,
    },
    {
      id: '26-003',
      label: '菜',
      bpmf: 'ㄘㄞˋ',
      pinyin: 'cài',
      ja: '野菜',
      en: 'vegetable',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
