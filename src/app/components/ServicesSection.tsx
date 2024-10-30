import styles from '../styles/ServicesSection.module.css';

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Emergency Lockout ?</h3>
          <p>24/7 emergency lockout service.</p>
          <a href="/pages/emergency-lockout">Read More</a>
        </div>
        {/* Add more service cards as needed */}
      </div>
    </section>
  );
};

export default ServicesSection;
