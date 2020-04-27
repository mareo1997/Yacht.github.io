var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var transporter = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		      user: 'sdomi047@fiu.edu',
		      pass: 'enter-password-here'
		    }
});

app.get('/send',function(req,res){
		var nodemailer = require('nodemailer');
		
		var mailOptions = {
		    from: 'sdomi047@fiu.edu',
		    to: 'to-email-address-here',
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
});


app.listen(3000,function(){
console.log("Express Started on Port 3000");
});