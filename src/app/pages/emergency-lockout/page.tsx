import React from 'react';
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Importing images
import image1 from '@/app/images/1.jpg';
import image2 from '@/app/images/2.jpg';
import image3 from '@/app/images/3.jpg';
import image4 from '@/app/images/4.jpg';

const EmergencyLockoutPage = () => {
    const styles: { [key: string]: React.CSSProperties } = {
        pageContainer: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
        },
        h1: {
            fontSize: '2.5em',
            marginBottom: '20px',
            textAlign: 'center',
        },
        h2: {
            fontSize: '2em',
            marginTop: '20px',
        },
        p: {
            fontSize: '1.2em',
            lineHeight: '1.6',
        },
        imageGallery: {
            display: 'flex',
            justifyContent: 'space-between', // Distribute images evenly in the row
            flexWrap: 'wrap', // Allows wrapping on smaller screens
            marginTop: '20px',
        },
        imageContainer: {
            flex: '1 1 22%', // Each image takes up about 22% of the row, adjust to fit
            margin: '10px',  // Space between images
            textAlign: 'center',
        },
        image: {
            borderRadius: '8px',
            width: '30vh',   // Forces all images to have the same width
            height: '20vw',  // Maintains aspect ratio
        },
        ctaButton: {
            display: 'block',
            width: '50%',
            padding: '10px',
            margin: '20px auto',
            textAlign: 'center',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.2em',


        },
    };

    return (
        <div>
            <Navbar />
            <div style={styles.pageContainer}>
                <h1 style={styles.h1}>Emergency Lockout Services</h1>
                <p style={styles.p}>
                    Locked out? We offer 24/7 emergency assistance to get you back inside quickly and safely.
                </p>

                <h2 style={styles.h2}>Residential Locksmith</h2>
                <p style={styles.p}>
                    We provide installation, repair, and replacement of locks for your home, ensuring peace of mind and safety for your family.
                </p>

                <h2 style={styles.h2}>Commercial Locksmith</h2>
                <p style={styles.p}>
                    Tailored solutions for businesses, including high-security locks, access control systems, and master key systems to protect your assets.
                </p>

                <h2 style={styles.h2}>Automotive Locksmith</h2>
                <p style={styles.p}>
                    Whether you're locked out of your car or need a key replacement, our skilled technicians can help.
                </p>

                <h2 style={styles.h2}>Security Consultations</h2>
                <p style={styles.p}>
                    We assess your property and recommend the best security solutions tailored to your needs.
                </p>
                <a style={styles.ctaButton} href="tel:+17077423474">707-742-3474</a>
                {/* Image Gallery Section */}
                <div style={styles.imageGallery}>
                    <div style={styles.imageContainer}>
                        <Image
                            src={image1}
                            alt="Emergency lockout service"
                            style={styles.image}

                        />
                    </div>
                    <div style={styles.imageContainer}>
                        <Image
                            src={image2}
                            alt="Residential locksmith services"
                            style={styles.image}
                        />
                    </div>
                    <div style={styles.imageContainer}>
                        <Image
                            src={image3}
                            alt="Commercial locksmith services"
                            style={styles.image}
                        />
                    </div>
                    <div style={styles.imageContainer}>
                        <Image
                            src={image4}
                            alt="Automotive locksmith services"
                            style={styles.image}

                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EmergencyLockoutPage;
