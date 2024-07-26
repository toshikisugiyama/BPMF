import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_32 = {
  id: 'bpmf-32',
  label: 'ㄤ',
  bpmf: 'ㄤ',
  pinyin: 'ang',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '32-001',
      label: '方向',
      bpmf: 'ㄈㄤ ㄒㄧㄤˋ',
      pinyin: 'fāng xiàng',
      ja: '方向',
      en: 'direction',
      audioUrl: null,
      items: null,
    },
    {
      id: '32-002',
      label: '光芒',
      bpmf: 'ㄍㄨㄤ ㄇㄤˊ',
      pinyin: 'guāng máng',
      ja: '輝き',
      en: 'radiance',
      audioUrl: null,
      items: null,
    },
    {
      id: '32-003',
      label: '文章',
      bpmf: 'ㄨㄣˊ ㄓㄤ',
      pinyin: 'wén zhāng',
      ja: '文章',
      en: 'article',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
