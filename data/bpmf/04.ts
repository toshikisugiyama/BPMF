import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_04 = {
  id: 'bpmf-04',
  label: 'ㄈ',
  bpmf: 'ㄈ',
  pinyin: 'f',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '04-001',
      label: '颱風',
      bpmf: 'ㄊㄞˊ ㄈㄥ',
      pinyin: 'tái fēng',
      ja: '台風',
      en: 'typhoon',
      audioUrl: null,
      items: null,
    },
    {
      id: '04-002',
      label: '牛肉飯',
      bpmf: 'ㄋㄧㄡˊ ㄖㄡˋ ㄈㄢˋ',
      pinyin: 'niú ròu fàn',
      ja: '牛肉ご飯',
      en: 'beef rice',
      audioUrl: null,
      items: null,
    },
    {
      id: '04-003',
      label: '飛機',
      bpmf: 'ㄈㄟ ㄐㄧ',
      pinyin: 'fēi jī',
      ja: '飛行機',
      en: 'airplane',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
