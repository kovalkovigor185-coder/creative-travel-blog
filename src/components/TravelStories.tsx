

import Image from 'next/image';
import Link from 'next/link';
import { stories as allStories } from '@/data/stories';
import styles from './TravelStories.module.scss';

const stories = allStories.slice(0,4);

const destinations = [
  { name: 'Oaxaca', country: 'Mexico', date: 'MAR 12 — MAR 25', note: 'For mole, markets, and Monte Albán.', image: 'oaxaca.png' },
  { name: 'Rome', country: 'Italy', date: 'JUN 09 — JUN 30', note: 'Evening walks and neighborhood trattorias.', image: 'rome.png' },
  { name: 'Lofoten', country: 'Norway', date: 'OCT 20 — OCT 28', note: 'Cold air, quiet harbors, and drying cod.', image: 'lofoten.png' },
  { name: 'Kagoshima', country: 'Japan', date: 'DEC 03 — DEC 21', note: 'Admire Sakurajima from the ferry.', image: 'kagoshima.png' },
];

export default function TravelStories() {
  return <>
    <section id="stories" className={styles.stories}>
      <div className={styles.sectionHead}><div><span className={styles.eyebrow}>POSTCARDS FROM THE EVERYDAY</span><h2>Latest travel<br /><em>stories.</em></h2></div><p>A few places.<br />A thousand little reasons to go.</p></div>
      <div className={styles.cards}>{stories.map((item,i)=><Link className={styles.card} key={item.slug} href={`/article/${item.slug}/`}>
        <span className={item.thumbnailOnly ? styles.thumbnailPhoto : styles.photo}><Image src={`/images/${item.image}`} alt={item.title} width={item.thumbnailOnly?26:210} height={item.thumbnailOnly?26:234} /><span className={styles.open}>Read story ↗</span></span>
        <span className={styles.cardMeta}><span>{item.date}</span><span>0{i+1}</span></span><h3>{item.title}</h3><span className={styles.place}>{item.place}<span>↗</span></span>
      </Link>)}</div>
      <div className={styles.underCards}><span>GOOD STORIES ARE WORTH THE DETOUR.</span><Link href="/archive/">View all articles <span>↗</span></Link></div>
    </section>
    <section id="itinerary" className={styles.itinerary}>
      <div className={styles.itineraryHead}><span className={styles.eyebrow}>THE NEXT CHAPTERS</span><h2>Still so much<br /><em>to see.</em></h2><p>Upcoming itinerary</p><span className={styles.stamp} aria-hidden="true">STAY<br />CURIOUS<br />✳</span></div>
      <div className={styles.destinations}>{destinations.map((item,i)=><article className={styles.destination} key={item.name} tabIndex={0}>
        <span className={styles.number}>0{i+1}</span><div className={styles.destinationText}><span className={styles.date}>{item.date}</span><h3>{item.name}<span>{item.country}</span></h3><p>{item.note}</p></div><Image src={`/images/${item.image}`} width={256} height={280} alt={`Travel photograph from ${item.name}, ${item.country}`} /><span className={styles.destinationArrow} aria-hidden="true">↗</span>
      </article>)}</div>
    </section>
    <section id="about" className={styles.about}><span className={styles.eyebrow}>A NOTE FROM THE ROAD</span><h2>Collect moments.<br /><em>Leave room for wonder.</em></h2><p>The Roam Report is a creative travel journal about the things between the destinations. The early train, the unplanned stop, the afternoon that turned into a story.</p><Link href="/about/">About Naiá & contact <span>↗</span></Link></section>

  </>;
}
