import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

import Styles from "../../styles/componentcss/Cookies.module.css";

const GdprPopUp = () => {
  const [isCookieAccepted, setCookieAccepted] = useState("accepted");

  useEffect(() => {
    const cookie = Cookies.get("isCookieAccepted");
    setCookieAccepted(cookie);
  }, [isCookieAccepted]);

  const onClickCookiesButton = () => {
    Cookies.set("isCookieAccepted", "accepted", { expires: 30 });
    setCookieAccepted("");
  };

  return (
    <div className={`${isCookieAccepted === "accepted" ? "hidden" : "block"}`}>
      <div className={Styles.cookies} style={{ left: "20px" }}>
        <div className={Styles.cookiesContainer}>
          <p className={Styles.cookiesDescription}>
            We use cookies to deliver the best experience to our website
            visitors. To learn more, please read our
            <Link href="/cookie-policy">
              <a
                className={Styles.cookiesAnchor}
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                Cookie Policy
              </a>
            </Link>
          </p>
          <button
            className={`${Styles.cookiesOkayButton}`}
            onClick={onClickCookiesButton}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default GdprPopUp;