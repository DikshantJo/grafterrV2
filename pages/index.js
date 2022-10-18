import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";

//Components
import NavbarHome from '../components/NavbarHome'
import Hero from "../components/MainIndex/Hero";
import BusinessProducts from "../components/MainIndex/BusinessProducts";
import GrafterrGo from "../components/MainIndex/GrafterrGo";
import GetPaid from "../components/MainIndex/GetPaid";
import GrafterrProfessional from "../components/MainIndex/GrafterrProfessional";
import PartnersSection from "../components/MainIndex/PartnersSection";

export default function Home() {
  /* global windows size output */
  const [windowSize, setWindowSize] = useState(0);
  let screenWidth = windowSize;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Grafterr GO! - Sell anything, anywhere.</title>
        <meta
          name="description"
          content="Take payments instantly using your smartphone with Grafterr GO! point of sale app. No monthly fees, no set-up costs and certainly no contracts."
        />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="go" />
        <meta name="author" content="Grafterr Go" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* open graph data */}

        <meta
          property="og:title"
          content="Grafterr"
        />
        <meta property="og:url" content="https://grafterr.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Take payments instantly using your smartphone with Grafterr GO! point of sale app. No monthly fees, no set-up costs and certainly no contracts."
        />
        <meta
          property="og:image"
          content="https://grafterr.com/_next/static/media/grafterr-OG-image.44386200.jpg"
        />
        <meta property="og:site_name" content="Grafterr Go!" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:tittle"
          content="Grafterr"
        />
        <meta
          name="twitter:description"
          content="Take payments instantly using your smartphone with Grafterr GO! point of sale app. No monthly fees, no set-up costs and certainly no contracts."
        />
        <meta name="twitter:url" content="https://grafterr.com" />
        <meta
          name="twitter:image"
          content="https://grafterr.com/_next/static/media/grafterr-OG-image.44386200.jpg"
        />
        {/* <Link rel='preload' href={heroImage} as='image'/> */}
      </Head>
      <NavbarHome />
      <Hero />
      <BusinessProducts />
      <GrafterrGo />
      <GetPaid />
      <GrafterrProfessional />
      <PartnersSection />
    </div>
  );
}
