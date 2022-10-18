import React from "react";
import Head from "next/head";
/* importing CSS */
import Styles from "../styles/pages/complaintProcedure.module.css";

import Navbar from '../components/Navbar'

const complaintProcedure = () => {
  return (
    <div className={Styles.complaintProcedureContainer}>
      <Head>
        <title>Grafterr GO Complaint Procedure.</title>
        <meta
          name="description"
          content="Complaints are taken very seriously at Grafter GO. Read the full complaints procedure here."
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="./public/site.webmanifest"></link>

        <meta charSet="UTF-8" />
        <meta name="keywords" content="go" />
        <meta name="author" content="Grafterr Go" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* open graph data */}

        <meta property="og:title" content="Grafterr GO Complaint Procedure" />
        <meta property="og:url" content="https://www.grafterr.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Complaints are taken very seriously at Grafter GO. Read the full complaints procedure here."
        />
        <meta
          property="og:image"
          content="https://www.grafterr.com/_next/static/media/grafterr-OG-image.44386200.jpg"
        />
        <meta property="og:site_name" content="Grafterr Go!" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:tittle" content="Grafterr GO Complaint Procedure" />
        <meta
          name="twitter:description"
          content="Complaints are taken very seriously at Grafter GO. Read the full complaints procedure here."
        />
        <meta name="twitter:url" content="https://grafterr.com" />
        <meta
          name="twitter:image"
          content="https://www.grafterr.com/_next/static/media/grafterr-OG-image.44386200.jpg"
        />
        {/* <Link rel='preload' href={heroImage} as='image'/> */}
      </Head>
      <Navbar />
      <h1 className={Styles.complaintProcedureTitle}>Complaint Procedure</h1>
      <div className="complaint-procedure">
        <p className={Styles.complaintProcedureSubParagraph}>
          Grafterr is committed to providing a quality service for its customers
          and working in an open and accountable way that builds the trust and
          respect of all. One of the ways in which we can continue to improve
          our service is by listening and responding to the views of our
          customers, especially by a positive response to the complaint, and by
          fixing any mistakes right.
        </p>
        <h4 className={Styles.complaintProcedureSubTitle}>
          We aim to ensure that:
        </h4>

        <ul className={`${Styles.complaintProcedureList}`}>
          <li className={`${Styles.complaintProcedureSubParagraph}`}>
            making a complaint is as easy as possible;
          </li>
          <li className={Styles.complaintProcedureSubParagraph}>
            we treat a complaint as a clear expression of dissatisfaction with
            our service which calls for an immediate response;
          </li>
          <li className={Styles.complaintProcedureSubParagraph}>
            we deal with it promptly, politely and, when appropriate, with
            confidentially;
          </li>
          <li className={Styles.complaintProcedureSubParagraph}>
            we respond in the right way - for example, with an explanation, or
            an apology where we have got things wrong, or information on any
            action taken, etc;
          </li>
          <li className={Styles.complaintProcedureSubParagraph}>
            we learn from complaints, use them to improve our service, and
            review annually our complaints policy and procedures.
          </li>
        </ul>
        <p className={Styles.complaintProcedureSubParagraph}>
          We recognize that many concerns will be raised informally, and dealt
          with quickly. An informal approach is appropriate when it can be
          achieved. However, if the concerns cannot be dealt satisfactorily,
          then we ask our customers to follow the procedure mentioned below.
        </p>
        <h4 className={Styles.complaintProcedureSubTitle}>
          Formal Complaints Procedure
        </h4>

        <h4 className={Styles.complaintProcedureSubTitle}>Stage 1</h4>
        <p className={Styles.complaintProcedureSubParagraph}>
          In the first instance, if you are unable to resolve the issue
          informally, you should contact us directly so that we have a chance to
          put things right. In your contact email / letter / online you should
          set out the details of your complaint, the resulting consequences you
          have faced, and the remedy that you seek.
        </p>
        <p className={Styles.complaintProcedureSubParagraph}>
          You can expect your complaint to be acknowledged within 4 working days
          of receipt and you should get a response and an explanation within 10
          working days.
        </p>
        <p className={Styles.complaintProcedureSubParagraph}>
          Our contact details can be found on the ‘Contact Us’ part of our
          Grafterr Website -{" "}
          <a href="https://www.grafterr.com/">https://www.grafterr.com</a>
        </p>
        <h4 className={Styles.complaintProcedureSubTitle}>Stage 2</h4>
        <p className={Styles.complaintProcedureSubParagraph}>
          If you are not satisfied with the initial response to the complaint
          then you can write to the Chief Executive Officer by email or letter
          and ask for a review of your complaint and seek the response. You can
          expect the Chief Executive to acknowledge your request within 4
          working days of receipt and a response within 15 working days.
        </p>
        <p className={Styles.complaintProcedureSubParagraph}>
          The objective of the Grafterr is to resolve every issue as quickly as
          possible. However, inevitably certain issues may be more complex and
          therefore may require longer duration for a thorough investigation. If
          an issue requires more detailed investigation, you will receive
          communication from us describing what is being done to deal with the
          issue, and when a full reply can be expected and from whom. At this
          stage, we will give you a clear guideline of the timescales involved
          in further investigation.
        </p>
        <h4 className={Styles.complaintProcedureSubTitle}>Final Stage</h4>

        <p className={Styles.complaintProcedureSubParagraph}>
          If you are not satisfied with the subsequent reply and action were
          taken by the Chief Executive, then you have the option of writing to
          any of the following, depending on the nature of your complaint.
        </p>
        <p className={Styles.complaintProcedureSubParagraph}>
          <a
            className={Styles.complaintProcedureLink}
            href="https://ico.org.uk/"
          >
            https://ico.org.uk
          </a>
        </p>
        <p className={Styles.complaintProcedureSubParagraph}>
          <a
            className={Styles.complaintProcedureLink}
            href="http://www.hse.gov.uk/"
          >
            http://www.hse.gov.uk
          </a>
        </p>
        <p className={Styles.complaintProcedureSubParagraph}>
          <a
            className={Styles.complaintProcedureLink}
            href="https://www.citizensadvice.org.uk/consumer/get-more-help/if-you-need-more-help-about-a-consumer-issue/"
          >
            https://www.citizensadvice.org.uk/ consumer/get-more-help/
            if-you-need-more-help-about-a-consumer-issue
          </a>
        </p>
        <p className={Styles.complaintProcedureSubParagraph}>Thank you.</p>
      </div>
    </div>
  );
};

export default complaintProcedure;
