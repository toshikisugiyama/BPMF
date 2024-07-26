import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_17 = {
  id: 'bpmf-17',
  label: 'ㄕ',
  bpmf: 'ㄕ',
  pinyin: 'sh',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '17-001',
      label: '雪山',
      bpmf: 'ㄒㄩㄝˇ ㄕㄢ',
      pinyin: 'xuě shān',
      ja: '雪山',
      en: 'snow mountain',
      audioUrl: null,
      items: null,
    },
    {
      id: '17-002',
      label: '時間',
      bpmf: 'ㄕˊ ㄐㄧㄢ',
      pinyin: 'shí jiān',
      ja: '時間',
      en: 'time',
      audioUrl: null,
      items: null,
    },
    {
      id: '17-003',
      label: '十月',
      bpmf: 'ㄕˊ ㄩㄝˋ',
      pinyin: 'shí yuè',
      ja: '十月',
      en: 'October',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
