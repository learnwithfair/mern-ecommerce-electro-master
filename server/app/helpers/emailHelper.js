"use strict";
const nodemailer = require("nodemailer");
const {
  smtpUsername,
  smtpPassword,
} = require("../../resources/js/secret/secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, //587
  secure: true, // true for 465, false for other ports
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const emailWithNodeMailer = async (emailData) => {
  try {
    const mailOptions = {
      from: smtpUsername, // sender address
      to: emailData.email, // list of receivers
      subject: emailData.subject, // Subject line
      html: emailData.html, // html body
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Message Sent : %s", info.response);
  } catch (error) {
    console.error("Error occured while sending email: ", error);
    throw error;
  }
};
module.exports = emailWithNodeMailer;
