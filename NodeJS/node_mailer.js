
// Sending an Email using NodeMailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'iitbalu1993@gmail.com',
    pass: '123456@143'
  }
});

var mailOptions = {
  from: 'iitbalu1993@gmail.com',
  to: 'balakrishna.kandikanti@abhrainc.com', //to: 'myfriend@yahoo.com, myotherfriend@yahoo.com', 
  subject: 'Sending Email using Node.js',    // For multiple mails
  text: 'That was easy!'                  //html: '<h1>my Account</h1><p>Welcome to my Github!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});