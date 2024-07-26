import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_27 = {
  id: 'bpmf-27',
  label: 'ㄟ',
  bpmf: 'ㄟ',
  pinyin: 'ei',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '27-001',
      label: '杯子',
      bpmf: 'ㄅㄟ ㄗ˙',
      pinyin: 'bēi zi',
      ja: 'コップ',
      en: 'cup',
      audioUrl: null,
      items: null,
    },
    {
      id: '27-002',
      label: '美麗',
      bpmf: 'ㄇㄟˇ ㄌㄧˋ',
      pinyin: 'měi lì',
      ja: '美しい',
      en: 'beautiful',
      audioUrl: null,
      items: null,
    },
    {
      id: '27-003',
      label: '累',
      bpmf: 'ㄌㄟˋ',
      pinyin: 'lèi',
      ja: '疲れた',
      en: 'tired',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
