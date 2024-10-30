import Image from 'next/image';
import styles from '../styles/LocksmithGallery.module.css'; // Adjust the path as per your project structure
import img1 from '../images/locksmith-1.jpg';
import img2 from '../images/locksmith-2.jpg';
import img3 from '../images/locksmith-3.jpg';
import image1 from '@/app/images/1.jpg';
import image2 from '@/app/images/2.jpg';
import image3 from '@/app/images/3.jpg';
import image4 from '@/app/images/4.jpg';

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
        <div className={styles['gallery-item']}>
          <Image
            src={image1}
            alt="Locksmith Service 4"
            width={300}
            height={200}
          />
        </div>
          <div className={styles['gallery-item']}>
            <Image
              src={image2}
              alt="Locksmith Service 5"
              width={300}
              height={200}
            />
            </div>
            <div className={styles['gallery-item']}>
                <Image
                    src={image3}
                    alt="Locksmith Service 6"
                    width={300}
                    height={200}
                />
            </div>
              <div className={styles['gallery-item']}>
                <Image
                    src={image4}
                    alt="Locksmith Service 7"
                    width={300}
                    height={200}
                />
              </div>
      </div>
    </div>
  );
};

export default LocksmithGallery;
