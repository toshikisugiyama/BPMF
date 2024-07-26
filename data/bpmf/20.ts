import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_20 = {
  id: 'bpmf-20',
  label: 'ㄘ',
  bpmf: 'ㄘ',
  pinyin: 'c',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '20-001',
      label: '菜',
      bpmf: 'ㄘㄞˋ',
      pinyin: 'cài',
      ja: '野菜',
      en: 'vegetable',
      audioUrl: null,
      items: null,
    },
    {
      id: '20-002',
      label: '測試',
      bpmf: 'ㄘㄜˋ ㄕˋ',
      pinyin: 'cè shì',
      ja: 'テスト',
      en: 'test',
      audioUrl: null,
      items: null,
    },
    {
      id: '20-003',
      label: '磁鐵',
      bpmf: 'ㄘˊ ㄊㄧㄝˇ',
      pinyin: 'cí tiě',
      ja: '磁石',
      en: 'magnet',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
