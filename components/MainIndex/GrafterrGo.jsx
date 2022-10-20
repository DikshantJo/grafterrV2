import Image from "next/image";
import Link from "next/link";

import goGrafter from "../../public/grafterrImage/mainIndex/grafterrGo.png";

import styles from "../../styles/mainIndexcss/grafterrGo.module.css";
import common from "../../styles/mainIndexcss/common.module.css";

const GrafterrGo = () => (
  <div className={`${styles.goGrafterrMain} `} id="grafterr-go">
    <div className={`${common.commonBody} mx-auto`}>
      <h1
        className={`${common.commonHeading} ${styles.goGrafterrHeading} text-center`}
      >
        The two award <br className="md:hidden" />
        winning sides of Grafterr
      </h1>
      <p
        className={`${common.commonPara1} text-bold md:text-normal lg:text-lg xl:text-xl 2xl:text-2xl text-center my-1  `}
      >
        Take your business to the next level
      </p>

      <div className="mt-5  lg:mt-[100px] flex flex-col items-center md:flex-row  ">
        <div className={`${styles.goGrafterrImage} mt-3 md:mt-0 mb-5 md:mb-0 `}>
          <Image objectFit="contain" alt="go grafterr" src={goGrafter} />
        </div>

        <div className={`${styles.goGrafterrTextContainer} mt-4 md:mt-0`}>
          <h1 className={`${common.commonHeading} ${styles.goGrafterrHeading}`}>
            Grafterr GO! App
          </h1>
          <p className={`${common.commonPara} ${styles.goGrafterrPara} my-2`}>
            From freelancers to tradespeople, dog walkers to hairdressers,{" "}
            <br className="hidden" /> GO! allows you to instantly take payments
            for anything using a <br className="hidden" /> smartphone or tablet.
          </p>

          <Link href="/go">
            <button
              className={`${common.commonButton} ${styles.goGrafterrButton} my-5  w-full md:w-fit`}
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default GrafterrGo;