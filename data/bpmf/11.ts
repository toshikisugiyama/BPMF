import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_11 = {
  id: 'bpmf-11',
  label: 'ㄏ',
  bpmf: 'ㄏ',
  pinyin: 'h',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '11-001',
      label: '花',
      bpmf: 'ㄏㄨㄚ',
      pinyin: 'huā',
      ja: '花',
      en: 'flower',
      audioUrl: null,
      items: null,
    },
    {
      id: '11-002',
      label: '海',
      bpmf: 'ㄏㄞˇ',
      pinyin: 'hǎi',
      ja: '海',
      en: 'sea',
      audioUrl: null,
      items: null,
    },
    {
      id: '11-003',
      label: '猴子',
      bpmf: 'ㄏㄡˊ ㄗ˙',
      pinyin: 'hóu zi',
      ja: '猿',
      en: 'monkey',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
