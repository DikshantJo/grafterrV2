import React from "react";

//Image
import stripe from "../../public/grafterrImage/mainIndex/stripeImg.png";
import xero from "../../public/grafterrImage/mainIndex/xeroImg.png";
import sumup from "../../public/grafterrImage/mainIndex/sumup.png";
import messagebird from "../../public/grafterrImage/mainIndex/messagebird.png";
import paymentsenseImg from "../../public/grafterrImage/mainIndex/paymentsenseImg.png";
import evo from "../../public/grafterrImage/mainIndex/evoImg.png";
import worldpay from "../../public/grafterrImage/mainIndex/worldpay.png";
import mailchimp from "../../public/grafterrImage/mainIndex/mailchimp.png";

//Styling CSS
import styles from "../../styles/mainindexcss/partnerSection.module.css";
import Image from "next/image";

const PartnersSection = () => {
  return (
    <div className={`${styles.partnerContainer} `}>
      <div
        className={`${styles.partnerCard} mx-auto my-16 flex flex-col items-center p-5`}
      >
        <h1 className={`${styles.partnerHeading} py-5`}>
          We work with <br className={`block sm:hidden`} /> some amazing partners
        </h1>
        <p className={`${styles.partnerContent} pb-5`}>
          Together we power 1000s of <br className={`block sm:hidden`} /> businesses around the world
        </p>
        <div
          className={`${styles.imageContainer} flex items-center justify-around sm:justify-center flex-wrap py-5`}
        >
          <div className={styles.stripeImg}>
            <Image src={stripe} alt="stripe logo" objectFit="contain" />
          </div>
          <div className={styles.xeroImg}>
            <Image src={xero} alt="xero logo" objectFit="contain" />
          </div>
          <div className={styles.sumupImg}>
            <Image src={sumup} alt="sumup logo" objectFit="contain" />
          </div>
          <div className={styles.messageBirdImg}>
            <Image
              src={messagebird}
              alt="message bird logo"
              objectFit="contain"
            />
          </div>
          <div className={styles.paymentSenseImg}>
            <Image
              src={paymentsenseImg}
              alt="payment Sense logo"
              objectFit="contain"
            />
          </div>
          <div className={styles.evoImg}>
            <Image src={evo} alt="evo logo" objectFit="contain" />
          </div>
          <div className={styles.worldPayImg}>
            <Image src={worldpay} alt="world pay logo" objectFit="contain" />
          </div>
          <div className={styles.mailChimpImg}>
            <Image src={mailchimp} alt="mail chimp logo" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
