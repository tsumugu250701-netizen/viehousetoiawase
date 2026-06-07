import './styles.css';

export const metadata = {
  title: 'Vie house｜2つのモデルハウス見学予約',
  description: 'プロヴァンススタイルの家とスマートハウス。Vie houseの2つの暮らしを見て、比べて、体感できるモデルハウス見学LPです。',
  openGraph: {
    title: 'Vie house｜2つのモデルハウス見学予約',
    description: 'プロヴァンススタイルの家とスマートハウスを見て、比べて、体感してください。',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
