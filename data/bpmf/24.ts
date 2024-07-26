import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_24 = {
  id: 'bpmf-24',
  label: 'ㄜ',
  bpmf: 'ㄜ',
  pinyin: 'e',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '24-001',
      label: '鵝',
      bpmf: 'ㄜˊ',
      pinyin: 'é',
      ja: 'ガチョウ',
      en: 'goose',
      audioUrl: null,
      items: null,
    },
    {
      id: '24-002',
      label: '哥哥',
      bpmf: 'ㄍㄜ˙ ㄍㄜ˙',
      pinyin: 'gē ge',
      ja: 'お兄さん',
      en: 'older brother',
      audioUrl: null,
      items: null,
    },
    {
      id: '24-003',
      label: '車',
      bpmf: 'ㄔㄜ',
      pinyin: 'chē',
      ja: '車',
      en: 'car',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
