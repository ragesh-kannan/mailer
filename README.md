### Mailer

Please follow the steps to use the mailer module to send mail from anywhere and this module need some of the npm dependencies shown below. Lets install them as it is.

1.) git clone https://github.com/ragesh-kannan/mailer.git
2.) cd mailer

Inside mailer folder, install the dependency modules shown below,

npm install nodemailer
npm install express
npm install body-parser

Now execute the below command with port (for example - 3000, you can use any port you want),

node mailer.js 3000

after executing the above command, you the access the mail sending api in 
http://localhost:port/sendmail/
```
json parameter to be post for the above api is
{
  "host": "{{smtp server}}",
  "port": "{{smtp port}}",
  "ssl": "{{true or false}}",
  "user": "{{smtp username}}",
  "pass": "{{smtp password}}",
  "from": "{{from mail address}}",
  "to": "{{to mail address}}",
  "subject": "{{subject}}",
  "html": "{{html content}}"
}
```
Thank you
