import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "LET'S LEARN ㄅㄆㄇㄈ",
  description:
    '注音符号（ちゅういんふごう、ちゅうおんふごう、繁: 注音符號、拼音: Zhùyīn Fúhào チューインフーハオ）とは、中国語の発音記号の一つ。現在は主に台湾で用いられる。先頭の四文字「ㄅㄆㄇㄈ」からボポモフォ (bopomofo) とも呼ぶ。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={inter.className}>
        <header className="sticky inset-x-0 top-0 h-14 w-full bg-cyan-900 text-white"></header>
        {children}
      </body>
    </html>
  );
}
