import Image from "next/image";
import Link from "next/link";

import getPaidGroup from "../../public/grafterrImage/mainIndex/getPaidGroup.png";
import getPaidGroupSmall from "../../public/grafterrImage/mainIndex/getPaidGroupSmall.png";
import getPaidEmaiSending from "../../public/grafterrImage/mainIndex/getPaidEmaiSending.png";
import getPaidPayments from "../../public/grafterrImage/mainIndex/getPaidPayments.png";
import getPaidSmartphone from "../../public/grafterrImage/mainIndex/getPaidSmartphone.png";
import getPaidContactless from "../../public/grafterrImage/mainIndex/getPaidContactless.png";

import styles from "../../styles/mainIndexcss/getPaid.module.css";
import common from "../../styles/mainIndexcss/common.module.css";

const GetPaid = () => {
  const getCartsList = () => (
    <>
      <div className="sm:my-10 flex items-center justify-center md:justify-start flex-wrap">
        <div
          className={`${styles.getPaidCard} flex flex-col items-center justify-center mb-4 mr-4`}
        >
          <div className={`${styles.getPaidCardImage} `}>
            <Image
              objectFit="contain"
              alt="chin and chip"
              src={getPaidPayments}
            />
          </div>
          <span>Chin & Chip</span>
        </div>

        <div
          className={`${styles.getPaidCard} flex flex-col items-center justify-center mb-4 mr-4`}
        >
          <div className={`${styles.getPaidCardImage} `}>
            <Image
              objectFit="contain"
              alt="chin and chip"
              src={getPaidContactless}
            />
          </div>
          <span>Contactless</span>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start flex-wrap">
        <div
          className={`${styles.getPaidCard} flex flex-col items-center justify-center mb-4 mr-4`}
        >
          <div className={`${styles.getPaidCardImage} `}>
            <Image
              objectFit="contain"
              alt="chin and chip"
              src={getPaidSmartphone}
            />
          </div>
          <span>SMS</span>
        </div>

        <div
          className={`${styles.getPaidCard} flex flex-col items-center justify-center mb-4 mr-4`}
        >
          <div className={`${styles.getPaidCardImage} `}>
            <Image
              objectFit="contain"
              alt="chin and chip"
              src={getPaidEmaiSending}
            />
          </div>
          <span>Chip & pin</span>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`${common.commonBody} mx-auto flex flex-col items-center md:flex-row md:justify-between`}
    >
      <div className={`${styles.getPaidTextContainer} order-1 md:order-0`}>
        <h1 className={`${common.commonHeading} ${styles.getPaidCardHeading} mt-4 md:mt-0`}>
          Get paid in multiple ways
        </h1>
        <p className={`${common.commonPara} ${styles.getPaidCardPara} my-2`}>
          All the selling tools you need in one simple app! Take in person
          payments or send invoices and payment requests remotely using email
          and SMS.
        </p>

        {getCartsList()}

        <Link href="/go">
          <button className={`${common.commonButton} ${styles.getPaidButton} w-full md:w-fit my-4`}>
            Learn More
          </button>
        </Link>
      </div>

      <div className={`${styles.getPaidImage} hidden md:block mt-5 md:mt-0 order-0 md:order-1`}>
        <Image objectFit="contain" alt="get paid" src={getPaidGroup} />
      </div>
      <div className={`${styles.getPaidImage} md:hidden mt-5 md:mt-0 order-0 md:order-1`}>
        <Image objectFit="contain" alt="get paid" src={getPaidGroupSmall} />
      </div>
    </div>
  );
};

export default GetPaid;
