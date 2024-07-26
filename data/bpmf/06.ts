import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_06 = {
  id: 'bpmf-06',
  label: 'ㄊ',
  bpmf: 'ㄊ',
  pinyin: 't',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '06-001',
      label: '兔子',
      bpmf: 'ㄊㄨˋ ㄗ˙',
      pinyin: 'tù zi',
      ja: '兎',
      en: 'rabbit',
      audioUrl: null,
      items: null,
    },
    {
      id: '06-002',
      label: '頭髮',
      bpmf: 'ㄊㄡˊ ㄈㄚˇ',
      pinyin: 'tóu fǎ',
      ja: '髪の毛',
      en: 'hair',
      audioUrl: null,
      items: null,
    },
    {
      id: '06-003',
      label: '圖書館',
      bpmf: 'ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ',
      pinyin: 'tú shū guǎn',
      ja: '図書館',
      en: 'library',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
