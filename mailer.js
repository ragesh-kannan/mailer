const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = process.argv[2];

try {
    app.use(express.json());
    app.post('/', function (req, res) {
        try {
            var req = req.body,
                host = req.host,
                port = req.port,
                ssl = req.ssl,
                user = req.user,
                pass = req.pass,
                from = req.from,
                to = req.to,
                subject = req.subject,
                html = req.html;
            
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
                    res.send(false);
                } else {
                    transporter.close();
                    res.send(true);
                }
            });
        } catch (error) {
            res.send(error.message);
        }
    });
    app.listen(port);
    console.log('app listening to ', port);
} catch (error) {
    console.log(error.message);
}
