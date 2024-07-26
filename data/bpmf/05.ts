import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_05 = {
  id: 'bpmf-05',
  label: 'ㄉ',
  bpmf: 'ㄉ',
  pinyin: 'd',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '05-001',
      label: '大象',
      bpmf: 'ㄉㄚˋ ㄒㄧㄤˋ',
      pinyin: 'dà xiàng',
      ja: '象',
      en: 'elephant',
      audioUrl: null,
      items: null,
    },
    {
      id: '05-002',
      label: '蛋',
      bpmf: 'ㄉㄢˋ',
      pinyin: 'dàn',
      ja: '卵',
      en: 'egg',
      audioUrl: null,
      items: null,
    },
    {
      id: '05-003',
      label: '地圖',
      bpmf: 'ㄉㄧˋ ㄊㄨˊ',
      pinyin: 'dì tú',
      ja: '地図',
      en: 'map',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
