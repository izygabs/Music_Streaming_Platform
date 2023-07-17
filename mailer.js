// const mailer = require("nodemailer");

const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "izygabss@gmail.com",
    pass: process.env.mail_password,
  },
});

const nodeMailer = (artistEmail, subject, message) => {
  const mailOptions = {
    from: "izygabss@gmail.com", // Sender address
    to: artistEmail, // List of recipients
    subject: subject, // Subject line
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
module.exports = nodeMailer;
