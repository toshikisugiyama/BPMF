import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_10 = {
  id: 'bpmf-10',
  label: 'ㄎ',
  bpmf: 'ㄎ',
  pinyin: 'k',
  category: 'consonant',
  audioUrl: null,
  items: [
    {
      id: '10-001',
      label: '口',
      bpmf: 'ㄎㄡˇ',
      pinyin: 'kǒu',
      ja: '口',
      en: 'mouth',
      audioUrl: null,
      items: null,
    },
    {
      id: '10-002',
      label: '咖啡',
      bpmf: 'ㄎㄚ ㄈㄟ',
      pinyin: 'kā fēi',
      ja: 'コーヒー',
      en: 'coffee',
      audioUrl: null,
      items: null,
    },
    {
      id: '10-003',
      label: '筷子',
      bpmf: 'ㄎㄨㄞˋ ㄗ˙',
      pinyin: 'kuài zi',
      ja: '箸',
      en: 'chopsticks',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
