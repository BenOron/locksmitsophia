import styles from '../styles/ServicesSection.module.css';

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Emergency Lockout</h3>
          <p>24/7 emergency lockout service.</p>
          <a href="/services/emergency-lockout">Read More</a>
        </div>
        <div className={styles.serviceCard}>
          <h3>Lock Installation</h3>
          <p>Installation of new locks for homes and businesses.</p>
          <a href="/services/lock-installation">Read More</a>
        </div>
        {/* Add more service cards as needed */}
      </div>
    </section>
  );
};

export default ServicesSection;
