import Image from 'next/image';
import styles from '../styles/LocksmithGallery.module.css'; // Adjust the path as per your project structure
import img1 from '../images/locksmith-1.jpg';
import img2 from '../images/locksmith-2.jpg';
import img3 from '../images/locksmith-3.jpg';

const LocksmithGallery = () => {
  return (
    <div className={styles['scrolling-gallery']}>
      <div className={styles['gallery-container']}>
        <div className={styles['gallery-item']}>
          <Image
            src={img1}
            alt="Locksmith Service 1"
            width={300}
            height={200}
          />
        </div>
        <div className={styles['gallery-item']}>
          <Image
            src={img2}
            alt="Locksmith Service 2"
            width={300}
            height={200}
          />
        </div>
        <div className={styles['gallery-item']}>
          <Image
            src={img3}
            alt="Locksmith Service 3"
            width={300}
            height={200}
          />
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </div>
  );
};

export default LocksmithGallery;
