### node-mailer wrapper

Google Compute Engine does not allow outbound connections on ports 25, 465, and 587. Although standard email ports are blocked, you can choose a non-standard port to send email through or can also take advantage of the mail services offered by Compute Engine partners.  If you need to send mail through a corporate mail server but are blocked by the port restrictions described at the top of this page, you can use a VPN to bypass these restrictions.  If above all options are not available you can use this module which provides api access for mail sending to your SMTP service from within GCE like restricted environment. You may have to host this in an environment that don't have the port restrictions, thus working around the port restrictions, though you still may have to implement your own api end-point access restriction on top of this.

```
1.) git clone https://github.com/ragesh-kannan/mailer.git
2.) cd mailer
```
Inside mailer folder, install the dependency modules shown below,
```
npm install express
```
for nodemailer - Now execute the below command with port (for example - 3000, you can use any port you want),
```
node mailer.js 3000 "nodemailer"
```
after executing the above command, you the access the mail sending api in 
```
http://localhost:3000/
```

json parameter to be post for the above api is
```
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
for mailgun - Now execute the below command with port (for example - 3000, you can use any port you want),
```
node mailer.js 3000 "mailgun" {{apikey}} {{domainname}}
```
after executing the above command, you the access the mail sending api in 
```
http://localhost:3000/
```

json parameter to be post for the above api is
```
{
  "from": "{{from mail address}}",
  "to": "{{to mail address}}",
  "subject": "{{subject}}",
  "html": "{{html content}}"
}
```
for sendgrid - Now execute the below command with port (for example - 3000, you can use any port you want),
```
node mailer.js 3000 "sendgrid" {{apikey}}
```
after executing the above command, you the access the mail sending api in 
```
http://localhost:3000/
```

json parameter to be post for the above api is
```
{
  "from": "{{from mail address}}",
  "to": "{{to mail address}}",
  "subject": "{{subject}}",
  "html": "{{html content}}"
}
```

Thank you
