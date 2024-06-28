import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Your Premium Locksmith Services</h1>
        <p>24/7 Emergency Locksmith Service | Residential & Commercial</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </div>
    </section>
  );
};

export default HeroSection;
