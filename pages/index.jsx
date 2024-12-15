import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>


      <header className={styles.navbar}>
        <div className={styles.header}>
          <h2>Srikar's IS 229 Final Project</h2>
        </div>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/track-prices">Track Prices</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Crypto Tracker</h1>

        <p className={styles.description}>
          This is my (Srikar Manikonda's) crypto tracker app for my IS 229 final project.
          While crypto may be controversial, I'm excited about Bitcoin hitting 100k!
        </p>

        <p className={styles.description}>
          Explore the pages above via the navigation bar to learn more about my project!
        </p>
        
        {/* Image component */}
        <Image 
          src="/bitcoin.png" 
          alt="Bitcoin" 
          width={500} 
          height={500} 
          className={styles.bitcoinImage} 
        />
      </main>

      <footer className={styles.footer}>
        <div>Powered by {'Srikar Manikonda'}</div>
      </footer>
    </div>
  );
}
