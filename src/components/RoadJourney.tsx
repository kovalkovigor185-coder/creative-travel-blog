'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import RouteMap from './RouteMap';
import TravelStories from './TravelStories';
import styles from './RoadJourney.module.scss';

const chapters = [
  { name: 'The coast is calling.', place: '01 / THE DEPARTURE', note: 'Windows down. A full tank. Absolutely nowhere to be.', coordinate: '41.4545° S / 148.2864° E', distance: '000', mood: 'Salt in the air' },
  { name: 'Take the long way.', place: '02 / A LITTLE DETOUR', note: 'The best places rarely show up on the itinerary.', coordinate: '41.3821° S / 148.1752° E', distance: '084', mood: 'A wrong turn, well taken' },
  { name: 'Stay a little longer.', place: '03 / SLOW MORNINGS', note: 'Pull over for the view. Stay for everything else.', coordinate: '41.2650° S / 148.0923° E', distance: '167', mood: 'Coffee with a view' },
  { name: 'Somewhere feels like home.', place: '04 / THE ARRIVAL', note: 'A new horizon. Another story worth bringing back.', coordinate: '41.1290° S / 147.9860° E', distance: '248', mood: 'Just one more mile' },
];

export default function RoadJourney() {
  const root = useRef<HTMLElement>(null);
  const journey = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const meter = useRef<HTMLSpanElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [chapter, setChapter] = useState(0);
  const [motionOff, setMotionOff] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add({ desktop: '(min-width: 761px)', mobile: '(max-width: 760px)', reduce: '(prefers-reduced-motion: reduce)' }, (context) => {
        const { mobile, reduce } = context.conditions!;
        const car = root.current!.querySelector('[data-car]');
        const trail = root.current!.querySelector<SVGPathElement>('[data-road-trail]')!;
        const svg = root.current!.querySelector<SVGSVGElement>('.route-map')!;
        const length = trail.getTotalLength();
        gsap.set(trail, { strokeDasharray: length, strokeDashoffset: length });
        if (reduce || motionOff) {
          gsap.set(car, { motionPath: { path: trail, align: trail, alignOrigin: [.5, .5], autoRotate: true, start: .42, end: .42 } });
          gsap.set(trail, { strokeDashoffset: length * .58 });
          if (meter.current) meter.current.textContent = '104';
          if (progress.current) progress.current.style.transform = 'scaleX(.42)';
          setChapter(1);
          return;
        }
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: journey.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: .65,
            invalidateOnRefresh: true,
            onUpdate(self) { trigger.current = self; },
          },
          onUpdate() {
            const value = timeline.progress();
            setChapter(Math.min(3, Math.floor(value * 4)));
            if (meter.current) meter.current.textContent = String(Math.round(value * 248)).padStart(3, '0');
            if (progress.current) progress.current.style.transform = `scaleX(${value})`;
            if (mobile) {
              const point = trail.getPointAtLength(value * length);
              const x = point.x - 375;
              const y = point.y - 570;
              svg.setAttribute('viewBox', `${x} ${y} 750 800`);
            }
          },
        });
        timeline.to(car, { motionPath: { path: trail, align: trail, alignOrigin: [.5, .5], autoRotate: true }, ease: 'none', duration: 1 }, 0)
          .to(trail, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0);
        trigger.current = timeline.scrollTrigger ?? null;
        if (mobile) svg.setAttribute('viewBox', '-255 170 750 800');
        ScrollTrigger.refresh();
        return () => { svg.setAttribute('viewBox', '0 0 1400 900'); trigger.current = null; };
      });
    }, root);
    return () => { media.revert(); ctx.revert(); };
  }, [motionOff]);

  function goToChapter(index: number) {
    const active = trigger.current;
    if (!active) return;
    window.scrollTo({ top: active.start + (active.end - active.start) * (index / 4 + .08), behavior: 'smooth' });
  }

  function toggleMotion() {
    if (journey.current) window.scrollTo({ top: journey.current.offsetTop, behavior: 'instant' });
    setMotionOff(value => !value);
  }

  return <main ref={root} className={styles.root}>
    <a className={styles.skip} href="#journey">Skip to the journey</a>
    <header className={styles.header}>
      <a className={styles.wordmark} href="#">the roam report<span>®</span></a>
      <nav className={styles.edition} aria-label="Main navigation"><Link href="/" aria-current="page">Home</Link><Link href="/archive/">Articles</Link><a href="#itinerary">Itinerary</a><Link href="/about/">About</Link></nav>
      <a className={styles.startLink} href="#journey">Let’s take a detour <span>↘</span></a>
    </header>
    <section className={styles.intro}>
      <div className={styles.introTop}><span>A JOURNAL FOR THE WANDERERS</span><span>EST. 2025 / ALWAYS EN ROUTE</span></div>
      <h1>The Roam<br /><span>Report.</span><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 3V97M3 50H97M17 17L83 83M17 83L83 17" stroke="currentColor" strokeWidth="9" /></svg></h1>
      <div className={styles.introBottom}>
        <p>Long walks. Wrong turns.<br />Everyday discoveries.</p>
        <p className={styles.invitation}>Some stories are better<br />when you take the long way.</p>
        <a className={styles.roundLink} href="#journey" aria-label="Start the road trip">↓</a>
      </div>
      <div className={styles.departure}><span className={styles.dot} /> CURRENTLY SOMEWHERE BETWEEN HERE & THERE <span>↗</span></div>
    </section>
    <section ref={journey} id="journey" className={`${styles.journey} ${motionOff ? styles.motionOff : ''}`} aria-label="Interactive illustrated road trip">
      <div className={styles.sticky} data-chapter={chapter}>
        <div className={styles.sceneHeading}><span>THE ART OF GETTING LOST</span><button className={styles.motionButton} aria-pressed={motionOff} onClick={toggleMotion}>{motionOff ? '↗' : 'Ⅱ'} <span>{motionOff ? 'Enable motion' : 'Reduce motion'}</span></button></div>
        <div className={styles.map}><RouteMap /></div>
        <div className={styles.compass} aria-hidden="true"><span>N</span><svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth=".8" /><path d="M30 8 36 30 30 52 24 30Z" fill="#f8f1e2" stroke="currentColor" /><path d="M30 8 36 30H30Z" fill="currentColor" /></svg></div>
        <div className={styles.chapterCard} key={chapter}>
          <span className={styles.chapterLabel}>{chapters[chapter].place}</span>
          <h2>{chapters[chapter].name}</h2>
          <p>{chapters[chapter].note}</p>
          <div className={styles.cardFooter}><span className={styles.pin}>✳</span><span>{chapters[chapter].mood}</span></div>
        </div>
        <div className={styles.mapCaption}><span>ILLUSTRATED FIELD MAP</span><span>NOT ALL WHO WANDER ARE LOST.</span></div>
        <div className={styles.dashboard}>
          <div className={styles.distance}><span ref={meter}>000</span><span>KM OF<br />GOOD DETOURS</span></div>
          <nav className={styles.stops} aria-label="Trip chapters">{chapters.map((item,index)=><button key={item.place} aria-label={`Jump to ${item.name}`} aria-current={chapter === index ? 'step' : undefined} onClick={()=>goToChapter(index)} disabled={motionOff}><span>0{index+1}</span><i /></button>)}</nav>
          <span className={styles.scrollHint}>SCROLL TO WANDER <span>↓</span></span>
          <div className={styles.progress} ref={progress} />
        </div>
      </div>
    </section>
    <TravelStories />
    <section className={styles.arrival} id="arrival">
      <span className={styles.eyebrow}>END OF THIS TRAIL. START OF ANOTHER.</span>
      <h2>Less rush.<br /><em>More wonder.</em></h2>
      <p>For the places you didn’t plan to find.<br />And the moments you’re glad you stopped for.</p>
      <a href="#journey" className={styles.replay}>Take the drive again <span>↗</span></a>
      <footer><Link href="/">The Roam Report</Link><nav aria-label="Footer navigation"><Link href="/archive/">Articles</Link><Link href="/about/">About</Link><Link href="/about/#contact">Contact</Link></nav><span>© 2026</span></footer>
    </section>
  </main>;
}
