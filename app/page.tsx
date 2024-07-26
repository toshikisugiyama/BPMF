'use client';

import {
  memo,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BpmfContext } from './provider/BpmfProvider';
import { BPMF_DATA } from '@/data';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const bpmfContext = useContext(BpmfContext);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  // カードをスクロール
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    setCurrentItemId(undefined);
    bpmfContext?.setBpmfState((prevBpmf) =>
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
    }, 10);
    setScrollTimeout(timeout);
  }, [scrollTimeout, bpmfContext]);

  // カードをクリック
  const handleClickCard = useCallback(
    (itemId: string) => {
      if (isScrolling) {
        return;
      }
      bpmfContext?.setBpmfState((prevBpmf) =>
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

  // 音声アイコンをクリック
  const handleClickAudio = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e.stopPropagation();
      const audio = e.currentTarget.querySelector('audio');
      if (audio == null) {
        return;
      }
      audio.play();
    },
    []
  );

  useEffect(() => {
    if (isScrolling) {
      return;
    }
    const container = containerRef.current;
    if (container == null) {
      return;
    }
    let observer: IntersectionObserver | undefined;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleItem = entry.target as HTMLElement;
          const newId = visibleItem.id;
          router.replace(`${window.location.pathname}?id=${newId}`);
        }
      });
    };
    observer = new IntersectionObserver(handleIntersection, {
      root: container,
      threshold: 1,
    });
    const items = container.querySelectorAll('li');
    items.forEach((item) => observer!.observe(item));
    return () => {
      if (observer) {
        items.forEach((item) => observer.unobserve(item));
        observer.disconnect();
      }
    };
  }, [isScrolling, router]);

  const currentData = useMemo(
    () => BPMF_DATA.find((data) => data.id === id),
    [id]
  );

  const [currentItemId, setCurrentItemId] = useState<string | undefined>(
    undefined
  );
  const currentItem = useMemo(
    () => currentData?.items.find(({ id }) => id === currentItemId),
    [currentItemId, currentData]
  );

  const ignore = useRef<boolean>(false);
  useEffect(() => {
    if (ignore.current) {
      return;
    }
    if (id == null) {
      router.replace(`${window.location.pathname}?id=bpmf-01`);
      return;
    }
    if (containerRef.current == null) {
      return;
    }
    const item: HTMLLIElement | null = containerRef.current.querySelector(id);
    if (item == null) {
      return;
    }
    const itemLeft = item.offsetLeft - item.offsetWidth;
    containerRef.current.scrollTo({
      left: itemLeft,
    });
    return () => {
      ignore.current = true;
    };
  }, [id, router]);

  return (
    <main>
      <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
        <ul
          ref={containerRef}
          className="no-scrollbar flex aspect-square w-full snap-x snap-mandatory items-start justify-start gap-4 overflow-auto"
          onScroll={handleScroll}
        >
          {bpmfContext?.bpmfState.map((item, index) => {
            const data = BPMF_DATA.find(({ id }) => id === item.id);
            if (data == null) {
              return null;
            }
            return (
              <li
                id={data.id}
                key={data.id}
                className="relative flex aspect-square w-full shrink-0 select-none snap-center snap-always flex-col items-center justify-center gap-4 rounded-2xl bg-teal-900 font-serif text-[15rem] font-semibold leading-none text-white shadow"
                onClick={() => handleClickCard(data.id)}
              >
                {data.bpmf}
                <span className="absolute left-[15%] top-[14%] -translate-x-1/2 -translate-y-1/2 text-2xl font-normal">
                  No.{index + 1}
                </span>
                {item.isPinyinVisible && (
                  <span className="absolute bottom-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 text-2xl">
                    {data.pinyin}
                  </span>
                )}
                <Audio
                  handleClickAudio={handleClickAudio}
                  audioUrl={data.audioUrl}
                />
              </li>
            );
          })}
        </ul>
        {!!currentData?.items?.length && (
          <ul className="grid grid-cols-3 gap-2">
            {currentData.items.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className="relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-teal-900 text-white shadow"
                onClick={() => setCurrentItemId(item.id)}
              >
                <span className="text-3xl font-semibold">{item.label}</span>
                <span className="absolute	left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-sm md:top-[30%]">
                  {item.bpmf}
                </span>
                {bpmfContext?.bpmfState.find((state) => state.id === id)
                  ?.isPinyinVisible && (
                  <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap text-sm md:bottom-[30%]">
                    {item.pinyin}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
        {currentItem != null && (
          <div
            className="flex flex-col items-center justify-center rounded-2xl bg-teal-900 p-4 text-white shadow"
            onClick={() => setCurrentItemId(undefined)}
          >
            <span>{currentItem.en ?? ''}</span>
            <span>{currentItem.ja ?? ''}</span>
          </div>
        )}
      </div>
    </main>
  );
}

const Audio = memo(function AudioIcon(props: {
  handleClickAudio: MouseEventHandler<HTMLDivElement>;
  audioUrl: string | null;
}) {
  return (
    <div
      className="absolute right-[14%] top-[14%] -translate-y-1/2 translate-x-1/2 cursor-pointer"
      onClick={props.handleClickAudio}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
        <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
      </svg>
      <audio controls={false}>
        <source src={props.audioUrl ?? 't-rex-roar.mp3'} type="audio/mpeg" />
      </audio>
    </div>
  );
});
