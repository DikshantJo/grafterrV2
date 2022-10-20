import React from "react";
import Image from "next/image";
import Link from "next/link";

//Components

//Images
import ePOSHybrid from "../../public/grafterrImage/mainIndex/ePOSHybrid.png";
import ellipse228 from "../../public/grafterrImage/mainIndex/ellipse228.png";
import heroPictureTablet from "../../public/grafterrImage/mainIndex/heroPictureTablet.png";
import vector1 from "../../public/grafterrImage/mainIndex/vector1.svg";
import vector3 from "../../public/grafterrImage/mainIndex/vector3.svg";
import vector5 from "../../public/grafterrImage/mainIndex/vector5.svg";
import rectangle2 from "../../public/grafterrImage/mainIndex/rectangle2.svg";
import ellipse6 from "../../public/grafterrImage/mainIndex/ellipse6.svg";
import grafterrIcon from "../../public/grafterrImage/mainIndex/grafterrIcon.svg";

//Styling CSS
import styles from "../../styles/mainIndexcss/businessProducts.module.css";

const BusinessProducts = () => {
  return (
    <div
      id="BusinessProducts"
      className={`${styles.productContainer} flex flex-col items-center relative`}
    >
      <div className="pt-24 flex flex-col items-center">
        <h1 className={`${styles.productHeading}`}>
          Choose a product <br className="block md:hidden" /> thats right for
          you.
        </h1>
        <p className={`${styles.productContent} pt-4`}>
          There's two different sides of <br className="block md:hidden" />
          Grafterr, GO! a payment product <br className="block md:hidden" />
          for small businesses <br className="hidden lg:block" /> and
          Professional, <br className="block md:hidden" />a powerful ePOS &
          management
          <br className="block md:hidden" /> platform for F&B operators
        </p>
      </div>
      <div
        className={`${styles.cardContainer} mt-16 flex flex-wrap justify-center`}
      >
        {/* Go Card */}
        <div
          className={`${styles.productCardI} flex flex-col items-center relative mb-10`}
        >
          <div className="flex justify-center items-center">
            <div className={styles.grafterIcon}>
              <Image
                src={grafterrIcon}
                alt="grafterr Logo"
                objectFit="contain"
              />
            </div>
            <h1 className={`${styles.cardHeadingI} ml-2`}>GO!</h1>
          </div>
          <p className={`${styles.cardHeadingII}`}>Sell anything, anywhere</p>
          <p className={`${styles.cardContent} mt-4`}>
            No fixed costs, no monthly fees.
          </p>
          <p className={`${styles.cardContent}`}>
            The easiest way to take card payments
          </p>
          <div className={`${styles.arcImage} absolute`}>
            <Image src={ellipse228} alt="card hero tablet" />
          </div>
          <div className={`${styles.tablet} my-6`}>
            <Image src={heroPictureTablet} alt="card hero tablet" />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center mt-auto mb-16 lg:mb-10">
            <button className={styles.downloadBtn}>
              <Link href="/go">Download Now</Link>
            </button>
            <button className={styles.learnMoreBtnI}>
              <Link href="/#grafterr-go">Learn More</Link>
            </button>
          </div>
        </div>

        {/* Professional Card */}
        <div
          className={`${styles.productCardII} flex flex-col items-center mb-10`}
        >
          <div className="flex justify-center items-center">
            <div className={styles.grafterIcon}>
              <Image
                src={grafterrIcon}
                alt="grafterr Logo"
                objectFit="contain"
              />
            </div>
            <h1 className={`${styles.cardHeadingI} ml-2`}>Professional</h1>
          </div>

          <p className={`${styles.cardHeadingII} pb-5`}>
            Technology for hospitality <br className=" hidden lg:block" /> &
            catering professionals
          </p>
          <div className={`${styles.eposImage} my-4`}>
            <Image src={ePOSHybrid} alt="card epos hybrid" />
          </div>
          <p className={`${styles.posContent} pt-4`}>Powered by ePOS Hybrid</p>
          <div
            className={`${styles.itemContainer} flex flex-wrap justify-center mt-4`}
          >
            <div className="flex items-center mb-1 mr-4 order-1">
              <div className={`${styles.CardImageContainer} flex items-center`}>
                <Image src={ellipse6} alt="ellipse6" objectFit="contain" />
              </div>
              <p className={styles.itemsNames}>POS</p>
            </div>
            <div className="flex items-center mb-1 mr-4 order-2">
              <div className={`${styles.CardImageContainer} flex items-center`}>
                <Image src={vector1} alt="vector1" objectFit="contain" />
              </div>
              <p className={styles.itemsNames}>Self-serve Kiosk</p>
            </div>
            <div className="flex items-center mb-1 mr-4 order-4 md:order-3">
              <div className={`${styles.CardImageContainer} flex items-center`}>
                <Image src={vector3} alt="vector3" objectFit="contain" />
              </div>
              <p className={styles.itemsNames}>Digital ordering</p>
            </div>
            <div className="flex items-center mb-1 mr-4 order-3 md:order-4">
              <div className={`${styles.CardImageContainer} flex items-center`}>
                <Image src={rectangle2} alt="rectangle2" objectFit="contain" />
              </div>
              <p className={styles.itemsNames}>Online</p>
            </div>
            <div className="flex items-center mb-1 mr-4 order-5">
              <div className={`${styles.CardImageContainer} flex items-center`}>
                <Image src={vector5} alt="vector5" objectFit="contain" />
              </div>
              <p className={styles.itemsNames}>Ops management</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-auto mb-16 lg:mb-10">
            <button className={styles.learnMoreBtnII}>
              <Link href="/#grafterr-professional">Learn More</Link>
            </button>
            <button className={styles.learnMoreBtnI}>
              <Link href="https://www.eposhybrid.com/contact-us">
                Talk to an Expert
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.main} hidden md:block`}></div>
    </div>
  );
};

export default BusinessProducts;