import Link from 'next/link';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Your Premium Locksmith Services</h1>
        <p>24/7 Emergency Locksmith Service | Residential & Commercial</p>
        <Link href='/pages/contact'>
          <div><a className={styles.ctaButton}>Contact Us</a></div>
          </Link>
      </div>
    </section>
  );
};

export default HeroSection;
