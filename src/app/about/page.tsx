import type { Metadata } from 'next';
import JournalShell from '@/components/JournalShell';
import styles from '@/components/Journal.module.scss';

export const metadata:Metadata={title:'About & contact — The Roam Report'};
export default function AboutPage() {
  return <JournalShell active="about"><section className={styles.aboutPage}>
    <div className={styles.authorIntro}><span className={styles.kicker}>THE PERSON BEHIND THE POSTCARDS</span><p className={styles.authorName}>Hi, I’m<br /><em>Naiá.</em></p><span className={styles.authorMotto}>Currently roaming.<br />Eventually home.</span></div>
    <div className={styles.aboutRow}><h1>About</h1><div><p>Hi, I’m Naiá — a slow traveler with a soft spot for train stations, street snacks, and places that don’t make the guidebooks. The Roam Report is my way of remembering: the long walks, wrong turns, and all the quiet in-between moments that make a place feel real.</p><p>Currently roaming. Eventually home.</p></div></div>
    <div id="contact" className={styles.aboutRow}><h2>Contact</h2><p>Want to collaborate, pitch a trip, or say hi? Send a note to <a href="mailto:naia@theroamreport.com">naia@theroamreport.com</a> — I check it more often than I check train times.</p></div>
  </section></JournalShell>;
}
