import Image from "next/image";
import React from "react";
import Link from "next/link";

//Components
import GrafterrProfessionalContent from "./GrafterrProfessionalContent";
import Professional from "./Professional";

//Data For Card
import { data } from "./CardData";

//Styling CSS
import styles from "../../styles/mainIndexcss/grafterrProfessional.module.css";

const GrafterrProfessional = () => {
  // Card Iteration Item Function
  const cardItems = (eachItem) => (
    <div
      key={eachItem.id}
      className={`${styles.cardContainer} ${eachItem.cardBg} flex flex-col items-center p-5 md:justify-around mb-10`}
    >
      <div className={`${styles.cardImage} relative`}>
        <Image
          src={eachItem.image}
          alt={eachItem.altMessage}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <h1 className={`${styles.cardHeading} ${eachItem.headingColor} my-4`}>
        {eachItem.heading}
      </h1>
      <p className={`${styles.cardContent}`}>{eachItem.content}</p>
      <button
        className={`${styles.cardBtn} ${eachItem.buttonColor} ${eachItem.headingColor}`}
      >
        <Link href={eachItem.link}>
          <a target="_blank">Discover more</a></Link>
      </button>
    </div>
  );

  return (
    <div
      id="grafterr-professional"
      className={`${styles.professionalContainer} flex flex-col items-center justify-center pb-16`}
    >
      <h1 className={`${styles.grafterHeading} mt-32`}>
        Grafterr Professional
      </h1>
      <p className={`${styles.grafterContent} my-4`}>
        Technology for hospitality & <br className="block md:hidden" /> catering
        professionals
      </p>
      <div
        className={`${styles.grafterrCardContainer} flex justify-center flex-wrap items-center mt-10 md:mt-16 md:items-stretch`}
      >
        {data.map((eachData) => cardItems(eachData))}
      </div>
      <GrafterrProfessionalContent />
      <Professional />
    </div>
  );
};

export default GrafterrProfessional;
