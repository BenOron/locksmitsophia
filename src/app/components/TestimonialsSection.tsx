import styles from '../styles/TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialCard}>
            <p>"Exceptional service! I was locked out of my house late at night, and King Locksmith came to the rescue within 20 minutes. The technician was professional, friendly, and got me back inside in no time. I couldn’t be happier with their prompt response and top-notch service. I highly recommend them for any locksmith needs!"</p>
            <cite>— Sarah W.</cite>
        </div>
        <div className={styles.testimonialCard}>
          <p>"Fast, reliable, and affordable. King Locksmith helped us upgrade our office security with new high-tech locks and an access control system. Their team was knowledgeable and made the process seamless. We now feel much more secure knowing we have the best protection in place. Thank you for the outstanding work!"</p>
          <cite>— Mark Dh</cite>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
