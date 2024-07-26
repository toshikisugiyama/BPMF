import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_25 = {
  id: 'bpmf-25',
  label: 'ㄝ',
  bpmf: 'ㄝ',
  pinyin: 'ê',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '25-001',
      label: '鞋子',
      bpmf: 'ㄒㄧㄝˊ ㄗ˙',
      pinyin: 'xié zi',
      ja: '靴',
      en: 'shoes',
      audioUrl: null,
      items: null,
    },
    {
      id: '25-002',
      label: '葉子',
      bpmf: 'ㄧㄝˋ ㄗ˙',
      pinyin: 'yè zi',
      ja: '葉っぱ',
      en: 'leaf',
      audioUrl: null,
      items: null,
    },
    {
      id: '25-003',
      label: '頁面',
      bpmf: 'ㄧㄝˋ ㄇㄧㄢˋ',
      pinyin: 'yè miàn',
      ja: 'ページ',
      en: 'page',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
