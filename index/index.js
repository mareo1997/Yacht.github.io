// Try edit message
const data = {
  message: 'Login',
}

$('#msg').html(data.message)

function SendEmail(){
	Email.send({
		Host: "smtp.gmail.com",
		Port: "587",
		Username : "mareo1997@gmail.com",
		Password : "",
		To : 'myapp002@fiu.edu',
		From : "mareo1997@gmail.com",
		Subject : "<email subject>",
		Body : "<email body>",
		}).then(
			message => alert("mail sent successfully")
		);
	})
}