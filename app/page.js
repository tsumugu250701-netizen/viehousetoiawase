import { images, works, youtubeVideos } from '../lib/content';

const benefits = [
  '建物のデザインや素材を体感できる',
  '間取りや動線を実際に確認できる',
  '光熱費や性能の仕組みがわかる',
  '家づくりの進め方を相談できる',
  '土地探しのことも相談できる'
];

const comparison = [
  ['デザイン性', '南仏風のデザイン', 'シンプルモダン'],
  ['自然素材', '漆喰・無垢材など', '一部自然素材'],
  ['断熱性能', '高断熱仕様', '最高等級の断熱性能'],
  ['光熱費削減', '省エネ設計', '太陽光＋蓄電池で0円も可'],
  ['太陽光・蓄電池', 'オプション対応', '標準搭載'],
  ['SNS映え', 'とにかく映える', 'スタイリッシュ']
];

function Header() {
  return <header className="header"><div className="container nav"><div className="logo">Viehouse</div><nav><a href="#concept">Concept</a><a href="#works">Works</a><a href="#youtube">YouTube</a><a href="#faq">FAQ</a></nav><a className="navCta" href="#reserve">来場予約</a></div></header>
}

function HeroCard({ kind, title, body, image, accent }) {
  return <article className={`heroCard ${accent}`}><img src={image} alt=""/><div className="shade"/><div className="heroContent"><p className="eyebrow">{kind}</p><h2>{title}</h2><p>{body}</p><a href="#reserve">見学する <span>›</span></a></div></article>
}

function SectionTitle({ eyebrow, title, text }) { return <div className="sectionTitle"><p>{eyebrow}</p><h2>{title}</h2>{text && <span>{text}</span>}</div> }

function PlayCard({ item }) { return <article className="videoCard"><div className="thumb"><img src={item.image} alt=""/><b>▶</b><em>{item.length}</em></div><h3>{item.title}</h3><p>再生回数 {item.views}</p></article> }

