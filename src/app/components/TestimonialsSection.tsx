import styles from '../styles/TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialCard}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel magna sed."</p>
          <cite>John Doe</cite>
        </div>
        <div className={styles.testimonialCard}>
          <p>"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
          <cite>Jane Smith</cite>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
