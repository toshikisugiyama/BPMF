'use client';

import { BPMF_DATA } from '@/data';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export type TBpmfData = {
  id: string;
  label: string;
  bpmf: string;
  pinyin: string;
  category?: 'vowel' | 'consonant';
  audioUrl: string | null;
  ja: string | null;
  en: string | null;
  items: TBpmfData[] | null;
};

type TBpmfState = {
  id: string;
  isPinyinVisible: boolean;
  items: TBpmfState[] | null;
};

export const BpmfContext = createContext<
  | {
      bpmfState: TBpmfState[];
      setBpmfState: Dispatch<SetStateAction<TBpmfState[]>>;
    }
  | undefined
>(undefined);

export const BpmfProvider = (props: { children: ReactNode }) => {
  const [bpmfState, setBpmfState] = useState<TBpmfState[]>(
    BPMF_DATA.map((data) => ({
      id: data.id,
      isPinyinVisible: false,
      items:
        data.items?.map(({ id }) => ({
          id,
          isPinyinVisible: false,
          items: null,
        })) ?? null,
    }))
  );

  return (
    <BpmfContext.Provider value={{ bpmfState, setBpmfState }}>
      {props.children}
    </BpmfContext.Provider>
  );
};
