'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type TBpmf = {
  id: string;
  bpmf: string;
  pinyin: string;
  isPinyinVisible: boolean;
  category: 'vowel' | 'consonant';
};

export const BpmfContext = createContext<
  | {
      bpmf: TBpmf[];
      setBpmf: Dispatch<SetStateAction<TBpmf[]>>;
    }
  | undefined
>(undefined);

export const BpmfProvider = (props: { children: ReactNode }) => {
  const [bpmf, setBpmf] = useState<TBpmf[]>([
    {
      id: '01',
      bpmf: 'ㄅ',
      pinyin: 'b',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '02',
      bpmf: 'ㄆ',
      pinyin: 'p',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '03',
      bpmf: 'ㄇ',
      pinyin: 'm',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '04',
      bpmf: 'ㄈ',
      pinyin: 'f',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '05',
      bpmf: 'ㄉ',
      pinyin: 'd',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '06',
      bpmf: 'ㄊ',
      pinyin: 't',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '07',
      bpmf: 'ㄋ',
      pinyin: 'n',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '08',
      bpmf: 'ㄌ',
      pinyin: 'l',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '09',
      bpmf: 'ㄍ',
      pinyin: 'g',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '10',
      bpmf: 'ㄎ',
      pinyin: 'k',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '11',
      bpmf: 'ㄏ',
      pinyin: 'h',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '12',
      bpmf: 'ㄐ',
      pinyin: 'j',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '13',
      bpmf: 'ㄑ',
      pinyin: 'q',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '14',
      bpmf: 'ㄒ',
      pinyin: 'x',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '15',
      bpmf: 'ㄓ',
      pinyin: 'zh',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '16',
      bpmf: 'ㄔ',
      pinyin: 'ch',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '17',
      bpmf: 'ㄕ',
      pinyin: 'sh',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '18',
      bpmf: 'ㄖ',
      pinyin: 'r',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '19',
      bpmf: 'ㄗ',
      pinyin: 'z',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '20',
      bpmf: 'ㄘ',
      pinyin: 'c',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '21',
      bpmf: 'ㄙ',
      pinyin: 's',
      isPinyinVisible: false,
      category: 'consonant',
    },
    {
      id: '22',
      bpmf: 'ㄚ',
      pinyin: 'a',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '23',
      bpmf: 'ㄛ',
      pinyin: 'o',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '24',
      bpmf: 'ㄜ',
      pinyin: 'e',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '25',
      bpmf: 'ㄝ',
      pinyin: 'ê',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '26',
      bpmf: 'ㄞ',
      pinyin: 'ai',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '27',
      bpmf: 'ㄟ',
      pinyin: 'ei',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '28',
      bpmf: 'ㄠ',
      pinyin: 'ao',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '29',
      bpmf: 'ㄡ',
      pinyin: 'ou',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '30',
      bpmf: 'ㄢ',
      pinyin: 'an',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '31',
      bpmf: 'ㄣ',
      pinyin: 'en',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '32',
      bpmf: 'ㄤ',
      pinyin: 'ang',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '33',
      bpmf: 'ㄥ',
      pinyin: 'eng',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '34',
      bpmf: 'ㄦ',
      pinyin: 'er',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '35',
      bpmf: 'ㄧ',
      pinyin: 'i/y',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '36',
      bpmf: 'ㄨ',
      pinyin: 'u/w',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '37',
      bpmf: 'ㄩ',
      pinyin: 'ü/yu',
      isPinyinVisible: false,
      category: 'vowel',
    },
    {
      id: '38',
      bpmf: 'ㄭ',
      pinyin: '-i',
      isPinyinVisible: false,
      category: 'vowel',
    },
  ]);

  return (
    <BpmfContext.Provider value={{ bpmf, setBpmf }}>
      {props.children}
    </BpmfContext.Provider>
  );
};
