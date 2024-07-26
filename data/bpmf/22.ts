import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_22 = {
  id: 'bpmf-22',
  label: 'ㄚ',
  bpmf: 'ㄚ',
  pinyin: 'a',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '22-001',
      label: '媽媽',
      bpmf: 'ㄇㄚˋ',
      pinyin: 'mā mā',
      ja: 'お母さん',
      en: 'mother',
      audioUrl: null,
      items: null,
    },
    {
      id: '22-002',
      label: '花',
      bpmf: 'ㄏㄨㄚ',
      pinyin: 'huā',
      ja: '花',
      en: 'flower',
      audioUrl: null,
      items: null,
    },
    {
      id: '22-003',
      label: '家',
      bpmf: 'ㄐㄧㄚ',
      pinyin: 'jiā',
      ja: '家',
      en: 'home',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
