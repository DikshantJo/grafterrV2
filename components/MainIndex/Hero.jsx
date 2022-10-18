import Image from "next/image";
import Link from "next/link";

import bannerImage from "../../public/grafterrImage/mainIndex/bannerImage.png";
import ellipseRed from "../../public/grafterrImage/mainIndex/ellipseRed.png";
import ellipseYellow from "../../public/grafterrImage/mainIndex/ellipseYellow.png";
import ellipseSky from "../../public/grafterrImage/mainIndex/ellipseSky.png";
import ellipseViolet from "../../public/grafterrImage/mainIndex/ellipseViolet.png";

import ePosLogo from "../../public/grafterrImage/mainIndex/ePosLogo.png";
import grafterrLogo from "../../public/grafterrImage/mainIndex/grafterrLogo.png";
import strightLine from "../../public/grafterrImage/mainIndex/strightLine.png";
import scrollMouse from "../../public/grafterrImage/mainIndex/scrollMouse.png";

import styles from "../../styles/mainIndexcss/hero.module.css";

const Hero = () => (
  <div className={`${styles.heroContainerMain} relative `}>
    {/* image section */}
    <div
      className={`${styles.heroBannerImage} absolute left-0 top-0 right-0 bottom-0 bg-black/50  z-0`}
    >
      <Image
        layout="fill"
        objectFit="cover"
        priority
        alt="index main banner"
        src={bannerImage}
      />
    </div>

    {/* logo section */}

    <div className={`${styles.heroTextContainer} w-full absolute z-1`}>
      <div className="flex items-center justify-center">
        <div className={styles.heroGrafterrLogo}>
          <Image objectFit="contain" alt="grafterr logo" src={grafterrLogo} />
        </div>
        <div className={styles.heroStrightLineImage}>
          <Image objectFit="contain" alt="stright line" src={strightLine} />
        </div>
        <div className={styles.heroEposLogo}>
          <Image objectFit="contain" alt="epos logo" src={ePosLogo} />
        </div>
      </div>

      <div className="text-center  w-11/12 m-auto">
        <h1 className={styles.heroHeading}>
          ePOS Hybrid is part <br className="md:hidden" /> of the Grafterr
          family!
        </h1>
        <p className={`${styles.heroDescription} mt-1`}>
          We’re working hard to integrate <br className="md:hidden" /> ePOS
          Hybrid into our website, <br className="md:hidden" />
          bare with us!
        </p>
      </div>
    </div>

    <Link href="/#BusinessProducts">
      <div
        className={`${styles.heroScrollDownImage} absolute -bottom-1 left-1/2 `}
      >
        <Image objectFit="contain" alt="scroll down" src={scrollMouse} />
      </div>
    </Link>

    <div className={`${styles.heroTopLeftImageContainer} `}>
      <Image objectFit="contain" alt="hero logo section" src={ellipseSky} />
    </div>

    <div className={`${styles.heroTopRightImageContainer} `}>
      <Image objectFit="contain" alt="hero logo section" src={ellipseViolet} />
    </div>

    <div className={`${styles.heroBottomLeftImageContainer}`}>
      <Image
        objectFit="cover"
        layout="fill"
        alt="hero logo section"
        src={ellipseRed}
      />
    </div>

    <div className={`${styles.heroBottomRightImageContainer} `}>
      <Image
        objectFit="cover"
        layout="fill"
        alt="hero logo section"
        src={ellipseYellow}
      />
    </div>
  </div>
);

export default Hero;
