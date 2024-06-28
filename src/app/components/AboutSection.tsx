import styles from '../styles/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>About Us</h2>
        <p>We are a trusted locksmith company dedicated to providing high-quality service...</p>
        <p>Our team of experienced locksmiths ensures...</p>
      </div>
    </section>
  );
};

export default AboutSection;
