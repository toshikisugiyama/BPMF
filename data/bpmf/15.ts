import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_15 = {
  id: 'bpmf-15',
  label: 'ㄓ',
  bpmf: 'ㄓ',
  pinyin: 'zh',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '15-001',
      label: '中文',
      bpmf: 'ㄓㄨㄥ ㄨㄣˊ',
      pinyin: 'zhōng wén',
      ja: '中国語',
      en: 'Chinese (language)',
      audioUrl: null,
      items: null,
    },
    {
      id: '15-002',
      label: '知識',
      bpmf: 'ㄓ ㄕˋ',
      pinyin: 'zhī shì',
      ja: '知識',
      en: 'knowledge',
      audioUrl: null,
      items: null,
    },
    {
      id: '15-003',
      label: '豬肉',
      bpmf: 'ㄓㄨ ㄖㄡˋ',
      pinyin: 'zhū ròu',
      ja: '豚肉',
      en: 'pork',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
