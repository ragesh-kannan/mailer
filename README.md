## Welcome to GitHub Pages

This module helps you to send mail from anywhere

### Mailer

Please follw the steps to use the mailer module and this module need some of the npm dependencies shown below. Please install them as it is.

```markdown

1.) git clone https://github.com/ragesh-kannan/mailer.git
2.) cd mailer

inside mailer folder, run the below code,

**npm install nodemailer**
**npm install express**
**npm install body-parser**

after installing the above modules, execute the below command with _port (for example - 3000, you can use any port you want)_,

**node mailer.js 3000**

after executing the above command, you the access the mail sending api in 
**http://localhost:port/sendmail/**

**json parameter to be post for the above api is**
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

**Thank you**
