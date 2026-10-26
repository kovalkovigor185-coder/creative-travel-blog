'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from './TravelStories.module.scss';

const stories = [
  { title: 'Finding Stillness in the Hills of San Cristóbal', image: 'san-cristobal.png', place: 'CHIAPAS, MEXICO', date: 'OCT 10, 2025', kind: 'Slow travel', text: 'Some places ask you to slow down before you have even unpacked. A quiet courtyard, an orange wall warmed by the afternoon sun, mountains behind the trees. San Cristóbal is a reminder to leave a little room in the day for nothing at all.' },
  { title: 'Wandering Through the Streets of Rome', image: 'rome-story.png', place: 'ROME, ITALY', date: 'OCT 02, 2025', kind: 'City journal', text: 'Take the street that looks interesting. Stop for a small coffee. Let the afternoon turn into a long walk. Rome rewards curiosity: a quiet doorway, a patch of warm stone, a familiar monument seen from an unfamiliar corner.' },
  { title: 'Driving Across Monument Valley', image: 'monument-valley.png', place: 'ARIZONA, USA', date: 'SEP 17, 2025', kind: 'On the road', text: 'The landscape gets bigger and the conversation gets quieter. Red rock rises beyond the windscreen, the road stretches ahead, and the best part of the journey is simply being there. Leave time to pull over. The view is worth it.' },
];

const destinations = [
  { name: 'Oaxaca', country: 'Mexico', date: 'MAR 12 — MAR 25', note: 'For mole, markets, and Monte Albán.', image: 'oaxaca.png' },
  { name: 'Rome', country: 'Italy', date: 'JUN 09 — JUN 30', note: 'Evening walks and neighborhood trattorias.', image: 'rome.png' },
  { name: 'Lofoten', country: 'Norway', date: 'OCT 20 — OCT 28', note: 'Cold air, quiet harbors, and drying cod.', image: 'lofoten.png' },
  { name: 'Kagoshima', country: 'Japan', date: 'DEC 03 — DEC 21', note: 'Admire Sakurajima from the ferry.', image: 'kagoshima.png' },
];

export default function TravelStories() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  function openStory(index: number) { setSelected(index); dialog.current?.showModal(); }
  const story = stories[selected];

  return <>
    <section id="stories" className={styles.stories}>
      <div className={styles.sectionHead}><div><span className={styles.eyebrow}>POSTCARDS FROM THE EVERYDAY</span><h2>Latest travel<br /><em>stories.</em></h2></div><p>A few places.<br />A thousand little reasons to go.</p></div>
      <div className={styles.cards}>{stories.map((item,i)=><button className={styles.card} key={item.title} onClick={()=>openStory(i)}>
        <span className={styles.photo}><Image src={`/images/${item.image}`} alt={['A woman walking toward an orange house in the hills of San Cristóbal','The Colosseum framed by trees in Rome','Monument Valley seen through a car window'][i]} width={210} height={234} /><span className={styles.open}>Read story ↗</span></span>
        <span className={styles.cardMeta}><span>{item.date}</span><span>0{i+1}</span></span><h3>{item.title}</h3><span className={styles.place}>{item.place}<span>↗</span></span>
      </button>)}</div>
      <div className={styles.underCards}><span>GOOD STORIES ARE WORTH THE DETOUR.</span><a href="#journey">Follow the road <span>↓</span></a></div>
    </section>
    <section id="itinerary" className={styles.itinerary}>
      <div className={styles.itineraryHead}><span className={styles.eyebrow}>THE NEXT CHAPTERS</span><h2>Still so much<br /><em>to see.</em></h2><p>Upcoming itinerary</p><span className={styles.stamp} aria-hidden="true">STAY<br />CURIOUS<br />✳</span></div>
      <div className={styles.destinations}>{destinations.map((item,i)=><article className={styles.destination} key={item.name} tabIndex={0}>
        <span className={styles.number}>0{i+1}</span><div className={styles.destinationText}><span className={styles.date}>{item.date}</span><h3>{item.name}<span>{item.country}</span></h3><p>{item.note}</p></div><Image src={`/images/${item.image}`} width={256} height={280} alt={`Travel photograph from ${item.name}, ${item.country}`} /><span className={styles.destinationArrow} aria-hidden="true">↗</span>
      </article>)}</div>
    </section>
    <section id="about" className={styles.about}><span className={styles.eyebrow}>A NOTE FROM THE ROAD</span><h2>Collect moments.<br /><em>Leave room for wonder.</em></h2><p>The Roam Report is a creative travel journal about the things between the destinations. The early train, the unplanned stop, the afternoon that turned into a story.</p><a href="#stories">Read the field notes <span>↗</span></a></section>
    <dialog ref={dialog} className={styles.dialog} onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}}>
      <button className={styles.close} onClick={()=>dialog.current?.close()} aria-label="Close story">×</button><div className={styles.dialogContent}><span className={styles.eyebrow}>{story.kind} / {story.date}</span><h2>{story.title}</h2><Image src={`/images/${story.image}`} width={210} height={234} alt={story.place} /><p>{story.text}</p><span className={styles.eyebrow}>A SHORT FIELD NOTE / THE ROAM REPORT</span></div>
    </dialog>
  </>;
}
