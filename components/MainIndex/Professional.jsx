import Image from "next/image";
import Link from "next/link";

import professionalGroup from "../../public/grafterrImage/mainIndex/professionalGroup.png";
import professionalRightTick from "../../public/grafterrImage/mainIndex/professionalRightTick.png";

import styles from "../../styles/mainIndexcss/professional.module.css";
import common from "../../styles/mainIndexcss/common.module.css";

const Professional = () => {
  const getListItems = () => (
    <div className="my-4 md:mx-0 ">
      <div className="flex items-center  mb-3">
        <div
          className={`${styles.professionalTickImage} flex items-center justify-center`}
        >
          <Image
            objectFit="contain"
            alt="tick mark"
            src={professionalRightTick}
          />
        </div>
        <p className={styles.professionalTickText}>
          Designed for hospitality & catering businesses
        </p>
      </div>

      <div className="flex items-center mb-3">
        <div
          className={`${styles.professionalTickImage} flex items-center justify-center`}
        >
          <Image
            objectFit="contain"
            alt="tick mark"
            src={professionalRightTick}
          />
        </div>
        <p className={styles.professionalTickText}>
          Complete ePOS, Kitchen and Ops management
        </p>
      </div>

      <div className="flex items-center mb-3">
        <div
          className={`${styles.professionalTickImage} flex items-center justify-center`}
        >
          <Image
            objectFit="contain"
            alt="tick mark"
            src={professionalRightTick}
          />
        </div>
        <p className={styles.professionalTickText}>
          Used by 1000s of businesses around the world
        </p>
      </div>

      <div className="flex items-center mb-3">
        <div
          className={`${styles.professionalTickImage} flex items-center justify-center`}
        >
          <Image
            objectFit="contain"
            alt="tick mark"
            src={professionalRightTick}
          />
        </div>
        <p className={styles.professionalTickText}>Award winning technology</p>
      </div>
    </div>
  );

  return (
    <div
      className={`${common.commonBody} mx-auto  flex flex-col items-center md:flex-row md:justify-between`}
    >
      <div className={styles.professionalImage}>
        <Image objectFit="contain" alt="go grafterr" src={professionalGroup} />
      </div>

      <div className={`${styles.professionalTextContainer} mt-4`}>
        <h1 className={`${common.commonHeading} ${styles.professionalHeading}`}>
          Grafterr Professional
        </h1>
        <p className={`${common.commonPara} ${styles.professionalPara} my-2`}>
          We offer a complete all-in-one point of sale and service management
          platform that streamlines your full service operations and replaces
          multiple tech providers within your locations
        </p>

        {getListItems()}

        <Link href="https://www.eposhybrid.com/contact-us">
         {/*  <button
            
          > */}
            <a className={`${common.commonButton} ${styles.professionalButton} w-full md:w-fit mt-2`} target="_blank">Talk to an Expert</a>
          {/* </button> */}
        </Link>
      </div>
    </div>
  );
};

export default Professional;
