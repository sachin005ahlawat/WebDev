const nodemailer = require("nodemailer");
module.exports = async function sendEmail(option) {
    try {
      // email configuration=> transport
      const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: "sachin.ahlawat101@gmail.com",
          pass: "cdqjndoovpveslbk"
        }
      })
      // email options
      const emailOptions = {
        from: option.from,
        to:"sachin.ahlawat101@gmail.com",
        subject:option.subject,
        text: "I am testing email",
        html:option.html
      }
      // send mail
      await transport.sendMail(emailOptions);
    } catch (err) {
      console.log(err);
    }
  }