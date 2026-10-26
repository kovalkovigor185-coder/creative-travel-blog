import Image from 'next/image';
import Link from 'next/link';
import { type Story } from '@/data/stories';
import styles from './Journal.module.scss';

export default function JournalCards({items}:{items:Story[]}) {
  return <div className={styles.cardGrid}>{items.map((story,index)=><Link className={styles.storyCard} href={`/article/${story.slug}/`} key={story.slug}>
    {story.thumbnailOnly ? <div className={styles.fieldNote}><span className={styles.index}>{String(index+1).padStart(2,'0')}</span><span className={styles.category}>{story.category}</span><Image src={`/images/${story.image}`} width={26} height={26} alt="" /><span className={styles.fieldPlace}>{story.place}</span></div> : <div className={styles.cardPhoto}><Image src={`/images/${story.image}`} width={210} height={234} alt={story.title} /></div>}
    <div className={styles.cardText}><time>{story.date}</time><h2>{story.title}</h2><span className={styles.read}>Read the story <span>↗</span></span></div>
  </Link>)}</div>;
}
