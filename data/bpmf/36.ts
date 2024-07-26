import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_36 = {
  id: 'bpmf-36',
  label: 'ㄨ',
  bpmf: 'ㄨ',
  pinyin: 'u/w',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '36-001',
      label: '午餐',
      bpmf: 'ㄨˇ ㄘㄢ',
      pinyin: 'wǔ cān',
      ja: '昼食',
      en: 'lunch',
      audioUrl: null,
      items: null,
    },
    {
      id: '36-002',
      label: '五月',
      bpmf: 'ㄨˇ ㄩㄝˋ',
      pinyin: 'wǔ yuè',
      ja: '五月',
      en: 'May',
      audioUrl: null,
      items: null,
    },
    {
      id: '36-003',
      label: '水果',
      bpmf: 'ㄕㄨㄟˇ ㄍㄨㄛˇ',
      pinyin: 'shuǐ guǒ',
      ja: '果物',
      en: 'fruit',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
