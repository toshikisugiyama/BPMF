import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_21 = {
  id: 'bpmf-21',
  label: 'ㄙ',
  bpmf: 'ㄙ',
  pinyin: 's',
  ja: null,
  en: null,
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '21-001',
      label: '四月',
      bpmf: 'ㄙˋ ㄩㄝˋ',
      pinyin: 'sì yuè',
      ja: '4月',
      en: 'April',
      audioUrl: null,
      items: null,
    },
    {
      id: '21-002',
      label: '三月',
      bpmf: 'ㄙㄢ ㄩㄝˋ',
      pinyin: 'sān yuè',
      ja: '3月',
      en: 'March',
      audioUrl: null,
      items: null,
    },
    {
      id: '21-003',
      label: '司會',
      bpmf: 'ㄙ ㄏㄨㄟˋ',
      pinyin: 'sī huì',
      ja: '司会',
      en: 'host',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
