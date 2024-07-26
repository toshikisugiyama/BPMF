import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_12 = {
  id: 'bpmf-12',
  label: 'ㄐ',
  bpmf: 'ㄐ',
  pinyin: 'j',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '12-001',
      label: '家人',
      bpmf: 'ㄐㄧㄚ ㄖㄣˊ',
      pinyin: 'jiā rén',
      ja: '家族',
      en: 'family member',
      audioUrl: null,
      items: null,
    },
    {
      id: '12-002',
      label: '九月',
      bpmf: 'ㄐㄧㄡˇ ㄩㄝˋ',
      pinyin: 'jiǔ yuè',
      ja: '九月',
      en: 'September',
      audioUrl: null,
      items: null,
    },
    {
      id: '12-003',
      label: '雞肉',
      bpmf: 'ㄐㄧ ㄖㄡˋ',
      pinyin: 'jī ròu',
      ja: '鶏肉',
      en: 'chicken meat',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
