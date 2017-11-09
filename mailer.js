const express = require('express');
const app = express();

try {
    const runon = (process.argv[2]).split(':');
    const host = runon[0];
    const port = runon[1];
    
    if (process.argv[3] == 'mailgun') 
    {
        const api_key = process.argv[4];
        const domain = process.argv[5];
        const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    } 
    else if (process.argv[3] == 'sendgrid') 
    {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.argv[4]);
    } 
    else if (process.argv[3] == 'nodemailer') 
    {
        const nodemailer = require('nodemailer');
    }
    
    app.use(express.json());
    app.post('/', function (req, res) {
        try {
            var params = req.body;
            var from = params.from;
            var to = params.to;
            var subject = params.subject;
            var html = params.html;

            if (process.argv[3] == 'nodemailer') 
            {
                var host = params.host;
                var port = params.port;
                var ssl = params.ssl;
                var user = params.user;
                var pass = params.pass;
                let transporter = nodemailer.createTransport({
                    host: host,
                    port: port,
                    secure: ssl,
                    auth: {
                        user: user,
                        pass: pass
                    }
                });

                let mailOptions = {
                    from: from,
                    to: to,
                    subject: subject,
                    html: html
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        res.send(error.message);
                    } else {
                        transporter.close();
                        res.send(true);
                    }
                });
            } 
            
            else if (process.argv[3] == 'mailgun') 
            
            {
                var data = {
                    from: from,
                    to: to,
                    subject: subject,
                    html: html
                };
                 
                mailgun.messages().send(data, function (error, body) {
                    if (error) {
                        res.send(error.message);
                    } else {
                        res.send(true);
                    }
                });
            } 
            
            else if (process.argv[3] == 'sendgrid') 
            
            {
                const msg = {
                    to: to,
                    from: from,
                    subject: subject,
                    html: html
                };
                sgMail.send(msg);
            }
        } catch (error) {
            res.send(error.message);
        }
    });
    app.listen(port, host);
    console.log('app listening to ', port);
} catch (error) {
    console.log(error.message);
}

