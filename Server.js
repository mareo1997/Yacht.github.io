//server.js


const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();
const nodemailer = require("nodemailer")

//add the router
app.use(express.static(__dirname));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/stylesheets'));
//Store all JS and CSS in Scripts folder.


app.post('/sendemail',(req,res,next)=>{
	console.log(req.body)
	/*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
	here we are using gmail as our service
	In Auth object , we specify our email and password
	*/
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		user: 'sdomi047@fiu.edu',
		pass: 'enter-password-here'
		}
	});

	var mailOptions = {
		from: 'sdomi047@fiu.edu',
		to: 'to-email-here',
		subject: 'Sending Email using Node.js',
		text: 'That was easy!'
	};

	
	transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
		res.send('error') // if error occurs send error as response to client

	}
	else {
		console.log('Email sent: ' + info.response);
		res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
	}
	});
})

app.listen(3000);

console.log('Running at Port 3000');


