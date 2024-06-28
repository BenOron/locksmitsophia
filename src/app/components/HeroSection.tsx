import Link from 'next/link';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Your Premium Locksmith Services</h1>
        <p>24/7 Emergency Locksmith Service | Residential & Commercial</p>
          <p className={styles.ctaButton}>Call us at <a href="tel:+17077423474">707-742-3474</a></p>
      </div>
    </section>
  );
};

export default HeroSection;
