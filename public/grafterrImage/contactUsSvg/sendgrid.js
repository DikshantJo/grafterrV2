// require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SG_API_KEY } = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { name, email, message, businessName, phone } = req.body;
  console.log(name, email, message);
  const msg = [
    {
      to: "it@eposhybrid.com", // Change to your recipient
      from: "donotreply@grafterr.com", // Change to your verified sender
      cc: [
        "dikshant@fininfocom.com",
        "info@grafterr.com",
        "lukasz@eposhybrid.com",
        "customersuccess@eposhybrid.com",
      ],
      subject: `Customer enquiry from ${name}`,
      html: `  
        <!DOCTYPE html>
        <html lang="en">
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <head>
            <meta charset="utf-8">
            <title>Customer enquiry</title>
              <style>
                  table {
                      width: 100%;
                      border-collapse: collapse;
                      border-spacing: 0;
                  text-align: center;
                  }
                  
                  table th,
                  table td {
                      text-align: center;
                  }
                  
                  table th {
                      white-space: nowrap;
                      font-weight: normal;
                  }
                  
                  .invoice_hed table th,
                  table td,
                  table th,
                  table td {
                      padding: 10px 20px;
                  }
                  
                  @media only screen and (max-width: 992px) {
                      .hybird {
                          width: 100% !important;
                      }
                  }
                  
                  @media only screen and (max-width: 767px) {
                    .code__text{
                      font-size: 26px !important;
                      margin-bottom: 12px !important;
                      /* font-family: 'Open Sans' !;
                      letter-spacing: 10px;font-family: 'Google Sans', sans-serif !important; */
                    }
                    .verification_code{
                      font-size: 12px;
                    }
                    .epos_go{
                      line-height: 1.3 !important;
                    }
                  }
              </style>
            </head>

        <body class="hybird" style="position: relative; width: 800px;  margin: 0 auto; color: #fff;  font-family: 'Google Sans' font-size: 14px;">
            <table>
                <tr>
                    <td>
                        <table style="background-color: #F9F9F9;">
                            <tr>
                                <td>
                                    <a href="#">
                                        <img src="https://www.grafterr.uk/static/logo_with_text.png" alt="logo" style="width:100px;margin-bottom: 10px;padding-top: 10px;"> 
                                    </a>
                                    <p style="font-size: 18px;
                                    color: #2E3E50;
                                    font-weight: 700;
                                    font-size: 36px;
                                    font-style: normal;line-height: 1.4;font-family: 'Google Sans', sans-serif;">
                                        ${businessName}
                                    </p>
                                </td>
                            </tr>
                            
                        </table>
                        <table style="text-align:center;">
                            <tr>
                                <td class="epos_go" style="font-size: 18px;
                                color: #2E3E50;
                                font-weight: 500;
                                font-size: 16px;
                                font-style: normal;line-height: 1.7;margin-bottom: 55px;font-family: 'Google Sans';padding: 39px 18px 28px 0px;">
                              <p style="text-align:center">
                                    <span class="code__text" style="
                                    width: 60%;
                                    margin: 0px auto;
                                    text-align: center;
                                    font-size: 26px;
                                    font-family: 'Google Sans';
                                    font-family: 'Google Sans', sans-serif;margin-bottom: 8pt;">${name}</span>
                                  </p>
                                  
                                <span class="verification_code" style="font-family: 'Google Sans', sans-serif;">
                                    ${message} 
                                </span>
                                <span  style="color:#E64D3D;text-decoration: none;font-family: 'Google Sans', sans-serif;margin-top:20px;display:block;opacity:0.8;">Email:${email}</span>
                                <span style="display:block;opacity:0.8">phone: ${phone}</span>
                                
                                </td>
                            </tr>
                        </table>
                        <table class="footer" style="background-color: #F9F9F9;">
                            <tr>
                                <td >
                                    <span style="color:#2E3E50;font-size: 16px;font-weight: 500;padding-top: 10px;display: block;margin-bottom: 10px; ">Follow us on:</span>

                                    <div style="padding-top: 10px;margin-bottom: 20px; ">
                                        <a href="# " target="_blank " style="margin: 5px; text-decoration: none; ">
                                            <img class="fb" src="https://sandbox786.com/email-images/fb.png" alt="facebook" width="40" width="40px " height="40" height="40px">
                                        </a>

                                        <a href="#" target="_blank " style="margin: 5px;text-decoration: none; ">
                                            <img class="twi" src="https://sandbox786.com/email-images/twitter.png" alt="twitter" width="40" width="40px " height="40" height="40px ">

                                        </a>

                                        <a href="# " target="_blank " style="margin: 5px;text-decoration: none; ">
                                            <img class="link" src="https://sandbox786.com/email-images/linkdin.png" alt="linkdin" width="40" width="40px " height="40" height="40px">
                                        </a>

                                        <a href="# " target="_blank " style="margin: 5px;text-decoration: none; ">
                                            <img class="insta" src="https://sandbox786.com/email-images/insta.png" alt="instagram" width="40" width="40px " height="40" height="40px">
                                        </a>
                                    </div>
                                   
                                    </p>
                                    <p class="footerP" style=" font-size: 12px; line-height: 1.6; margin: 0px; color: #999999; font-weight: 500;margin-bottom: 10pt; ">@2022 Grafterr All Right Reserved. <br>Register office: iHybrid Limited, 27 Queen Charlotte Street, Edinburgh, EH6 6AX </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <!--<footer style="margin-top: 41px;border-top: 1px solid #AAAAAA; padding: 8px 0; text-align: center;">Invoice was created on a computer and is valid without the signature and seal.</footer>-->
        </body>

        </html>
      `,
    },
    /* {
      to: 'dikshant@fininfocom.com', // Change to your recipient
      from: 'it@eposhybrid.com', // Change to your verified sender
      // cc:'dikshantjoshi97@gmail.com',
      subject: "To team",
      html: `<p><strong>name: </strong>${name}</p>
      <p><strong>email: </strong>${email}</p>    
      <p><strong>message: </strong>${message}</p>`,
    }, */
  ];

  try {
    await sgMail.send(msg);
    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.body);
    }
    res.status(400).json({ status: "ERROR", message: error.message });
  }

  // res.status(200).json({ success: true });
}
