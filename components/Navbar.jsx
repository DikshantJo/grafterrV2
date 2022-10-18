import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import logo from "../public/logoNew.png";

/* custom import */
import topLeft from "../public/grafterrImage/navBar/topLeft.svg";
import bottomLeft from "../public/grafterrImage/navBar/bottomLeft.svg";
import bottomRight from "../public/grafterrImage/navBar/bottomRight.svg";
import shopIcon from "../public/grafterrImage/navBar/shopIcon.svg";
import hamBurger from "../public/grafterrImage/navBar/hamBurger.svg";
import navCross from "../public/grafterrImage/navBar/navCross.svg";
import logoNew from "../public/grafterrImage/logoNew.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("#000000");
      } else {
        setColor("#fff");
        setTextColor("#000");
      }
    };
    changeColor();
  }, []);

  const scrollToSection = (a) => {
    window.scrollTo({
      top: document.getElementById(a).offsetTop - 100,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scrollToSection(goto);
    }, 100);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 grafterNavbarContainer"
    >
      <div className="flex justify-between items-center text-white w-full">
        <div className="grafterrNavbarDesktop m-auto flex justify-between items-center p-4 text-white w-full">
          <div className="flex justify-between">
            <Link href="/">
              <a
                style={{ color: `${textColor}` }}
                className="grafterrNavBarLogo flex justify-center items-center"
              >
                <Image
                  src={logoNew}
                  width={130}
                  height={40}
                  alt="Grafterr"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  //placeholder="blur" // Optional blur-up while loading
                />
                {/* <span className="mx-3 grafterrLogo" >Grafterr</span> */}
              </a>
            </Link>
            {/* <ul style={{ color: `${textColor}` } } className="hidden lg:flex">
              <li className='p-4 grafterNavlinks'>
                <Link href='/#cardPaymentSection'>Take payments</Link>
              </li>
              <li className='p-4 grafterNavlinks'>
                <Link href='/#posFeaturesSection'>POS features</Link>
              </li>
              <li className='p-4 grafterNavlinks'>
                <Link href='/#goReaderSection'>Card reader</Link>
              </li>
              <li className='p-4 grafterNavlinks'>
                <Link href='/#pricingSection'>Pricing</Link>
              </li>
              <li className='p-4 grafterNavlinks'>
                <Link href='/#contactUsSection'>Contact</Link>
              </li>
            </ul> */}
          </div>

          <ul
            style={{ color: `${textColor}` }}
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <li
              className="p-4 grafterNavlinks hover:cursor-pointer"
            >
              <Link href='/go/#cardPaymentSection'>Take payments</Link>
            </li>
            <li
              className="p-4 grafterNavlinks hover:cursor-pointer"
            >
              <Link href='/go/#posFeaturesSection'>POS features</Link>
            </li>
            <li
              className="p-4 grafterNavlinks hover:cursor-pointer"
            >
              {/* <p goto="goReaderSection">Card reader</p> */}
              <Link href='/go/#goReaderSection'>Card reader</Link>
            </li>
            <li
              className="p-4 grafterNavlinks hover:cursor-pointer"
            >
              <Link href='/go/#pricingSection'>Pricing</Link>
            </li>
            <li
              className="p-4 grafterNavlinks hover:cursor-pointer"
            >
              <Link href='/go/#FAQSection'>FAQ</Link>
            </li>
            <li
              className="p-4 grafterNavlinks hover:cursor-pointer"
            >
              <Link href='/go/#contactUsSection'>Contact</Link>
            </li>
          </ul>

          <div className="grafterrNavbarDownloadAndShop hidden lg:flex">
            {/* <Link href="/">
              <a className="grafterrNavbarDownload text">Download now </a>
            </Link> */}
            <Link href="#goReaderSection">
            <div
              className="grafterNavbarShop hover:cursor-pointer flex justify-between items-center text p-4 ml-5"
            >
              Shop
              <div
                className="navBarShopIconDiv flex justify-center items-center ml-2"
                goto="goReaderSection"
              >
                <Image
                  src={shopIcon}
                  alt="shop icon"
                  goto="goReaderSection"
                ></Image>
              </div>
            </div>
            </Link>
          </div>
        </div>

        {/* <div className="grafterrNavbarMobile"> */}
        {/* Mobile Button */}
        <div onClick={handleNav} className="flex lg:hidden z-10 mr-4">
          {nav ? (
            // <AiOutlineClose size={40} style={{ color: 'white'}} />
            <Image
              className="mr-5"
              src={navCross}
              alt="close button Image"
              objectFit="container"
            />
          ) : (
            <Image
              className="mr-5"
              src={hamBurger}
              alt="menu icon"
              objectFit="contain"
              width={40}
              height={40}
            />
            // <AiOutlineMenu size={20} style={{ color: `${textColor}`,marginRight:'20px'}} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <div className="imgContainerTopLeft absolute left-0 top-0 h-12 w-24 sm:h-20 sm:w-48">
            <Image src={topLeft} alt="background icon" objectFit="contain" />
          </div>
          <div className="imgContainerBottomLeft absolute left-0 bottom-0 h-16 w-16 sm:h-24 sm:w-24">
            <Image
              src={bottomLeft}
              alt="background icon"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className="imgContainerRightLeft absolute bottom-0 right-0 h-24 w-24 sm:h-52 sm:w-52">
            <Image
              src={bottomRight}
              alt="background icon"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <ul>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav}>
              <Link href="/go/#multiPaymentSection">Take payments</Link>
            </li>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav}>
              <Link href="/go/#posFeaturesSection">POS features</Link>
            </li>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav}>
              <Link href="/go/#goReaderSection">Card reader</Link>
            </li>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav}>
              <Link href="/go/#pricingSection">Pricing</Link>
            </li>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav}>
              <Link href="/go/#FAQSection">FAQ</Link>
            </li>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav}>
              <Link href="/go/#contactUsSection">Contact</Link>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
