import type { Metadata } from 'next';
import JournalShell from '@/components/JournalShell';
import JournalCards from '@/components/JournalCards';
import { stories } from '@/data/stories';
import styles from '@/components/Journal.module.scss';
import Image from 'next/image';

export const metadata:Metadata={title:'All travel stories — The Roam Report'};
export default function ArchivePage() {
  return <JournalShell active="articles"><section className={styles.archive}><span className={styles.kicker}>THE COMPLETE FIELD JOURNAL</span><h1>All travel stories</h1><p className={styles.archiveIntro}>Eight stops. A collection of long walks, wrong turns, and things worth remembering.</p><JournalCards items={stories}/></section><div className={styles.village}><Image src="/images/village.png" alt="A white village house seen through warm autumn foliage" width={210} height={210}/></div></JournalShell>;
}
