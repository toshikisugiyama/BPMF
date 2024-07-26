import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_14 = {
  id: 'bpmf-14',
  label: 'ㄒ',
  bpmf: 'ㄒ',
  pinyin: 'x',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '14-001',
      label: '西瓜',
      bpmf: 'ㄒㄧ ㄍㄨㄚ',
      pinyin: 'xī guā',
      ja: 'スイカ',
      en: 'watermelon',
      audioUrl: null,
      items: null,
    },
    {
      id: '14-002',
      label: '笑',
      bpmf: 'ㄒㄧㄠˋ',
      pinyin: 'xiào',
      ja: '笑う',
      en: 'laugh',
      audioUrl: null,
      items: null,
    },
    {
      id: '14-003',
      label: '鞋子',
      bpmf: 'ㄒㄧㄝˊ ㄗ˙',
      pinyin: 'xié zi',
      ja: '靴',
      en: 'shoes',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
