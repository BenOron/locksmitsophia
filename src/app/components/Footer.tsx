import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 King Locksmith. All rights reserved.</p>
        <div className={styles.socialIcons}>
          {/*<a href="#" className={styles.socialIcon}>Facebook</a>*/}
          {/*<a href="#" className={styles.socialIcon}>Twitter</a>*/}
          {/*<a href="#" className={styles.socialIcon}>Instagram</a>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
