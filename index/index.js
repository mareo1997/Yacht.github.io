function SendEmail(){
	Email.send({
		Host: "smtp.gmail.com",
		Port: "587",
		Username : "mareo1997@gmail.com",
		Password : "yjustice11",
		To : 'mareo1997@gmail.com',
		From : "mareo1997@gmail.com",
		Subject : "<email subject>",
		Body : "<email body>",
		}).then(
			message => alert("mail sent successfully")
		);
}