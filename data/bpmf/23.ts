import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_23 = {
  id: 'bpmf-23',
  label: 'ㄛ',
  bpmf: 'ㄛ',
  pinyin: 'o',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '23-001',
      label: '桌子',
      bpmf: 'ㄓㄨㄛˉ ㄗ˙',
      pinyin: 'zhuō zi',
      ja: 'テーブル',
      en: 'table',
      audioUrl: null,
      items: null,
    },
    {
      id: '23-002',
      label: '多',
      bpmf: 'ㄉㄨㄛ',
      pinyin: 'duō',
      ja: '多い',
      en: 'many',
      audioUrl: null,
      items: null,
    },
    {
      id: '23-003',
      label: '波',
      bpmf: 'ㄅㄛ',
      pinyin: 'bō',
      ja: '波',
      en: 'wave',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
