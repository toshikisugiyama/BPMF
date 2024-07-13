import type { Metadata } from 'next';
import './globals.css';
import { BpmfProvider } from './provider/BpmfProvider';

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
    <html lang="en" className="no-scrollbar min-h-screen">
      <body className="min-h-screen bg-white">
        <header className="sticky top-0 h-16 w-full bg-teal-900 text-white shadow"></header>
        <BpmfProvider>{children}</BpmfProvider>
      </body>
    </html>
  );
}
