import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/grafterrImage/logo.svg";

/* custom import */
import topLeft from "../public/grafterrImage/navBar/topLeft.svg";
import bottomLeft from "../public/grafterrImage/navBar/bottomLeft.svg";
import bottomRight from "../public/grafterrImage/navBar/bottomRight.svg";
import shopIcon from "../public/grafterrImage/navBar/shopIcon.svg";
// import hamBurger from "../public/grafterrImage/navBar/hamBurger.svg";
import homeHamBurger from "../public/grafterrImage/navBar/homeHamurgerMenu.svg";
import navCross from "../public/grafterrImage/navBar/navCross.svg";

const NavbarHome = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#FFFFFF");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#181818");
        setTextColor("#FFFFFF");
      } else {
        setColor("#181818");
        setTextColor("#FFFFFF");
      }
    };
    changeColor();
  }, []);

  const scrollToSection = (a) => {
    // window.scrollTo({
    //   top: document.getElementById(a).offsetTop - 100,
    //   behavior: "smooth",
    // });
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
          <div className="flex /* lg:w-4/6 xl:w-[60%] */ justify-between">
            <Link href="/">
              <a
                style={{ color: `${textColor}` }}
                className="grafterrNavBarLogo flex justify-center items-center"
              >
                <Image src={logo} alt="Grafterr"  width={120} height={30} />
                {/* <span className="mx-3 grafterrLogo">Grafterr</span> */}
              </a>
            </Link>
          </div>

          <ul
            style={{ color: `${textColor}` }}
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <li className="p-4 grafterNavlinks"  style={{color:'white'}}>
              <Link href="/go">GO! - Take payments</Link>
            </li>
            <li className="p-4 grafterNavlinks" style={{color:'white'}}>
              <Link href="/#grafterr-professional">
                <a>Professional - Hospitality</a>
              </Link>
            </li>
            <li className="p-4 grafterNavlinks" style={{color:'white'}}>
              <Link href="/go/#contactUsSection">
                <a>Contact us</a>
              </Link>
            </li>
          </ul>

          {/* <div className="grafterrNavbarDownloadAndShop hidden lg:flex">
            <Link href="/">
              <a className="grafterrNavbarDownload text">Sign in </a>
            </Link>
            <Link href="#goReaderSection">
              <a className="grafterNavbarShop flex justify-between items-center text p-4 ml-5">
                shop
                <div className="navBarShopIconDiv flex justify-center items-center ml-2">
                  <Image src={shopIcon} alt="shop icon"></Image>
                </div>
              </a>
            </Link>
          </div> */}
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10 mr-4">
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
              src={homeHamBurger}
              alt="menu icon"
              objectFit="contain"
            />
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
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav} style={{lineHeight:"20px",fontSize:"30px"}}>
              <Link href="/go">GO! - Take payments</Link>
            </li>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav} style={{lineHeight:"20px",fontSize:"30px"}}>
              <Link href="/#grafterr-professional">
                <a>Professional - Hospitality</a>
              </Link>
            </li>
            <li className="my-4 p-2 mobTabNavLinks" onClick={handleNav} style={{lineHeight:"20px",fontSize:"30px"}}>
              <Link href="/go/#contactUsSection">
                <a>Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;