export default function Page(){ return <>
  <Header />
  <main>
    <section className="fv container">
      <p className="lead">埼玉で“自分らしい家づくり”をしたいあなたへ。</p>
      <h1>2つの暮らしを<br className="sp"/>見て、比べて、体感してください。</h1>
      <p className="sub">プロヴァンススタイルとスマートハウスの<br/>2棟のモデルハウス見学受付中</p>
      <div className="heroGrid">
        <HeroCard accent="gold" kind="PROVENCE STYLE HOUSE" title={<>プロヴァンス<br/>スタイルの家</>} body="まるで南フランスに暮らすような、心ときめくデザインの住まい。" image={images.provenceHero}/>
        <div className="centerBadge">あなたは<br/>どちらの暮らしに<br/>惹かれますか？</div>
        <HeroCard accent="blue" kind="SMART OFF-GRID HOUSE" title={<>スマート<br/>ハウス</>} body="電気を自給自足する、未来の暮らしを体感できる住まい。" image={images.smartHero}/>
      </div>
    </section>

    <section className="panel container" id="concept"><h2 className="miniTitle">モデルハウス見学でできること</h2><div className="benefits">{benefits.map((b,i)=><div className="benefit" key={b}><i>{['⌘','⌂','☼','⌁','⌂'][i]}</i><p>{b}</p></div>)}</div></section>

    <section className="container models"><SectionTitle eyebrow="MODEL HOUSE" title="それぞれのモデルハウスの特徴"/><div className="modelGrid"><article className="modelBox"><p className="label goldText">PROVENCE STYLE HOUSE</p><h3>プロヴァンススタイルの家</h3><img className="mainPhoto" src={images.provenceMain} alt=""/><ul><li>漆喰の塗り壁</li><li>無垢材の床・建具</li><li>海外から取り寄せたパーツ</li><li>経年変化を楽しむデザイン</li><li>自然素材の心地よい空間</li></ul><div className="photoRow"><img src={images.provenceSub1} alt=""/><img src={images.provenceSub2} alt=""/></div></article><article className="modelBox"><p className="label blueText">SMART OFF-GRID HOUSE</p><h3>スマートハウス</h3><img className="mainPhoto" src={images.smartMain} alt=""/><ul><li>太陽光発電システム</li><li>大容量蓄電池</li><li>高断熱・高気密</li><li>光熱費を大幅に削減</li><li>災害時も安心の自立型住宅</li></ul><div className="photoRow"><img src={images.smartSub1} alt=""/><img src={images.smartSub2} alt=""/></div></article></div></section>

    <section className="panel container"><SectionTitle eyebrow="COMPARE" title="2つの暮らしを比較してみました"/><table><thead><tr><th></th><th>プロヴァンススタイルの家</th><th>スマートハウス</th></tr></thead><tbody>{comparison.map(r=><tr key={r[0]}><th>{r[0]}</th><td>◎ {r[1]}</td><td>○ {r[2]}</td></tr>)}</tbody></table></section>

    <section className="container" id="works"><SectionTitle eyebrow="ROOM TOUR" title="人気の施工事例" text="YouTubeルームツアーで暮らしのイメージを確認できます。"/><div className="worksGrid">{works.map(w=><article className="work" key={w.title}><div><img src={w.image} alt=""/><b>{w.tag}</b><span>▶</span></div><h3>{w.title}</h3><p>{w.spec}</p></article>)}</div><div className="center"><a className="outline" href="#reserve">すべての施工事例を見る</a></div></section>

    <section className="voices container"><SectionTitle eyebrow="OWNER'S VOICE" title="お客様の声"/><div className="voiceList">{[
      ['毎日帰るのが楽しみになる家になりました！', 'プロヴァンススタイルの家 / 埼玉県 K様', images.family1],
      ['電気代が本当に安くなって驚いています！', 'スマートハウス / 埼玉県 H様', images.family2],
      ['デザインも性能も妥協しなくてよかった！', 'プロヴァンススタイルの家 / 埼玉県 S様', images.family3]
    ].map(v=><article className="voice" key={v[0]}><img src={v[2]} alt=""/><div><h3>{v[0]}</h3><p className="small">{v[1]}</p><p>面談やインテリアの相談も丁寧で、家づくりを心から楽しめました。</p></div></article>)}</div></section>

    <section className="panel container" id="youtube"><SectionTitle eyebrow="YOUTUBE" title="YouTubeで家づくりをもっと身近に" text="ルームツアーや家づくりのコツ、間取りの工夫などを発信しています。"/><div className="videoGrid">{youtubeVideos.map(v=><PlayCard key={v.title} item={v}/>)}</div><div className="center"><a className="youtubeBtn" href="https://www.youtube.com/" target="_blank">▶ Viehouse公式YouTubeチャンネルへ</a></div></section>

    <section className="container message"><img src={images.president} alt=""/><div><p className="eyebrow">MESSAGE</p><h2>代表からのメッセージ</h2><p>家は、家族の未来をつくる場所。だからこそ、デザインも性能もどちらも大切にしたい。見た目の美しさだけでなく、高性能で安心して暮らせる住まいをご提案します。</p><p className="sign">代表取締役　福島 大輔</p></div></section>

    <section className="container reserveGrid" id="reserve"><article className="gift"><p>WEBからのご予約でご来場いただくと</p><h2>5,000<span>円分</span></h2><h3>Amazonギフトカードプレゼント！</h3><p className="note">キャンペーン条件はご予約時にご確認ください。</p></article><article className="flow"><h2>ご見学の流れ</h2><div>{['ご予約','ご来場・見学','ご相談','プランのご提案'].map((f,i)=><section key={f}><b>STEP {String(i+1).padStart(2,'0')}</b><p>{f}</p></section>)}</div></article></section>

    <section className="container faq" id="faq"><SectionTitle eyebrow="FAQ" title="よくあるご質問"/>{['まだ建てるか決めていなくても見学できますか？','子ども連れでも見学できますか？','土地を探している段階でも相談できますか？','見学の所要時間はどれくらいですか？','予算の相談だけでも可能ですか？'].map(q=><details key={q}><summary>{q}</summary><p>はい、可能です。お気軽にご相談ください。</p></details>)}</section>

    <section className="bottomCta"><div className="container bottomInner"><img src={images.dining} alt=""/><div><h2>写真では伝わらない心地よさがあります。<br/>まずはモデルハウスでご体感ください。</h2><div className="ctaRow"><a className="goldBtn" href="#reserve">プロヴァンスの家を見学予約する</a><a className="blueBtn" href="#reserve">スマートハウスを見学予約する</a></div></div><aside><p>お電話でのご予約・お問い合わせはこちら</p><strong>048-XXX-XXXX</strong><span>受付時間 / 9:00〜18:00　定休日 / 水曜日</span></aside></div></section>
  </main>
  <footer><div className="container footer"><div className="logo">Viehouse</div><nav><a>施工事例</a><a>モデルハウス</a><a>家づくりのこだわり</a><a>お客様の声</a><a>会社案内</a></nav><a className="outline" href="#reserve">資料請求はこちら</a></div></footer>
</> }
