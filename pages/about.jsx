import styles from '../styles/About.module.css';
import Link from 'next/link';
export default function About() {
  return (
    <div>
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
    <div className={styles.aboutContainer}>
    

      <h1 className={styles.mainHeading}>About</h1>

      <h2 className={styles.sectionHeading}>Why I wanted to make this project</h2>
      <p className={styles.paragraph}>
        I wanted to make this project because I am interested in the future of{' '}
        <span className={styles.highlight}>cryptocurrency</span> and I want to learn more about it. I also wanted to celebrate the fact that{' '}
        <span className={styles.highlight}>Bitcoin</span> is now over 100k!
      </p>

      <h2 className={styles.sectionHeading}>How I made this project</h2>
      <p className={styles.paragraph}>
        I made this project using <span className={styles.highlight}>Next.js</span>, a popular framework for building React applications. I used the{' '}
        <span className={styles.highlight}>CoinGecko API</span> to get the latest cryptocurrency prices.
      </p>

      <h2 className={styles.sectionHeading}>
        What I learned from making this project and how I used IS 229 principles
      </h2>
      <p className={styles.paragraph}>I incorporated the following principles:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.highlight}>HTML and CSS</span> (via Next.js) by building and styling the core pages (including tables, images, etc.)
        </li>
        <li className={styles.listItem}>
          <span className={styles.highlight}>Core JavaScript</span> using JSX and fetch to call crypto price tracking APIs
        </li>
        <li className={styles.listItem}>
          <span className={styles.highlight}>Hosting services</span> using Vercel
        </li>
      </ul>
    </div>
    </div>
  );
}
