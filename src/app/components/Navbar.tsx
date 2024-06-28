import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>SM Locksmith service</Link>
      </div>
      <ul className={styles.navLinks}>
        
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
         <Link href="/pages/about">About Us</Link>
        </li>
        <li>
          <Link href='/pages/services'>Services</Link>
        </li>
        <li>
          <Link href='/pages/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
