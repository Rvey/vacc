const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const sendMail = async (email, firstName , lastName, date ) => {
  try {
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    })
    
    const handlebarOptions = {
      viewEngine: {
        extName: '.handlebars',
        partialsDir: './src/utils/',
        defaultLayout: false,
      },
      viewPath: './src/utils/',
      extName: '.handlebars',
    }
    mailTransporter.use('compile', hbs(handlebarOptions))
    let mailDetails = {
      from: process.env.EMAIL,
      to: `${email}`,
      subject: 'Vaccine Notification',
      template: 'email',
      context: {
        firstName: firstName,
        lastName:lastName,
        date: date,
      },
    }

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log('Error Occurs', err)
      } else {
        console.log('Email sent successfully', data)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendMail