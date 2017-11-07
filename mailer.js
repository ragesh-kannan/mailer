const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.argv[2];;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/sendmail', function (req, res) {
    var req = JSON.parse(req.body),
    host = req.host,
    port = req.port,
    ssl = req.ssl,
    user = req.user,
    pass = req.pass,
    from = req.from,
    to = req.to,
    subject = req.subject,
    html = req.html;
    
    try {
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
