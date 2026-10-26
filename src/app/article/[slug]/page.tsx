import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JournalShell from '@/components/JournalShell';
import JournalCards from '@/components/JournalCards';
import { stories } from '@/data/stories';
import styles from '@/components/Journal.module.scss';

export const dynamicParams=false;
export function generateStaticParams(){return stories.map(story=>({slug:story.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const story=stories.find(item=>item.slug===slug);return {title:story?`${story.title} — The Roam Report`:'Story not found'};}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const story=stories.find(item=>item.slug===slug);
  if(!story)notFound();
  const related=stories.filter(item=>item.slug!==slug).slice(0,4);
  return <JournalShell active="articles"><article className={styles.article}>
    <header className={styles.articleHeader}><Link className={styles.back} href="/archive/">← All travel stories</Link><span className={styles.kicker}>{story.category}</span><h1>{story.title}</h1><div className={styles.articleMeta}><time>{story.date}</time><span>◎ {story.place}</span></div></header>
    {!story.thumbnailOnly&&<Image className={styles.articlePhoto} src={`/images/${story.image}`} width={210} height={234} alt={story.title}/>}
    <div className={styles.articleBody}>{story.paragraphs.map((text,index)=><p key={index}>{text}</p>)}</div>
    <div className={styles.articleEnd}><span aria-hidden="true">✳</span><p>Keep a little room for the unexpected.</p><Link href="/#journey">Back to the road ↗</Link></div>
  </article><section className={styles.related}><span className={styles.kicker}>THERE’S ALWAYS ANOTHER TURN</span><h2>Latest travel stories</h2><JournalCards items={related}/><Link href="/archive/" className={styles.allStories}>View all articles ↗</Link></section></JournalShell>;
}
