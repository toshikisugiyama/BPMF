import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_09 = {
  id: 'bpmf-09',
  label: 'ㄍ',
  bpmf: 'ㄍ',
  pinyin: 'g',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '09-001',
      label: '狗',
      bpmf: 'ㄍㄡˇ',
      pinyin: 'gǒu',
      ja: '犬',
      en: 'dog',
      audioUrl: null,
      items: null,
    },
    {
      id: '09-002',
      label: '國家',
      bpmf: 'ㄍㄨㄛˊ ㄐㄧㄚ',
      pinyin: 'guó jiā',
      ja: '国家',
      en: 'country',
      audioUrl: null,
      items: null,
    },
    {
      id: '09-003',
      label: '歌',
      bpmf: 'ㄍㄜ',
      pinyin: 'gē',
      ja: '歌',
      en: 'song',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
