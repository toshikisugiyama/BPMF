import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_33 = {
  id: 'bpmf-33',
  label: 'ㄥ',
  bpmf: 'ㄥ',
  pinyin: 'eng',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '33-001',
      label: '風景',
      bpmf: 'ㄈㄥ ㄐㄧㄥˇ',
      pinyin: 'fēng jǐng',
      ja: '風景',
      en: 'scenery',
      audioUrl: null,
      items: null,
    },
    {
      id: '33-002',
      label: '課程',
      bpmf: 'ㄎㄜˋ ㄔㄥˊ',
      pinyin: 'kè chéng',
      ja: '授業',
      en: 'course',
      audioUrl: null,
      items: null,
    },
    {
      id: '33-003',
      label: '成功',
      bpmf: 'ㄔㄥˊ ㄍㄨㄥ',
      pinyin: 'chéng gōng',
      ja: '成功',
      en: 'success',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
