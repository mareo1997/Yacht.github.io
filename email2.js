var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sdomi047@fiu.edu',
    pass: 'aUn-d4v-vDV-znr'
  }
});

var mailOptions = {
  from: 'sdomi047@fiu.edu',
  to: 'mareo1997@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});