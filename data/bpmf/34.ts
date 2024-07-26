import { TBpmfData } from '@/app/provider/BpmfProvider';

export const BPMF_34 = {
  id: 'bpmf-34',
  label: 'ㄦ',
  bpmf: 'ㄦ',
  pinyin: 'er',
  category: 'vowel',
  audioUrl: null,
  items: [
    {
      id: '34-001',
      label: '兒童',
      bpmf: 'ㄦˊ ㄊㄨㄥˊ',
      pinyin: 'ér tóng',
      ja: '子供',
      en: 'children',
      audioUrl: null,
      items: null,
    },
    {
      id: '34-002',
      label: '耳機',
      bpmf: 'ㄦˇ ㄐㄧ',
      pinyin: 'ěr jī',
      ja: 'イヤホン',
      en: 'earphones',
      audioUrl: null,
      items: null,
    },
    {
      id: '34-003',
      label: '二月',
      bpmf: 'ㄦˋ ㄩㄝˋ',
      pinyin: 'èr yuè',
      ja: '2月',
      en: 'February',
      audioUrl: null,
      items: null,
    },
  ],
} as const satisfies TBpmfData;
