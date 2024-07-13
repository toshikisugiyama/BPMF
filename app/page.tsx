'use client';

import { useCallback, useContext, useState } from 'react';
import { BpmfContext } from './provider/BpmfProvider';

export default function Home() {
  const bpmfContext = useContext(BpmfContext);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    bpmfContext?.setBpmf((prevBpmf) =>
      prevBpmf.map((item) => ({
        ...item,
        isPinyinVisible: false,
      }))
    );
    if (scrollTimeout !== null) {
      clearTimeout(scrollTimeout);
    }
    const timeout = window.setTimeout(() => {
      setIsScrolling(false);
    }, 100);
    setScrollTimeout(timeout);
  }, [scrollTimeout, bpmfContext]);

  const handleClickCard = useCallback(
    (itemId: string) => {
      if (isScrolling) {
        return;
      }
      bpmfContext?.setBpmf((prevBpmf) =>
        prevBpmf.map((prevItem) => {
          if (itemId === prevItem.id) {
            return {
              ...prevItem,
              isPinyinVisible: !prevItem.isPinyinVisible,
            };
          }
          return prevItem;
        })
      );
    },
    [isScrolling, bpmfContext]
  );

  return (
    <main>
      <div className="mx-auto max-w-2xl p-4">
        <ul
          className="no-scrollbar flex aspect-square w-full snap-x snap-mandatory items-start justify-start gap-4 overflow-auto"
          onScroll={handleScroll}
        >
          {bpmfContext?.bpmf.map((item, index) => (
            <li
              key={item.id}
              className="relative flex aspect-square w-full shrink-0 select-none snap-center snap-always flex-col items-center justify-center gap-4 rounded-2xl bg-teal-900 font-serif text-[15rem] font-semibold leading-none text-white"
              onClick={() => handleClickCard(item.id)}
            >
              {item.bpmf}
              <span className="absolute left-[15%] top-[14%] -translate-x-1/2 -translate-y-1/2 text-2xl font-normal">
                No.{index + 1}
              </span>
              {item.isPinyinVisible && (
                <span className="absolute bottom-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 text-2xl">
                  {item.pinyin}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
