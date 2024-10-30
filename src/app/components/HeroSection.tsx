import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Your Trusted Locksmith Experts</h1>
        <h2>24/7 Emergency, Residential & Commercial Services</h2>
        <p>
          When you need a locksmith, time and reliability matter. Whether you're locked out, need new locks, or require high-security solutions, <strong>King Locksmith</strong> is here to help.
        </p>
        <ul>
          <li><strong>Certified, Skilled Professionals:</strong> Our expert locksmiths are fully trained in the latest technologies to provide efficient and secure services.</li>
          <li><strong>Rapid Response, Anytime:</strong> We offer 24/7 emergency services with fast response times to minimize disruption and restore your peace of mind quickly.</li>
          <li><strong>Customer-First Approach:</strong> We prioritize your satisfaction, ensuring that every job is done right, with high-quality workmanship and care.</li>
        </ul>
        <p>
          For fast, dependable locksmith services, trust <strong>King Locksmith</strong> to keep you safe and secure—wherever and whenever you need us.
        </p>
        <p><strong>Call now for immediate assistance!</strong></p>
        {/*<Link href="/contact">*/}
        {/*  <a className={styles.ctaButton}>Contact Us</a>*/}
        {/*</Link>*/}
        <a className={styles.ctaButton} href="tel:+17077423474">707-742-3474</a>
      </div>
    </section>
  );
};

export default HeroSection;