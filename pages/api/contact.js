export default (req, res) => {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

  const PASSWORD = process.env.password;
  const userEmail = process.env.useremail;
  let transporter = nodemailer.createTransport({
    // port: 465,
    // host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: userEmail,
      pass: PASSWORD,
    },
    secure: true,
  });

  const { emailInputVal, messageInputVal, nameInputVal, subjectInputVal } =
    req.body;

  const emailData = {
    from: userEmail,
    to: "vishal.vasishat@gmail.com",
    subject: `Message from ${nameInputVal}`,
    text: `${messageInputVal}`,
    html: `<!doctype html>
    <html ⚡4email>
      <head>
        <title>Vishal Portfolio</title>
      </head>
      <body>
        <p>This message is from ${nameInputVal}</p>
        <p>Sender Email is ${emailInputVal}</p>
        <p>This is regarding ${subjectInputVal}</p>
        <p>Sender Message : ${messageInputVal}</p>
      </body>
    </html>`,
  };

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
};
