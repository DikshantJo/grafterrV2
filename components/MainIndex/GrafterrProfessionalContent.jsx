import Image from "next/image";
import Link from "next/link";

import grafterrProfessionalGroup from "../../public/grafterrImage/mainIndex/grafterrProfessionalGroup.png";

import styles from "../../styles/mainIndexcss/grafterrProfessionalContent.module.css";
import common from "../../styles/mainIndexcss/common.module.css";

const GrafterrProfessional = () => (
  <div
    className={`${common.commonBody} mx-auto flex flex-col items-center md:flex-row md:justify-between`}
  >
    <div
      className={`${styles.grafterrProfessionalTextContainer} mb-10 order-1 md:order-0`}
    >
      <h1
        className={`${common.commonHeading} ${styles.grafterrProfessionalHeading}`}
      >
        Grafterr Professional
      </h1>
      <p
        className={`${common.commonPara} ${styles.grafterrProfessionalPara} my-2 mb-8`}
      >
        A full end-to-end point of sale (POS) and management platform designed
        for{" "}
        <span className="font-extrabold">
          {" "}
          hospitality & catering businesses{" "}
        </span>{" "}
        to streamlines full service operations
      </p>

      <Link href="https://www.eposhybrid.com/">
        {/* <button> */}
          <a className={`${common.commonButton} ${styles.grafterrProfessionalButton} mt-2 w-full block text-center sm:w-fit`} target="_blank" rel="noopener noreferrer">Learn more</a>
        {/* </button> */}
      </Link>
    </div>

    <div
      className={`${styles.grafterrProfessionalImage} mb-10 order-0 md:order-1`}
    >
      <Image
        objectFit="contain"
        alt="go grafterr"
        src={grafterrProfessionalGroup}
      />
    </div>
  </div>
);

export default GrafterrProfessional;
