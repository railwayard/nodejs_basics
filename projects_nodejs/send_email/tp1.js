const nodemailer =require ('nodemailer');

const x = nodemailer.createTransport({
// The 'x' object is responsible for sending the emails.

    service:'gmail',
    auth :{ 
        username: 'hello@gmail.com',
        password:'1001'
    }
});

const y = {
//The 'y' object is used to define the email properties, including the sender, recipient, subject and email body content.

    from:'from@gmail.com',
    to:'to@gmail.com',
    subject:'headline',
    text:'This is a test email from NodeJS',
}


x.sendMail(y, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

//The sendMail methods is used to send the email and return an error if the sending fails or a response on the success information.

// Using the Custom SMTP Server
// We can also use the custom SMTP server which allows you to send the emails programmatically. 
// But for production environments, using the dedicated SMTP service like SendGrid, Mailgun, or AWS SES is highly recommended.