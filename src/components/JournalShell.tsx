import Link from 'next/link';
import styles from './Journal.module.scss';

export function JournalFooter() {
  return <footer className={styles.footer}><p>End of the trail</p><h2>Less rush.<br />More wonder.</h2><nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/archive/">Articles</Link><Link href="/about/">About</Link><Link href="/about/#contact">Contact</Link></nav><Link className={styles.driveLink} href="/#journey">Take the scenic route ↗</Link><small>Copyright ©2026 · The Roam Report</small></footer>;
}

export default function JournalShell({children,active}:{children:React.ReactNode;active:'articles'|'about'}) {
  return <div className={styles.shell}>
    <a className={styles.skip} href="#journal-content">Skip to content</a>
    <aside className={styles.sidebar}>
      <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/archive/" aria-current={active==='articles'?'page':undefined}>Articles</Link><Link href="/about/" aria-current={active==='about'?'page':undefined}>About</Link></nav>
      <div className={styles.identity}><Link href="/" className={styles.brand}>The Roam<br />Report</Link><span className={styles.rosette} aria-hidden="true">✳</span><p>Stories and photos of long walks,<br />wrong turns, and everyday discoveries</p></div>
      <div className={styles.location}><span>Currently in</span><strong>◎ Dallol, Ethiopia</strong><span>14.2417° N · 40.3169° E</span></div>
    </aside>
    <main id="journal-content" className={styles.content}>{children}<JournalFooter /></main>
  </div>;
}
