const nodemailer = require('nodemailer')

const sendEmail = async options => {
    const transport = {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service:"gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    };

    const transporter = nodemailer.createTransport(transport);

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

   await transporter.sendMail(message,function(error,info){
    if (error) {
        console.log(error);
    } else {
        console.log("Mail Sent Successfully"+info.response)
    }
   })
}

module.exports = sendEmail