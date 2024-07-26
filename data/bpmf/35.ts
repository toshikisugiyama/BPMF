import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_35 = {
  id: 'bpmf-35',
  label: 'ㄧ',
  bpmf: 'ㄧ',
  pinyin: 'i/y',
  ja: null,
  en: null,
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '35-001',
      label: '醫院',
      bpmf: 'ㄧ ㄩㄢˋ',
      pinyin: 'yī yuàn',
      ja: '病院',
      en: 'hospital',
      audioUrl: null,
      items: null,
    },
    {
      id: '35-002',
      label: '衣服',
      bpmf: 'ㄧ ㄈㄨˊ',
      pinyin: 'yī fú',
      ja: '服',
      en: 'clothes',
      audioUrl: null,
      items: null,
    },
    {
      id: '35-003',
      label: '一月',
      bpmf: 'ㄧ ㄩㄝˋ',
      pinyin: 'yī yuè',
      ja: '1月',
      en: 'January',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
