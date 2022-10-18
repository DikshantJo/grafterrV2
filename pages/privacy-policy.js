import React from "react";
import Head from "next/head";

import Styles from "../styles/pages/privacyPolicy.module.css";

import Navbar from '../components/Navbar'

const privacyPolicy = () => {
  return (
    <div className={Styles.privacyPolicyMainContainer}>
      <Head>
        <title>Grafter GO Privacy policy</title>
        <meta
          name="description"
          content="We honor the privacy of our users. We are bound to protect the personal information of our users."
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

        <meta charSet="UTF-8" />
        <meta name="keywords" content="go" />
        <meta name="author" content="Grafterr Go" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* open graph data */}

        <meta property="og:title" content="Grafterr GO! - Privacy policy" />
        <meta
          property="og:url"
          content="https://www.grafterr.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We honor the privacy of our users. We are bound to protect the personal information of our users."
        />
        <meta
          property="og:image"
          content="https://www.grafterr.com/_next/static/media/grafterr-OG-image.44386200.jpg"
        />
        <meta property="og:site_name" content="Grafterr Go!" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:tittle" content="Grafterr GO! - Privacy policy" />
        <meta
          name="twitter:description"
          content="We honor the privacy of our users. We are bound to protect the personal information of our users."
        />
        <meta
          name="twitter:url"
          content="https://www.grafterr.com/privacy-policy"
        />
        <meta
          name="twitter:image"
          content="https://www.grafterr.com/_next/static/media/grafterr-OG-image.44386200.jpg"
        />
      </Head>
      <Navbar />
      <h1 className={Styles.privacyPolicyTitle}> Privacy policy</h1>
      <p className={Styles.privacyPolicySubParagraph}>
        We respect the privacy of our users and are committed to protecting the
        personal information of our users who access our website or services
        through any web browser, mobile application, platform, or device.
        Generally, we do not seek any personal information from visitors to our
        website; they are free to navigate our website with complete anonymity.
        However, specific sections of our website seek some generic data of the
        visitors. This privacy policy explains how we collect, share, or use
        your personal information in accordance with all applicable laws and
        regulations to data protection and privacy. You can also find
        information about how you can exercise your privacy rights. This privacy
        policy is in addition to any Terms of Use and by using our website or
        services you agree to us using your personal information as set out in
        this privacy policy. The terms “we”, “us” or “our” are each intended as
        reference to Grafterr and/or
        <a href="www.Grafterr.com"> www.Garfterr.com </a> and any terms not
        defined in this policy are defined in our Terms of Use.
      </p>
      <div className={Styles.subContainer}>
        <h4 className={Styles.privacyPolicySubTitle}>
          Information we collect automatically through our website
        </h4>

        <p className={Styles.privacyPolicySubParagraph}>
          We gather only essential and limited information as you navigate our
          website. Primarily, we gather your Internet Protocol (IP) address
          through the Internet access logs of our website. When you navigate
          www.Grafterr.com, your IP address is automatically obtained and
          registered in our Internet access logs. With these IP addresses, we
          diagnose any problems with our web server, manage and improve our
          website, based on the pages visited and enhance those features and
          content that our visitors considered interesting. These IP addresses
          are also useful to us in recognising our users and to collect broad
          demographic data. You may choose to not automatically share your
          location with us and remain anonymous by changing your devise and/or
          platform settings.
        </p>

        <p className={Styles.privacyPolicySubParagraph}>
          Cookies are used to collect certain data about our visitors. A
          &quot;cookie&quot; is a small piece of information about your visit to
          our website, such as how you have entered our website, how you
          navigated our website, and which information of our website was
          appealing to you. Our website sends this information to your browser,
          and the browser stores it on your device. Presently, only selected
          pages of our website use cookies. However, we have plans to extend
          this feature more extensively soon so that we can provide our users
          with better results from our website. However, you have complete
          freedom to customise your browser to notify you whenever you receive a
          cookie, and whether to accept it or not. If you do not want to receive
          any cookies, you can customize your browser settings to block the
          usage of cookies. For further information on cookies, please refer to
          our Cookie Policy.
        </p>
      </div>
      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>Information we ask for</h4>
        <p className={Styles.privacyPolicySubParagraph}>
          The user is not required to submit any personal data for simple
          navigation with www.Garfterr.com . Our website will seek your personal
          information, only when you want to access certain pages such as
          Enrolment, Online Quote, product purchasing or subscription for
          product information and services provided. Information we ask for in
          such circumstances may include your name, postal address, email
          address, telephone number, a secure password and whether you would
          like to receive information (such as marketing and promotional
          material, invitations to events, special offers, market research, and
          any other marketing material that we believe may be of interest to
          you) from us via email, SMS text, post or telephone. Where you have
          given us permission to send you marketing and promotional material,
          you will be able to withdraw it at any time by contacting our Customer
          Service Team or by using the “Unsubscribe” button on any marketing
          emails received from us.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          If you are placing an order to purchase any goods or subscribing for
          any of our monthly/annual services, we will also ask for your payment
          card details and/or bank account details to set up a Direct Debit to
          be able to fulfil your order. It is not possible to place an order or
          subscribe to any of our services without providing the requested
          personal information. To ensure that your credit/debit card is not
          used without your consent, we may validate the name, address and any
          other personal information supplied by you during the order process
          against appropriate third-party databases. By placing an order with
          us, you consent to such checks being made.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          Our website would only record your personal data when you wilfully
          submit it. Our visitors have the opportunity to register for an event
          or conference, order a white paper, or participate in an online survey
          at any point of navigation of our website. When we gather this type of
          data, we shall endeavour to inform you of the reason for seeking such
          information and how we are going to utilize it. When we ask you to
          provide personal data, you may choose to decline. Many of our products
          require some personal data to provide you with a service. If you
          choose not to provide data required to provide you with a product or
          feature, you cannot use that product or feature. Likewise, where we
          need to collect personal data by law or to enter into or fulfil a
          contract with you, and you do not provide the data, we will not be
          able to enter into the contract; or if this relates to an existing
          product you are using, we may have to suspend or cancel it. We will
          notify you if this is the case at the time. Where providing the data
          is optional, and you choose not to share personal data, features like
          personalisation that use such data will not work for you.
        </p>
      </div>
      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>
          How we use collected information
        </h4>
        <p className={Styles.privacyPolicySubParagraph}>
          We will only process your information if there is a legitimate
          business reason for doing so, and if that reason is permitted by law.
          Our website, as well as our trusted affiliates, independent
          contractors, and business associates, may utilize the personally
          identifiable information gathered through our website to contact our
          users regarding their products and services; to review your past
          purchases and viewing history; to tailor content displayed to you; to
          get valuable feedback on our products and services and those of our
          trusted partners; to improve our users’ interactive experiences; to
          provide support with complaints and troubleshooting; and to detect,
          investigate, report and seek to prevent fraud or crime. We may also
          utilize this information to research the effectiveness and efficiency
          of our website for marketing, advertising and sales efforts of our
          company, our trusted affiliates, our independent contractors, and our
          business partners. We also use data to analyse and develop the
          performance of our workforce. For example, all contacts made with our
          Customer Service Team are monitored and recorded via out internal
          ticketing system for quality control and training purposes. If you
          raise a query while we still hold a record of your previous
          communications with us, we may refer to this record so we can
          investigate or answer your query.
        </p>
      </div>
      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>
          Reasons we share personal data
        </h4>
        <p className={Styles.privacyPolicySubParagraph}>
          We never sell, rent, or lease the personal data of our users to any
          third party, and we never utilize or disclose personal information of
          a sensitive nature, such as information about any physical disability,
          race, religion, or political affiliations, without obtaining the
          explicit consent of our users.
        </p>

        <p className={Styles.privacyPolicySubParagraph}>
          We may share your personal information with our affiliates and other
          trusted businesses or persons to process it for us, based on our
          instructions and in compliance with our privacy policy and any other
          appropriate confidentiality and security measures. We disclose your
          personal data to companies we have contracted to render services on
          our behalf, such as handling the printing, processing, and delivery of
          mailings, processing online financial transactions, or analysing data
          we have gathered. We provide your personal data to these companies
          based on the understanding that the confidentiality of your personal
          data is maintained, and your personal data is used only for those
          purposes, which you have consented to. Additionally, they may contact
          you or send you messages, which might be of interest to you. However,
          we will only share your information with these third parties where you
          have given your consent to share your personal data in such a way.
        </p>

        <p className={Styles.privacyPolicySubParagraph}>
          We may access and/or disclose your personal data, in case it becomes
          legally mandatory or in a goodwill, if we consider that such
          disclosure is essential to legally conform or to comply with any legal
          procedure imposed on us or on our website, or to safeguard our rights
          and our property, or during any inevitable circumstances to safeguard
          other users of our website, our services, and the public.
        </p>
      </div>
      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>
          Retaining your information
        </h4>

        <p className={Styles.privacyPolicySubParagraph}>
          We will only retain your information for as long as reasonably
          necessary to fulfil the purposes we collected it for, including for
          the purposes of satisfying any legal, regulatory, tax, accounting or
          reporting requirements. We may retain your information for a longer
          period in the event of a complaint or if we reasonably believe there
          is a prospect of litigation in respect to our relationship with you.
        </p>

        <p className={Styles.privacyPolicySubParagraph}>
          When determining the appropriate retention periods, we will take into
          account factors including the amount and sensitivity of information;
          our contractual obligations and rights in relation to the information
          involved; legal obligation(s) under applicable law to retain
          information for a certain period of time; statute of limitations under
          applicable law(s); our legitimate interests for retaining the
          information; whether there is an actual or potential dispute; and
          guidelines issued by relevant data protection authorities.
        </p>

        <p className={Styles.privacyPolicySubParagraph}>
          {" "}
          When you delete data, we follow a deletion process to make sure that
          your data is safely and completely removed from our servers or
          retained only in anonymised form. We try to ensure that our services
          protect information from accidental or malicious deletion. Because of
          this, there may be delays between when you delete something and when
          copies are deleted from our active and backup systems.
        </p>
      </div>
      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>Security</h4>

        <p className={Styles.privacyPolicySubParagraph}>
          The security of your personal data is greatly important to us. As
          such, we have put in place appropriate technical and organisational
          measures/ industry standard technology to protect it from unlawful
          processing, accidental loss, destruction or damage. When you enter
          confidential billing information on our order forms, we encrypt the
          communication of that transaction through secure socket layer
          technology (SSL). In case you choose to use a third-party payment
          method to pay for your order, then the privacy statement and security
          practices of that third-party payment system will be applicable to
          your personal data. We strongly recommend that you to go through their
          privacy statement before providing your personal data.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          Where you have chosen a password which allows you to access certain
          parts of our services, you are responsible for keeping this password
          confidential. We advise you not to share your password with anyone and
          to use a unique password for our services. Additionally, be sure to
          sign off and close your browser when you have finished your session.
          This will help to ensure that others do not access your personal
          information if you share your computing devise or use a computing
          devise in a public place. We will not be liable for any unauthorised
          transactions entered into using your name and password.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          We generally follow the established industry standards to protect the
          personal data submitted through our website, both during transmission
          and after receipt. However, no mode of communication over the Internet
          or electronic storage is 100% secure. This risk is common across the
          Internet and not specific to our services. Therefore, we cannot
          guarantee the absolute security of your personal data, any
          transmission is at your own risk. We have implemented procedures to
          deal with any data breach and will notify you and any applicable
          regulator of a breach where we are legally required to do so.
        </p>
      </div>
      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>
          Links to other websites
        </h4>
        <p className={Styles.privacyPolicySubParagraph}>
          Our
          <a href="www.Garfterr.com  ">www.Garfterr.com </a>
          website may contain links to and from other websites. This privacy
          policy only applies to www.Garfterr.com . We provide these links to
          you only as a convenience and the inclusion of any link does not imply
          endorsement of the relevant website by us. Therefore, ePOS Hybrid is
          not responsible or liable for the privacy policies, practices, or the
          content of those third- party websites. We strongly recommend you
          check the terms and conditions and privacy policies of those
          third-party websites before you submit any personal information to
          them.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          If you come to <a href="www.Garfterr.com  ">www.Garfterr.com </a> from
          another website, we may receive personal information from the other
          website. You should read the privacy policy of the website you came
          from to find out more about this.
        </p>
      </div>
      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>
          Children’s privacy protection
        </h4>

        <p className={Styles.privacyPolicySubParagraph}>
          Our website and services are not meant for individuals thirteen years
          of age or younger. We do not permit the use of our website and
          services by anyone thirteen years of age or younger. We do not
          intentionally, directly, or passively, gather or maintain personal
          data from children thirteen years of age and younger. Therefore, we
          ask that if you are thirteen years of age or younger, you should stop
          using our website and services.
        </p>

        <h4 className={Styles.privacyPolicySubTitle}>
          Accessing or correcting your information
        </h4>

        <p className={Styles.privacyPolicySubParagraph}>
          You can access, update or request deletion of all your personal data
          that we have gathered through our website and/or services by
          contacting our office via the details listed on our Contact tab
          (https://www.Grafterr.com). We practice this procedure to better
          safeguard your personal data. You can correct or update any factual
          errors in your personal data by sending us a request that credibly
          shows an error. We will also take reasonable measures to protect the
          privacy and security of your personal information by verifying your
          identity before allowing access or updating your personal information.
        </p>
        <h4 className={Styles.privacyPolicySubTitle}>
          Changes to our privacy policy
        </h4>
        <p className={Styles.privacyPolicySubParagraph}>
          We reserve the right to modify the terms of this policy from time to
          time in response to changing legal, technical, or business
          developments. We will not make any special notification to you
          regarding any changes. Any amendments to this privacy policy will
          apply to you and your data immediately. We encourage you to
          periodically review this page for the latest information.
        </p>
      </div>

      <div className="subContainer">
        <h4 className={Styles.privacyPolicySubTitle}>
            SMS/MMS mobile message marketing program terms and conditions
        </h4>

        <p className={Styles.privacyPolicySubParagraph}>
          Grafterr (hereinafter, “We,” “Us,” “Our”) is offering a mobile messaging program (the “Program”) through AutopilotHQ, Inc. (“Autopilot”), which you agree to use and participate in subject to these Mobile Messaging Terms and Conditions and Privacy Policy (the “Agreement”). By opting in to or participating in any of our Programs, you accept and agree to these terms and conditions, including, without limitation, your agreement to resolve any disputes with us through binding, individual-only arbitration, as detailed in the “Dispute Resolution” section below. This Agreement is limited to the Program and is not intended to modify other Terms and Conditions that may govern the relationship between you and Us in other contexts.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
         <span className={ Styles.privacyPolicyParagraphTitle}>User Opt In:</span>  The Program allows Users to receive SMS/MMS mobile messages by affirmatively opting into the Program, such as through online, offline, or application-based enrollment forms. Regardless of the opt-in method you utilized to join the Program, you agree that this Agreement applies to your participation in the Program. By participating in the Program, you agree to receive autodialed or manually dialed marketing mobile messages (as applicable) at the phone number associated with your opt-in, and you understand that consent is not required to make any purchase from Us. While you consent to receive messages sent using an autodialer, the foregoing shall not be interpreted to suggest or imply that any or all of Our mobile messages are sent using an automatic telephone dialing system (“ATDS” or “autodialer”). Message and data rates may apply.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}>User Opt Out:</span> If you do not wish to continue participating in the Program, you agree to reply STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to any mobile message from Us in order to opt out of the Program. You may receive an additional mobile message confirming your decision to opt out. You understand and agree that the foregoing options are the only reasonable methods of opting out. You also understand and agree that any other method of opting out, including, but not limited to, texting words other than those set forth above or verbally requesting one of our employees to remove you from our list, is not a reasonable means of opting out.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}>Duty to Notify and Indemnify:</span> If at any time you intend to stop using the mobile telephone number that has been used to subscribe to the Program, including canceling your service plan or selling or transferring the phone number to another party, you agree that you will complete the User Opt Out process set forth above prior to ending your use of the mobile telephone number. You understand and agree that your agreement to do so is a material part of these terms and conditions. You further agree that, if you discontinue the use of your mobile telephone number without notifying Us of such change, you agree that you will be responsible for all costs (including attorneys’ fees) and liabilities incurred by Us, or any party that assists in the delivery of the mobile messages, as a result of claims brought by individual(s) who are later assigned that mobile telephone number. This duty and agreement shall survive any cancellation or termination of your agreement to participate in any of our Programs.
        </p>
        <p className={`Styles.privacyPolicyParagraphTitle ${Styles.privacyPolicyParagraphTitleI}`} style={{lineHeight:'30px;font-weight:600'}}>
          YOU AGREE THAT YOU SHALL INDEMNIFY, DEFEND, AND HOLD US HARMLESS FROM ANY CLAIM OR LIABILITY RESULTING FROM YOUR FAILURE TO NOTIFY US OF A CHANGE IN THE INFORMATION YOU HAVE PROVIDED, INCLUDING ANY CLAIM OR LIABILITY UNDER THE TELEPHONE CONSUMER PROTECTION ACT, 47 U.S.C. § 227, et seq., OR SIMILAR STATE AND FEDERAL LAWS, AND ANY REGULATIONS PROMULGATED THEREUNDER RESULTING FROM US ATTEMPTING TO CONTACT YOU AT THE MOBILE TELEPHONE NUMBER YOU PROVIDED.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}> Program Description: </span> Without limiting the scope of the Program, users that opt into the Program can expect to receive messages concerning the marketing and sale of digital and physical products, services, and events.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}> Cost and Frequency: </span> Message and data rates may apply. The Program involves recurring mobile messages, and additional mobile messages may be sent periodically based on your interaction with Us.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={`${Styles.privacyPolicyParagraphTitle}`}>Support Instructions:</span> For support regarding the Program, text “HELP” to the number you received messages from or email us at info@grafterr.com. Please note that the use of this email address is not an acceptable method of opting out of the program. Opt outs must be submitted in accordance with the procedures set forth above.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}> MMS Disclosure:</span> The Program will send SMS TMs (terminating messages) if your mobile device does not support MMS messaging.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}>Our Disclaimer of Warranty:</span> The Program is offered on an "as-is" basis and may not be available in all areas at all times and may not continue to work in the event of product, software, coverage or other changes made by your wireless carrier. We will not be liable for any delays or failures in the receipt of any mobile messages connected with this Program. Delivery of mobile messages is subject to effective transmission from your wireless service provider/network operator and is outside of Our control. We, any party that assists Us in the delivery of the mobile messages, and the respective wireless carriers, including T-Mobile, are not liable for delayed or undelivered mobile messages.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}> Participant Requirements:</span> You must have a wireless device of your own, capable of two-way messaging, be using a participating wireless carrier, and be a wireless service subscriber with text messaging service. Not all cellular phone providers carry the necessary service to participate. Check your phone capabilities for specific text messaging instructions.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
         <span className={ Styles.privacyPolicyParagraphTitle}> Age Restriction:</span> You may not use or engage with the Program if you are under thirteen (13) years of age. If you use or engage with the Program and are between the ages of thirteen (13) and eighteen (18) years of age, you must have your parent’s or legal guardian’s permission to do so. By using or engaging with the Program, you acknowledge and agree that you are not under the age of thirteen (13) years, are between the ages of thirteen (13) and eighteen (18) and have your parent’s or legal guardian’s permission to use or engage with the Program, or are of adult age in your jurisdiction. By using or engaging with the Program, you also acknowledge and agree that you are permitted by your jurisdiction’s Applicable Law to use and/or engage with the Platform.
        </p>
        <ul>
           <p className={Styles.privacyPolicySubParagraph}>  <span className={ Styles.privacyPolicyParagraphTitle}>Prohibited Content:</span> You acknowledge and agree to not send any prohibited content over the Program. Prohibited content includes:</p>
           <li className={Styles.privacyPolicySubParagraph}>
            * Any fraudulent, libelous, defamatory, scandalous, threatening, harassing, or stalking activity;
           </li>
           <li className={Styles.privacyPolicySubParagraph}>
           * Objectionable content, including profanity, obscenity, lasciviousness, violence, bigotry, hatred, and discrimination on the basis of race, sex, religion, nationality, disability, sexual orientation, or age;
           </li>
           <li className={Styles.privacyPolicySubParagraph}>
           * Pirated computer programs, viruses, worms, Trojan horses, or other harmful code;
           </li>
           <li className={Styles.privacyPolicySubParagraph}>
           * Any product, service, or promotion that is unlawful where such product, service, or promotion thereof is received;
           </li>
           <li className={Styles.privacyPolicySubParagraph}>
           * Any content that implicates and/or references personal health information that is protected by the Health Insurance Portability and Accountability Act (“HIPAA”) or the Health Information Technology for Economic and Clinical Health Act (“HITEC” Act); and
           </li>
           <li className={Styles.privacyPolicySubParagraph}>
           * Any other content that is prohibited by Applicable Law in the jurisdiction from which the message is sent.
           </li>
        </ul>
        <p className={Styles.privacyPolicySubParagraph}>
        <span className={ Styles.privacyPolicyParagraphTitle}> DISPUTE RESOLUTION - ARBITRATION CLAUSE AND CLASS ACTION WAIVER. PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS YOU AND WE HAVE AGAINST EACH OTHER ARE RESOLVED:</span> In the event that there is a dispute, claim, or controversy between you and Us, or any other third-party service provider, including Autopilot, acting on Our behalf to transmit the mobile messages within the scope of the Program, arising out of or relating to federal or state statutory claims, common law claims, this Agreement, or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, such dispute, claim, or controversy will be, to the fullest extent permitted by law, determined by arbitration in 27 Queen Charlotte St, Leith, Edinburgh EH6 6RP, UK before one arbitrator.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          The parties agree to submit the dispute to binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association (“AAA”) then in effect. Except as otherwise provided herein, the arbitrator shall apply the substantive laws of the Federal Judicial Circuit in which ePOS Hybrid’s principal place of business is located, without regard to its conflict of laws rules. Within ten (10) calendar days after the arbitration demand is served upon a party, the parties must jointly select an arbitrator with at least five years’ experience in that capacity and who has knowledge of and experience with the subject matter of the dispute. If the parties do not agree on an arbitrator within ten (10) calendar days, a party may petition the AAA to appoint an arbitrator, who must satisfy the same experience requirement. In the event of a dispute, the arbitrator shall decide the enforceability and interpretation of this arbitration agreement in accordance with the Federal Arbitration Act (“FAA”). The parties also agree that the AAA’s rules governing Emergency Measures of Protection shall apply in lieu of seeking emergency injunctive relief from a court. The decision of the arbitrator shall be final and binding, and no party shall have rights of appeal except for those provided in section 10 of the FAA. Each party shall bear its share of the fees paid for the arbitrator and the administration of the arbitration; however, the arbitrator shall have the power to order one party to pay all or any portion of such fees as part of a well-reasoned decision. The parties agree that the arbitrator shall have the authority to award attorneys’ fees only to the extent expressly authorized by statute or contract. The arbitrator shall have no authority to award punitive damages and each party hereby waives any right to seek or recover punitive damages with respect to any dispute resolved by arbitration. The parties agree to arbitrate solely on an individual basis, and this agreement does not permit class arbitration or any claims brought as a plaintiff or class member in any class or representative arbitration proceeding. Except as may be required by law, neither a party nor the arbitrator may disclose the existence, content, or results of any arbitration without the prior written consent of both parties, unless to protect or pursue a legal right. If any term or provision of this Section is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of this Section or invalidate or render unenforceable such term or provision in any other jurisdiction. If for any reason a dispute proceeds in court rather than in arbitration, the parties hereby waive any right to a jury trial. This arbitration provision shall survive any cancellation or termination of your agreement to participate in any of our Programs.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          <span className={ Styles.privacyPolicyParagraphTitle}>Miscellaneous:</span> You warrant and represent to Us that you have all necessary rights, power, and authority to agree to these Terms and perform your obligations hereunder, and nothing contained in this Agreement or in the performance of such obligations will place you in breach of any other contract or obligation. The failure of either party to exercise in any respect any right provided for herein will not be deemed a waiver of any further rights hereunder. If any provision of this Agreement is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and effect and enforceable. Any new features, changes, updates or improvements of the Program shall be subject to this Agreement unless explicitly stated otherwise in writing. We reserve the right to change this Agreement from time to time. Any updates to this Agreement shall be communicated to you. You acknowledge your responsibility to review this Agreement from time to time and to be aware of any such changes. By continuing to participate in the Program after any such changes, you accept this Agreement, as modified.
        </p>
        <p className={Styles.privacyPolicySubParagraph}>
          Last updated 6th October 2022
        </p>
        
      </div>



      
    </div>
  );
};

export default privacyPolicy;
