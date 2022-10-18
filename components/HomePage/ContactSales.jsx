import React from "react";
import Link from "next/link";
import Image from "next/image";

/* custom imports */
import textImage from "../../public/grafterrImage/contactSales/textIcon.svg";

const ContactSales = () => {
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
      className="ContactSalesContainer p-3 md:p-3 xl:p-8 flex justify-center items-center"
      style={{ background: "#181818" }}
    >
      <div
        className="contactSalesSubContainer w-full h-full flex flex-col justify-center items-center"
        style={{ background: "#FEFEFE" }}
      >
        <div className="contactSalesTitle mt-4 mb-0 relative">
          Big volume?
          <div className="imageContainerContactSales absolute -right-16 -top-5 xl:-right-28 xl:-top-10 md:-right-10 md:-top-4">
            <Image src={textImage} alt="background icon"></Image>
          </div>
        </div>
        <p className="contactSalesCaption p-4 sm:p-0 mt-2 mb-4 text-center">
          If you’re transacting large volume on a monthly basis, our team{" "}
          <br className="hidden sm:block" /> are on hand to discuss custom
          solutions
        </p>
        <a onClick={onBtnClick}>
          <p
            goto="contactUsSection"
            className="contactSalesbtn md:mt-2 md:mb-4 xl:my-4"
          >
            Contact Sales
          </p>
        </a>
      </div>
    </div>
  );
};

export default ContactSales;
