import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_30 = {
  id: 'bpmf-30',
  label: 'ㄢ',
  bpmf: 'ㄢ',
  pinyin: 'an',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '30-001',
      label: '山',
      bpmf: 'ㄕㄢ',
      pinyin: 'shān',
      ja: '山',
      en: 'mountain',
      audioUrl: null,
      items: null,
    },
    {
      id: '30-002',
      label: '飯',
      bpmf: 'ㄈㄢˋ',
      pinyin: 'fàn',
      ja: 'ご飯',
      en: 'rice',
      audioUrl: null,
      items: null,
    },
    {
      id: '30-003',
      label: '安全',
      bpmf: 'ㄢ ㄑㄩㄢˊ',
      pinyin: 'ān quán',
      ja: '安全',
      en: 'safety',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
