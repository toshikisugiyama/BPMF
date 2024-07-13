export default function Home() {
  type TItem = {
    id: string;
    bpmf: string;
    pinyin: string;
    category: 'vowel' | 'consonant';
  };

  const list: TItem[] = [
    { id: '01', bpmf: 'ㄅ', pinyin: 'b', category: 'consonant' },
    { id: '02', bpmf: 'ㄆ', pinyin: 'p', category: 'consonant' },
    { id: '03', bpmf: 'ㄇ', pinyin: 'm', category: 'consonant' },
    { id: '04', bpmf: 'ㄈ', pinyin: 'f', category: 'consonant' },
    { id: '05', bpmf: 'ㄉ', pinyin: 'd', category: 'consonant' },
    { id: '06', bpmf: 'ㄊ', pinyin: 't', category: 'consonant' },
    { id: '07', bpmf: 'ㄋ', pinyin: 'n', category: 'consonant' },
    { id: '08', bpmf: 'ㄌ', pinyin: 'l', category: 'consonant' },
    { id: '09', bpmf: 'ㄍ', pinyin: 'g', category: 'consonant' },
    { id: '10', bpmf: 'ㄎ', pinyin: 'k', category: 'consonant' },
    { id: '11', bpmf: 'ㄏ', pinyin: 'h', category: 'consonant' },
    { id: '12', bpmf: 'ㄐ', pinyin: 'j', category: 'consonant' },
    { id: '13', bpmf: 'ㄑ', pinyin: 'q', category: 'consonant' },
    { id: '14', bpmf: 'ㄒ', pinyin: 'x', category: 'consonant' },
    { id: '15', bpmf: 'ㄓ', pinyin: 'zh', category: 'consonant' },
    { id: '16', bpmf: 'ㄔ', pinyin: 'ch', category: 'consonant' },
    { id: '17', bpmf: 'ㄕ', pinyin: 'sh', category: 'consonant' },
    { id: '18', bpmf: 'ㄖ', pinyin: 'r', category: 'consonant' },
    { id: '19', bpmf: 'ㄗ', pinyin: 'z', category: 'consonant' },
    { id: '20', bpmf: 'ㄘ', pinyin: 'c', category: 'consonant' },
    { id: '21', bpmf: 'ㄙ', pinyin: 's', category: 'consonant' },
    { id: '22', bpmf: 'ㄚ', pinyin: 'a', category: 'vowel' },
    { id: '23', bpmf: 'ㄛ', pinyin: 'o', category: 'vowel' },
    { id: '24', bpmf: 'ㄜ', pinyin: 'e', category: 'vowel' },
    { id: '25', bpmf: 'ㄝ', pinyin: 'ê', category: 'vowel' },
    { id: '26', bpmf: 'ㄞ', pinyin: 'ai', category: 'vowel' },
    { id: '27', bpmf: 'ㄟ', pinyin: 'ei', category: 'vowel' },
    { id: '28', bpmf: 'ㄠ', pinyin: 'ao', category: 'vowel' },
    { id: '29', bpmf: 'ㄡ', pinyin: 'ou', category: 'vowel' },
    { id: '30', bpmf: 'ㄢ', pinyin: 'an', category: 'vowel' },
    { id: '31', bpmf: 'ㄣ', pinyin: 'en', category: 'vowel' },
    { id: '32', bpmf: 'ㄤ', pinyin: 'ang', category: 'vowel' },
    { id: '33', bpmf: 'ㄥ', pinyin: 'eng', category: 'vowel' },
    { id: '34', bpmf: 'ㄦ', pinyin: 'er', category: 'vowel' },
    { id: '35', bpmf: 'ㄧ', pinyin: 'i/y', category: 'vowel' },
    { id: '36', bpmf: 'ㄨ', pinyin: 'u/w', category: 'vowel' },
    { id: '37', bpmf: 'ㄩ', pinyin: 'ü/yu', category: 'vowel' },
    { id: '38', bpmf: 'ㄭ', pinyin: '-i', category: 'vowel' },
  ];

  return (
    <main>
      <div className="mx-auto max-w-2xl p-4">
        <ul className="no-scrollbar flex aspect-square w-full snap-x snap-mandatory items-start justify-start gap-2 overflow-auto">
          {list.map((item, index) => (
            <li
              key={item.id}
              className="relative flex aspect-square w-full shrink-0 snap-center flex-col items-center justify-center gap-4 rounded-2xl bg-cyan-900 font-serif text-[15rem] font-semibold leading-none text-white"
            >
              {item.bpmf}
              <span className="absolute left-[15%] top-[14%] -translate-x-1/2 -translate-y-1/2 text-2xl font-normal">
                No.{index + 1}
              </span>
              <span className="absolute bottom-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 text-2xl">
                {item.pinyin}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
