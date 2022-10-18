import Image from "next/image";
import Link from "next/link";

import goGrafter from "../../public/grafterrImage/mainIndex/grafterrGo.png";

import styles from "../../styles/mainIndexcss/grafterrGo.module.css";
import common from "../../styles/mainIndexcss/common.module.css";

const GrafterrGo = () => (
  <div className={`${styles.goGrafterrMain}`} id="grafterr-go">
    <div className={`${common.commonBody} mx-auto`}>
      <h1
        className={`${common.commonHeading} ${styles.goGrafterrHeading} text-center`}
      >
        The two award <br className="md:hidden" />
        winning sides of Grafterr
      </h1>
      <p
        className={`${common.commonPara}  text-bold md:text-normal lg:text-lg  text-center my-1`}
      >
        Take your business to the next level
      </p>

      <div className="mt-5  lg:mt-[100px] flex flex-col items-center md:flex-row md:justify-between">
        <div className={`${styles.goGrafterrImage} mb-5 md:mb-0 `}>
          <Image objectFit="contain" alt="go grafterr" src={goGrafter} />
        </div>

        <div className={`${styles.goGrafterrTextContainer} `}>
          <h1 className={`${common.commonHeading} ${styles.goGrafterrHeading}`}>
            Grafterr Go App!
          </h1>
          <p className={`${common.commonPara} ${styles.goGrafterrPara} my-2`}>
            From freelancers to tradespeople, dog walkers to hairdressers, GO!
            allows you to instantly take payments for anything using a
            smartphone or tablet.
          </p>

          <Link href="/go">
            <button
              className={`${common.commonButton} ${styles.goGrafterrButton} mt-2 w-full md:w-fit`}
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
