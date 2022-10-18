//Images
import posImg from "../../public/grafterrImage/mainIndex/posImg.svg";
import grafterrKds from "../../public/grafterrImage/mainIndex/grafterrKds.svg";
import selfServiceKiosk from "../../public/grafterrImage/mainIndex/selfServiceKiosk.svg";
import digitalOrderingImg from "../../public/grafterrImage/mainIndex/digitalOrderingImg.svg";
import hrOperationsImg from "../../public/grafterrImage/mainIndex/hrOperationsImg.svg";

//Card Styling
import styles from "../../styles/mainindexcss/grafterrProfessional.module.css";

export const data = [
  {
    id: 1,
    image: posImg,
    altMessage: "POS Image",
    heading: "POS",
    content: "Powerful point of sale that powers your whole business",
    cardBg: styles.cardBgI,
    headingColor: styles.cardHeadingI,
    buttonColor: styles.cardBtnBgColorI,
    link: "https://www.eposhybrid.com/epos-systems",
  },
  {
    id: 2,
    image: grafterrKds,
    altMessage: "grafterrKDS Image",
    heading: "Grafterr KDS",
    content: "Keep your kitchen organised and track cooking status",
    cardBg: styles.cardBgII,
    headingColor: styles.cardHeadingII,
    buttonColor: styles.cardBtnBgColorII,
    link: "https://www.eposhybrid.com/",
  },
  {
    id: 3,
    image: selfServiceKiosk,
    altMessage: "Self-service Kiosk Image",
    heading: "Self-service Kiosk",
    content: "Automate customer ordering and drive revenue",
    cardBg: styles.cardBgIII,
    headingColor: styles.cardHeadingIII,
    buttonColor: styles.cardBtnBgColorIII,
    link: "https://www.eposhybrid.com/self-checkout",
  },
  {
    id: 4,
    image: digitalOrderingImg,
    altMessage: "Digital ordering Image",
    heading: "Digital ordering",
    content: "Automate you order flow and cut costs",
    cardBg: styles.cardBgIV,
    headingColor: styles.cardHeadingIV,
    buttonColor: styles.cardBtnBgColorIV,
    link: "https://www.eposhybrid.com/online-and-mobile-app-ordering",
  },
  {
    id: 5,
    image: hrOperationsImg,
    altMessage: "HR & Operations Image",
    heading: "HR & Operations",
    content: "Manage your end-to-end business from a single platform",
    cardBg: styles.cardBgV,
    headingColor: styles.cardHeadingV,
    buttonColor: styles.cardBtnBgColorV,
    link: "https://www.eposhybrid.com/",
  },
];
