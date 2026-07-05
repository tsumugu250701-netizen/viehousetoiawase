export const images = {
  // 実際のモデルハウス画像
  provenceHero: '/images/provence-hero.png',
  smartHero: '/images/smart-hero.png',

  // ここから下は仮画像です。内観写真が用意できたら同じ要領で差し替えできます。
  provenceMain: '/images/provence-hero.png',
  provenceSub1: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=90',
  provenceSub2: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=90',

  smartMain: '/images/smart-hero.png',
  smartSub1: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=90',
  smartSub2: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=90',

  dining: 'https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1400&q=90',
  president: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=900&q=90',
  family1: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=90',
  family2: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=90',
  family3: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=90',

  work1: '/images/provence-hero.png',
  work2: '/images/smart-hero.png',
  work3: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=90',
  work4: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=90'
};

export const youtubeVideos = [
  { title: '南仏スタイルのかわいい家', length: '12:45', views: '2.1万', image: images.provenceHero },
  { title: '電気代0円を目指す家', length: '14:20', views: '1.8万', image: images.smartHero },
  { title: '家づくりで後悔しないために', length: '13:15', views: '1.5万', image: images.president }
];

export const works = [
  { title: '南仏スタイルのかわいい家', tag: 'PROVENCE', spec: 'プロヴァンス / 漆喰 / 無垢材', image: images.work1 },
  { title: '電気代0円スマートハウス', tag: 'SMART HOUSE', spec: '太陽光 / 蓄電池 / 高性能', image: images.work2 },
  { title: 'カフェのようなアンティークハウス', tag: 'PROVENCE', spec: 'アンティーク / 漆喰', image: images.work3 },
  { title: '大空間リビングの高性能住宅', tag: 'SMART HOUSE', spec: '高断熱 / 太陽光', image: images.work4 }
];
