import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_02 = {
  id: 'bpmf-02',
  label: 'ㄆ',
  bpmf: 'ㄆ',
  pinyin: 'p',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '02-001',
      label: '朋友',
      bpmf: 'ㄆㄥˊ ㄧㄡˇ',
      pinyin: 'péng yǒu',
      audioUrl: null,
      items: null,
    },
    {
      id: '02-002',
      label: '葡萄',
      bpmf: 'ㄆㄨˊ ㄊㄠˊ',
      pinyin: 'pú táo',
      audioUrl: null,
      items: null,
    },
    {
      id: '02-003',
      label: '蘋果',
      bpmf: 'ㄆㄧㄥˊ ㄍㄨㄛˇ',
      pinyin: 'píng guǒ',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
