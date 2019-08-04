var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
   host: "smtp.gmail.com",
  auth: {
    user: 'username',
    pass: 'password'
  },
    tls: {
        rejectUnauthorized: false
    }
});
exports.SendMail = function sendEmail(toAdd,passw){


var mailOptions = {
 // from: 'wistabot@gmail.com',
  from:'"WiSTABot Admin" <username>',
  to: toAdd,
  subject: 'Account creation',
  /*text: 'That was easy!'*/
  html: '<!DOCTYPE html>'+
'<html lang="en" style="box-sizing: border-box; --blue: #007bff; --indigo: #6610f2; --purple: #6f42c1; --pink: #e83e8c; --red: #dc3545; --orange: #fd7e14; --yellow: #ffc107; --green: #28a745; --teal: #20c997; --cyan: #17a2b8; --white: #fff; --gray: #6c757d; --gray-dark: #343a40; --primary: #007bff; --secondary: #6c757d; --success: #28a745; --info: #17a2b8; --warning: #ffc107; --danger: #dc3545; --light: #f8f9fa; --dark: #343a40; --breakpoint-xs: 0; --breakpoint-sm: 576px; --breakpoint-md: 768px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px; --font-family-sans-serif: -apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,\'Noto Sans\',sans-serif,\'Apple Color Emoji\',\'Segoe UI Emoji\',\'Segoe UI Symbol\',\'Noto Color Emoji\'; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,\'Liberation Mono\',\'Courier New\',monospace; font-family: sans-serif; line-height: 1.15; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent;">'+
'<head>'+
'  <title>Bootstrap Example</title>'+
'  <meta charset="utf-8">'+
'  <meta name="viewport" content="width=device-width, initial-scale=1">'+
'  <style>'+
'@media (min-width:576px) {'+
'  .container {'+
'    max-width: 540px;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .container {'+
'    max-width: 720px;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .container {'+
'    max-width: 960px;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .container {'+
'    max-width: 1140px;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .col-sm {'+
'    -ms-flex-preferred-size: 0;'+
'    flex-basis: 0;'+
'    -ms-flex-positive: 1;'+
'    flex-grow: 1;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-sm-auto {'+
'    -ms-flex: 0 0 auto;'+
'    flex: 0 0 auto;'+
'    width: auto;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-sm-1 {'+
'    -ms-flex: 0 0 8.333333%;'+
'    flex: 0 0 8.333333%;'+
'    max-width: 8.333333%;'+
'  }'+
''+
'  .col-sm-2 {'+
'    -ms-flex: 0 0 16.666667%;'+
'    flex: 0 0 16.666667%;'+
'    max-width: 16.666667%;'+
'  }'+
''+
'  .col-sm-3 {'+
'    -ms-flex: 0 0 25%;'+
'    flex: 0 0 25%;'+
'    max-width: 25%;'+
'  }'+
''+
'  .col-sm-4 {'+
'    -ms-flex: 0 0 33.333333%;'+
'    flex: 0 0 33.333333%;'+
'    max-width: 33.333333%;'+
'  }'+
''+
'  .col-sm-5 {'+
'    -ms-flex: 0 0 41.666667%;'+
'    flex: 0 0 41.666667%;'+
'    max-width: 41.666667%;'+
'  }'+
''+
'  .col-sm-6 {'+
'    -ms-flex: 0 0 50%;'+
'    flex: 0 0 50%;'+
'    max-width: 50%;'+
'  }'+
''+
'  .col-sm-7 {'+
'    -ms-flex: 0 0 58.333333%;'+
'    flex: 0 0 58.333333%;'+
'    max-width: 58.333333%;'+
'  }'+
''+
'  .col-sm-8 {'+
'    -ms-flex: 0 0 66.666667%;'+
'    flex: 0 0 66.666667%;'+
'    max-width: 66.666667%;'+
'  }'+
''+
'  .col-sm-9 {'+
'    -ms-flex: 0 0 75%;'+
'    flex: 0 0 75%;'+
'    max-width: 75%;'+
'  }'+
''+
'  .col-sm-10 {'+
'    -ms-flex: 0 0 83.333333%;'+
'    flex: 0 0 83.333333%;'+
'    max-width: 83.333333%;'+
'  }'+
''+
'  .col-sm-11 {'+
'    -ms-flex: 0 0 91.666667%;'+
'    flex: 0 0 91.666667%;'+
'    max-width: 91.666667%;'+
'  }'+
''+
'  .col-sm-12 {'+
'    -ms-flex: 0 0 100%;'+
'    flex: 0 0 100%;'+
'    max-width: 100%;'+
'  }'+
''+
'  .order-sm-first {'+
'    -ms-flex-order: -1;'+
'    order: -1;'+
'  }'+
''+
'  .order-sm-last {'+
'    -ms-flex-order: 13;'+
'    order: 13;'+
'  }'+
''+
'  .order-sm-0 {'+
'    -ms-flex-order: 0;'+
'    order: 0;'+
'  }'+
''+
'  .order-sm-1 {'+
'    -ms-flex-order: 1;'+
'    order: 1;'+
'  }'+
''+
'  .order-sm-2 {'+
'    -ms-flex-order: 2;'+
'    order: 2;'+
'  }'+
''+
'  .order-sm-3 {'+
'    -ms-flex-order: 3;'+
'    order: 3;'+
'  }'+
''+
'  .order-sm-4 {'+
'    -ms-flex-order: 4;'+
'    order: 4;'+
'  }'+
''+
'  .order-sm-5 {'+
'    -ms-flex-order: 5;'+
'    order: 5;'+
'  }'+
''+
'  .order-sm-6 {'+
'    -ms-flex-order: 6;'+
'    order: 6;'+
'  }'+
''+
'  .order-sm-7 {'+
'    -ms-flex-order: 7;'+
'    order: 7;'+
'  }'+
''+
'  .order-sm-8 {'+
'    -ms-flex-order: 8;'+
'    order: 8;'+
'  }'+
''+
'  .order-sm-9 {'+
'    -ms-flex-order: 9;'+
'    order: 9;'+
'  }'+
''+
'  .order-sm-10 {'+
'    -ms-flex-order: 10;'+
'    order: 10;'+
'  }'+
''+
'  .order-sm-11 {'+
'    -ms-flex-order: 11;'+
'    order: 11;'+
'  }'+
''+
'  .order-sm-12 {'+
'    -ms-flex-order: 12;'+
'    order: 12;'+
'  }'+
''+
'  .offset-sm-0 {'+
'    margin-left: 0;'+
'  }'+
''+
'  .offset-sm-1 {'+
'    margin-left: 8.333333%;'+
'  }'+
''+
'  .offset-sm-2 {'+
'    margin-left: 16.666667%;'+
'  }'+
''+
'  .offset-sm-3 {'+
'    margin-left: 25%;'+
'  }'+
''+
'  .offset-sm-4 {'+
'    margin-left: 33.333333%;'+
'  }'+
''+
'  .offset-sm-5 {'+
'    margin-left: 41.666667%;'+
'  }'+
''+
'  .offset-sm-6 {'+
'    margin-left: 50%;'+
'  }'+
''+
'  .offset-sm-7 {'+
'    margin-left: 58.333333%;'+
'  }'+
''+
'  .offset-sm-8 {'+
'    margin-left: 66.666667%;'+
'  }'+
''+
'  .offset-sm-9 {'+
'    margin-left: 75%;'+
'  }'+
''+
'  .offset-sm-10 {'+
'    margin-left: 83.333333%;'+
'  }'+
''+
'  .offset-sm-11 {'+
'    margin-left: 91.666667%;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .col-md {'+
'    -ms-flex-preferred-size: 0;'+
'    flex-basis: 0;'+
'    -ms-flex-positive: 1;'+
'    flex-grow: 1;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-md-auto {'+
'    -ms-flex: 0 0 auto;'+
'    flex: 0 0 auto;'+
'    width: auto;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-md-1 {'+
'    -ms-flex: 0 0 8.333333%;'+
'    flex: 0 0 8.333333%;'+
'    max-width: 8.333333%;'+
'  }'+
''+
'  .col-md-2 {'+
'    -ms-flex: 0 0 16.666667%;'+
'    flex: 0 0 16.666667%;'+
'    max-width: 16.666667%;'+
'  }'+
''+
'  .col-md-3 {'+
'    -ms-flex: 0 0 25%;'+
'    flex: 0 0 25%;'+
'    max-width: 25%;'+
'  }'+
''+
'  .col-md-4 {'+
'    -ms-flex: 0 0 33.333333%;'+
'    flex: 0 0 33.333333%;'+
'    max-width: 33.333333%;'+
'  }'+
''+
'  .col-md-5 {'+
'    -ms-flex: 0 0 41.666667%;'+
'    flex: 0 0 41.666667%;'+
'    max-width: 41.666667%;'+
'  }'+
''+
'  .col-md-6 {'+
'    -ms-flex: 0 0 50%;'+
'    flex: 0 0 50%;'+
'    max-width: 50%;'+
'  }'+
''+
'  .col-md-7 {'+
'    -ms-flex: 0 0 58.333333%;'+
'    flex: 0 0 58.333333%;'+
'    max-width: 58.333333%;'+
'  }'+
''+
'  .col-md-8 {'+
'    -ms-flex: 0 0 66.666667%;'+
'    flex: 0 0 66.666667%;'+
'    max-width: 66.666667%;'+
'  }'+
''+
'  .col-md-9 {'+
'    -ms-flex: 0 0 75%;'+
'    flex: 0 0 75%;'+
'    max-width: 75%;'+
'  }'+
''+
'  .col-md-10 {'+
'    -ms-flex: 0 0 83.333333%;'+
'    flex: 0 0 83.333333%;'+
'    max-width: 83.333333%;'+
'  }'+
''+
'  .col-md-11 {'+
'    -ms-flex: 0 0 91.666667%;'+
'    flex: 0 0 91.666667%;'+
'    max-width: 91.666667%;'+
'  }'+
''+
'  .col-md-12 {'+
'    -ms-flex: 0 0 100%;'+
'    flex: 0 0 100%;'+
'    max-width: 100%;'+
'  }'+
''+
'  .order-md-first {'+
'    -ms-flex-order: -1;'+
'    order: -1;'+
'  }'+
''+
'  .order-md-last {'+
'    -ms-flex-order: 13;'+
'    order: 13;'+
'  }'+
''+
'  .order-md-0 {'+
'    -ms-flex-order: 0;'+
'    order: 0;'+
'  }'+
''+
'  .order-md-1 {'+
'    -ms-flex-order: 1;'+
'    order: 1;'+
'  }'+
''+
'  .order-md-2 {'+
'    -ms-flex-order: 2;'+
'    order: 2;'+
'  }'+
''+
'  .order-md-3 {'+
'    -ms-flex-order: 3;'+
'    order: 3;'+
'  }'+
''+
'  .order-md-4 {'+
'    -ms-flex-order: 4;'+
'    order: 4;'+
'  }'+
''+
'  .order-md-5 {'+
'    -ms-flex-order: 5;'+
'    order: 5;'+
'  }'+
''+
'  .order-md-6 {'+
'    -ms-flex-order: 6;'+
'    order: 6;'+
'  }'+
''+
'  .order-md-7 {'+
'    -ms-flex-order: 7;'+
'    order: 7;'+
'  }'+
''+
'  .order-md-8 {'+
'    -ms-flex-order: 8;'+
'    order: 8;'+
'  }'+
''+
'  .order-md-9 {'+
'    -ms-flex-order: 9;'+
'    order: 9;'+
'  }'+
''+
'  .order-md-10 {'+
'    -ms-flex-order: 10;'+
'    order: 10;'+
'  }'+
''+
'  .order-md-11 {'+
'    -ms-flex-order: 11;'+
'    order: 11;'+
'  }'+
''+
'  .order-md-12 {'+
'    -ms-flex-order: 12;'+
'    order: 12;'+
'  }'+
''+
'  .offset-md-0 {'+
'    margin-left: 0;'+
'  }'+
''+
'  .offset-md-1 {'+
'    margin-left: 8.333333%;'+
'  }'+
''+
'  .offset-md-2 {'+
'    margin-left: 16.666667%;'+
'  }'+
''+
'  .offset-md-3 {'+
'    margin-left: 25%;'+
'  }'+
''+
'  .offset-md-4 {'+
'    margin-left: 33.333333%;'+
'  }'+
''+
'  .offset-md-5 {'+
'    margin-left: 41.666667%;'+
'  }'+
''+
'  .offset-md-6 {'+
'    margin-left: 50%;'+
'  }'+
''+
'  .offset-md-7 {'+
'    margin-left: 58.333333%;'+
'  }'+
''+
'  .offset-md-8 {'+
'    margin-left: 66.666667%;'+
'  }'+
''+
'  .offset-md-9 {'+
'    margin-left: 75%;'+
'  }'+
''+
'  .offset-md-10 {'+
'    margin-left: 83.333333%;'+
'  }'+
''+
'  .offset-md-11 {'+
'    margin-left: 91.666667%;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .col-lg {'+
'    -ms-flex-preferred-size: 0;'+
'    flex-basis: 0;'+
'    -ms-flex-positive: 1;'+
'    flex-grow: 1;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-lg-auto {'+
'    -ms-flex: 0 0 auto;'+
'    flex: 0 0 auto;'+
'    width: auto;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-lg-1 {'+
'    -ms-flex: 0 0 8.333333%;'+
'    flex: 0 0 8.333333%;'+
'    max-width: 8.333333%;'+
'  }'+
''+
'  .col-lg-2 {'+
'    -ms-flex: 0 0 16.666667%;'+
'    flex: 0 0 16.666667%;'+
'    max-width: 16.666667%;'+
'  }'+
''+
'  .col-lg-3 {'+
'    -ms-flex: 0 0 25%;'+
'    flex: 0 0 25%;'+
'    max-width: 25%;'+
'  }'+
''+
'  .col-lg-4 {'+
'    -ms-flex: 0 0 33.333333%;'+
'    flex: 0 0 33.333333%;'+
'    max-width: 33.333333%;'+
'  }'+
''+
'  .col-lg-5 {'+
'    -ms-flex: 0 0 41.666667%;'+
'    flex: 0 0 41.666667%;'+
'    max-width: 41.666667%;'+
'  }'+
''+
'  .col-lg-6 {'+
'    -ms-flex: 0 0 50%;'+
'    flex: 0 0 50%;'+
'    max-width: 50%;'+
'  }'+
''+
'  .col-lg-7 {'+
'    -ms-flex: 0 0 58.333333%;'+
'    flex: 0 0 58.333333%;'+
'    max-width: 58.333333%;'+
'  }'+
''+
'  .col-lg-8 {'+
'    -ms-flex: 0 0 66.666667%;'+
'    flex: 0 0 66.666667%;'+
'    max-width: 66.666667%;'+
'  }'+
''+
'  .col-lg-9 {'+
'    -ms-flex: 0 0 75%;'+
'    flex: 0 0 75%;'+
'    max-width: 75%;'+
'  }'+
''+
'  .col-lg-10 {'+
'    -ms-flex: 0 0 83.333333%;'+
'    flex: 0 0 83.333333%;'+
'    max-width: 83.333333%;'+
'  }'+
''+
'  .col-lg-11 {'+
'    -ms-flex: 0 0 91.666667%;'+
'    flex: 0 0 91.666667%;'+
'    max-width: 91.666667%;'+
'  }'+
''+
'  .col-lg-12 {'+
'    -ms-flex: 0 0 100%;'+
'    flex: 0 0 100%;'+
'    max-width: 100%;'+
'  }'+
''+
'  .order-lg-first {'+
'    -ms-flex-order: -1;'+
'    order: -1;'+
'  }'+
''+
'  .order-lg-last {'+
'    -ms-flex-order: 13;'+
'    order: 13;'+
'  }'+
''+
'  .order-lg-0 {'+
'    -ms-flex-order: 0;'+
'    order: 0;'+
'  }'+
''+
'  .order-lg-1 {'+
'    -ms-flex-order: 1;'+
'    order: 1;'+
'  }'+
''+
'  .order-lg-2 {'+
'    -ms-flex-order: 2;'+
'    order: 2;'+
'  }'+
''+
'  .order-lg-3 {'+
'    -ms-flex-order: 3;'+
'    order: 3;'+
'  }'+
''+
'  .order-lg-4 {'+
'    -ms-flex-order: 4;'+
'    order: 4;'+
'  }'+
''+
'  .order-lg-5 {'+
'    -ms-flex-order: 5;'+
'    order: 5;'+
'  }'+
''+
'  .order-lg-6 {'+
'    -ms-flex-order: 6;'+
'    order: 6;'+
'  }'+
''+
'  .order-lg-7 {'+
'    -ms-flex-order: 7;'+
'    order: 7;'+
'  }'+
''+
'  .order-lg-8 {'+
'    -ms-flex-order: 8;'+
'    order: 8;'+
'  }'+
''+
'  .order-lg-9 {'+
'    -ms-flex-order: 9;'+
'    order: 9;'+
'  }'+
''+
'  .order-lg-10 {'+
'    -ms-flex-order: 10;'+
'    order: 10;'+
'  }'+
''+
'  .order-lg-11 {'+
'    -ms-flex-order: 11;'+
'    order: 11;'+
'  }'+
''+
'  .order-lg-12 {'+
'    -ms-flex-order: 12;'+
'    order: 12;'+
'  }'+
''+
'  .offset-lg-0 {'+
'    margin-left: 0;'+
'  }'+
''+
'  .offset-lg-1 {'+
'    margin-left: 8.333333%;'+
'  }'+
''+
'  .offset-lg-2 {'+
'    margin-left: 16.666667%;'+
'  }'+
''+
'  .offset-lg-3 {'+
'    margin-left: 25%;'+
'  }'+
''+
'  .offset-lg-4 {'+
'    margin-left: 33.333333%;'+
'  }'+
''+
'  .offset-lg-5 {'+
'    margin-left: 41.666667%;'+
'  }'+
''+
'  .offset-lg-6 {'+
'    margin-left: 50%;'+
'  }'+
''+
'  .offset-lg-7 {'+
'    margin-left: 58.333333%;'+
'  }'+
''+
'  .offset-lg-8 {'+
'    margin-left: 66.666667%;'+
'  }'+
''+
'  .offset-lg-9 {'+
'    margin-left: 75%;'+
'  }'+
''+
'  .offset-lg-10 {'+
'    margin-left: 83.333333%;'+
'  }'+
''+
'  .offset-lg-11 {'+
'    margin-left: 91.666667%;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .col-xl {'+
'    -ms-flex-preferred-size: 0;'+
'    flex-basis: 0;'+
'    -ms-flex-positive: 1;'+
'    flex-grow: 1;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-xl-auto {'+
'    -ms-flex: 0 0 auto;'+
'    flex: 0 0 auto;'+
'    width: auto;'+
'    max-width: 100%;'+
'  }'+
''+
'  .col-xl-1 {'+
'    -ms-flex: 0 0 8.333333%;'+
'    flex: 0 0 8.333333%;'+
'    max-width: 8.333333%;'+
'  }'+
''+
'  .col-xl-2 {'+
'    -ms-flex: 0 0 16.666667%;'+
'    flex: 0 0 16.666667%;'+
'    max-width: 16.666667%;'+
'  }'+
''+
'  .col-xl-3 {'+
'    -ms-flex: 0 0 25%;'+
'    flex: 0 0 25%;'+
'    max-width: 25%;'+
'  }'+
''+
'  .col-xl-4 {'+
'    -ms-flex: 0 0 33.333333%;'+
'    flex: 0 0 33.333333%;'+
'    max-width: 33.333333%;'+
'  }'+
''+
'  .col-xl-5 {'+
'    -ms-flex: 0 0 41.666667%;'+
'    flex: 0 0 41.666667%;'+
'    max-width: 41.666667%;'+
'  }'+
''+
'  .col-xl-6 {'+
'    -ms-flex: 0 0 50%;'+
'    flex: 0 0 50%;'+
'    max-width: 50%;'+
'  }'+
''+
'  .col-xl-7 {'+
'    -ms-flex: 0 0 58.333333%;'+
'    flex: 0 0 58.333333%;'+
'    max-width: 58.333333%;'+
'  }'+
''+
'  .col-xl-8 {'+
'    -ms-flex: 0 0 66.666667%;'+
'    flex: 0 0 66.666667%;'+
'    max-width: 66.666667%;'+
'  }'+
''+
'  .col-xl-9 {'+
'    -ms-flex: 0 0 75%;'+
'    flex: 0 0 75%;'+
'    max-width: 75%;'+
'  }'+
''+
'  .col-xl-10 {'+
'    -ms-flex: 0 0 83.333333%;'+
'    flex: 0 0 83.333333%;'+
'    max-width: 83.333333%;'+
'  }'+
''+
'  .col-xl-11 {'+
'    -ms-flex: 0 0 91.666667%;'+
'    flex: 0 0 91.666667%;'+
'    max-width: 91.666667%;'+
'  }'+
''+
'  .col-xl-12 {'+
'    -ms-flex: 0 0 100%;'+
'    flex: 0 0 100%;'+
'    max-width: 100%;'+
'  }'+
''+
'  .order-xl-first {'+
'    -ms-flex-order: -1;'+
'    order: -1;'+
'  }'+
''+
'  .order-xl-last {'+
'    -ms-flex-order: 13;'+
'    order: 13;'+
'  }'+
''+
'  .order-xl-0 {'+
'    -ms-flex-order: 0;'+
'    order: 0;'+
'  }'+
''+
'  .order-xl-1 {'+
'    -ms-flex-order: 1;'+
'    order: 1;'+
'  }'+
''+
'  .order-xl-2 {'+
'    -ms-flex-order: 2;'+
'    order: 2;'+
'  }'+
''+
'  .order-xl-3 {'+
'    -ms-flex-order: 3;'+
'    order: 3;'+
'  }'+
''+
'  .order-xl-4 {'+
'    -ms-flex-order: 4;'+
'    order: 4;'+
'  }'+
''+
'  .order-xl-5 {'+
'    -ms-flex-order: 5;'+
'    order: 5;'+
'  }'+
''+
'  .order-xl-6 {'+
'    -ms-flex-order: 6;'+
'    order: 6;'+
'  }'+
''+
'  .order-xl-7 {'+
'    -ms-flex-order: 7;'+
'    order: 7;'+
'  }'+
''+
'  .order-xl-8 {'+
'    -ms-flex-order: 8;'+
'    order: 8;'+
'  }'+
''+
'  .order-xl-9 {'+
'    -ms-flex-order: 9;'+
'    order: 9;'+
'  }'+
''+
'  .order-xl-10 {'+
'    -ms-flex-order: 10;'+
'    order: 10;'+
'  }'+
''+
'  .order-xl-11 {'+
'    -ms-flex-order: 11;'+
'    order: 11;'+
'  }'+
''+
'  .order-xl-12 {'+
'    -ms-flex-order: 12;'+
'    order: 12;'+
'  }'+
''+
'  .offset-xl-0 {'+
'    margin-left: 0;'+
'  }'+
''+
'  .offset-xl-1 {'+
'    margin-left: 8.333333%;'+
'  }'+
''+
'  .offset-xl-2 {'+
'    margin-left: 16.666667%;'+
'  }'+
''+
'  .offset-xl-3 {'+
'    margin-left: 25%;'+
'  }'+
''+
'  .offset-xl-4 {'+
'    margin-left: 33.333333%;'+
'  }'+
''+
'  .offset-xl-5 {'+
'    margin-left: 41.666667%;'+
'  }'+
''+
'  .offset-xl-6 {'+
'    margin-left: 50%;'+
'  }'+
''+
'  .offset-xl-7 {'+
'    margin-left: 58.333333%;'+
'  }'+
''+
'  .offset-xl-8 {'+
'    margin-left: 66.666667%;'+
'  }'+
''+
'  .offset-xl-9 {'+
'    margin-left: 75%;'+
'  }'+
''+
'  .offset-xl-10 {'+
'    margin-left: 83.333333%;'+
'  }'+
''+
'  .offset-xl-11 {'+
'    margin-left: 91.666667%;'+
'  }'+
'}'+
'@media (max-width:575.98px) {'+
'  .table-responsive-sm {'+
'    display: block;'+
'    width: 100%;'+
'    overflow-x: auto;'+
'    -webkit-overflow-scrolling: touch;'+
'  }'+
''+
'  .table-responsive-sm>.table-bordered {'+
'    border: 0;'+
'  }'+
'}'+
'@media (max-width:767.98px) {'+
'  .table-responsive-md {'+
'    display: block;'+
'    width: 100%;'+
'    overflow-x: auto;'+
'    -webkit-overflow-scrolling: touch;'+
'  }'+
''+
'  .table-responsive-md>.table-bordered {'+
'    border: 0;'+
'  }'+
'}'+
'@media (max-width:991.98px) {'+
'  .table-responsive-lg {'+
'    display: block;'+
'    width: 100%;'+
'    overflow-x: auto;'+
'    -webkit-overflow-scrolling: touch;'+
'  }'+
''+
'  .table-responsive-lg>.table-bordered {'+
'    border: 0;'+
'  }'+
'}'+
'@media (max-width:1199.98px) {'+
'  .table-responsive-xl {'+
'    display: block;'+
'    width: 100%;'+
'    overflow-x: auto;'+
'    -webkit-overflow-scrolling: touch;'+
'  }'+
''+
'  .table-responsive-xl>.table-bordered {'+
'    border: 0;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .form-control {'+
'    transition: none;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .form-inline label {'+
'    display: -ms-flexbox;'+
'    display: flex;'+
'    -ms-flex-align: center;'+
'    align-items: center;'+
'    -ms-flex-pack: center;'+
'    justify-content: center;'+
'    margin-bottom: 0;'+
'  }'+
''+
'  .form-inline .form-group {'+
'    display: -ms-flexbox;'+
'    display: flex;'+
'    -ms-flex: 0 0 auto;'+
'    flex: 0 0 auto;'+
'    -ms-flex-flow: row wrap;'+
'    flex-flow: row wrap;'+
'    -ms-flex-align: center;'+
'    align-items: center;'+
'    margin-bottom: 0;'+
'  }'+
''+
'  .form-inline .form-control {'+
'    display: inline-block;'+
'    width: auto;'+
'    vertical-align: middle;'+
'  }'+
''+
'  .form-inline .form-control-plaintext {'+
'    display: inline-block;'+
'  }'+
''+
'  .form-inline .custom-select,'+
'.form-inline .input-group {'+
'    width: auto;'+
'  }'+
''+
'  .form-inline .form-check {'+
'    display: -ms-flexbox;'+
'    display: flex;'+
'    -ms-flex-align: center;'+
'    align-items: center;'+
'    -ms-flex-pack: center;'+
'    justify-content: center;'+
'    width: auto;'+
'    padding-left: 0;'+
'  }'+
''+
'  .form-inline .form-check-input {'+
'    position: relative;'+
'    -ms-flex-negative: 0;'+
'    flex-shrink: 0;'+
'    margin-top: 0;'+
'    margin-right: .25rem;'+
'    margin-left: 0;'+
'  }'+
''+
'  .form-inline .custom-control {'+
'    -ms-flex-align: center;'+
'    align-items: center;'+
'    -ms-flex-pack: center;'+
'    justify-content: center;'+
'  }'+
''+
'  .form-inline .custom-control-label {'+
'    margin-bottom: 0;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .btn {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .fade {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .collapsing {'+
'    transition: none;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .dropdown-menu-sm-left {'+
'    right: auto;'+
'    left: 0;'+
'  }'+
''+
'  .dropdown-menu-sm-right {'+
'    right: 0;'+
'    left: auto;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .dropdown-menu-md-left {'+
'    right: auto;'+
'    left: 0;'+
'  }'+
''+
'  .dropdown-menu-md-right {'+
'    right: 0;'+
'    left: auto;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .dropdown-menu-lg-left {'+
'    right: auto;'+
'    left: 0;'+
'  }'+
''+
'  .dropdown-menu-lg-right {'+
'    right: 0;'+
'    left: auto;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .dropdown-menu-xl-left {'+
'    right: auto;'+
'    left: 0;'+
'  }'+
''+
'  .dropdown-menu-xl-right {'+
'    right: 0;'+
'    left: auto;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .custom-switch .custom-control-label::after {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .custom-range::-webkit-slider-thumb {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .custom-range::-moz-range-thumb {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .custom-range::-ms-thumb {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .custom-control-label::before,'+
'.custom-file-label,'+
'.custom-select {'+
'    transition: none;'+
'  }'+
'}'+
'@media (max-width:575.98px) {'+
'  .navbar-expand-sm>.container,'+
'.navbar-expand-sm>.container-fluid {'+
'    padding-right: 0;'+
'    padding-left: 0;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .navbar-expand-sm {'+
'    -ms-flex-flow: row nowrap;'+
'    flex-flow: row nowrap;'+
'    -ms-flex-pack: start;'+
'    justify-content: flex-start;'+
'  }'+
''+
'  .navbar-expand-sm .navbar-nav {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .navbar-expand-sm .navbar-nav .dropdown-menu {'+
'    position: absolute;'+
'  }'+
''+
'  .navbar-expand-sm .navbar-nav .nav-link {'+
'    padding-right: .5rem;'+
'    padding-left: .5rem;'+
'  }'+
''+
'  .navbar-expand-sm>.container,'+
'.navbar-expand-sm>.container-fluid {'+
'    -ms-flex-wrap: nowrap;'+
'    flex-wrap: nowrap;'+
'  }'+
''+
'  .navbar-expand-sm .navbar-collapse {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'    -ms-flex-preferred-size: auto;'+
'    flex-basis: auto;'+
'  }'+
''+
'  .navbar-expand-sm .navbar-toggler {'+
'    display: none;'+
'  }'+
'}'+
'@media (max-width:767.98px) {'+
'  .navbar-expand-md>.container,'+
'.navbar-expand-md>.container-fluid {'+
'    padding-right: 0;'+
'    padding-left: 0;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .navbar-expand-md {'+
'    -ms-flex-flow: row nowrap;'+
'    flex-flow: row nowrap;'+
'    -ms-flex-pack: start;'+
'    justify-content: flex-start;'+
'  }'+
''+
'  .navbar-expand-md .navbar-nav {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .navbar-expand-md .navbar-nav .dropdown-menu {'+
'    position: absolute;'+
'  }'+
''+
'  .navbar-expand-md .navbar-nav .nav-link {'+
'    padding-right: .5rem;'+
'    padding-left: .5rem;'+
'  }'+
''+
'  .navbar-expand-md>.container,'+
'.navbar-expand-md>.container-fluid {'+
'    -ms-flex-wrap: nowrap;'+
'    flex-wrap: nowrap;'+
'  }'+
''+
'  .navbar-expand-md .navbar-collapse {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'    -ms-flex-preferred-size: auto;'+
'    flex-basis: auto;'+
'  }'+
''+
'  .navbar-expand-md .navbar-toggler {'+
'    display: none;'+
'  }'+
'}'+
'@media (max-width:991.98px) {'+
'  .navbar-expand-lg>.container,'+
'.navbar-expand-lg>.container-fluid {'+
'    padding-right: 0;'+
'    padding-left: 0;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .navbar-expand-lg {'+
'    -ms-flex-flow: row nowrap;'+
'    flex-flow: row nowrap;'+
'    -ms-flex-pack: start;'+
'    justify-content: flex-start;'+
'  }'+
''+
'  .navbar-expand-lg .navbar-nav {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .navbar-expand-lg .navbar-nav .dropdown-menu {'+
'    position: absolute;'+
'  }'+
''+
'  .navbar-expand-lg .navbar-nav .nav-link {'+
'    padding-right: .5rem;'+
'    padding-left: .5rem;'+
'  }'+
''+
'  .navbar-expand-lg>.container,'+
'.navbar-expand-lg>.container-fluid {'+
'    -ms-flex-wrap: nowrap;'+
'    flex-wrap: nowrap;'+
'  }'+
''+
'  .navbar-expand-lg .navbar-collapse {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'    -ms-flex-preferred-size: auto;'+
'    flex-basis: auto;'+
'  }'+
''+
'  .navbar-expand-lg .navbar-toggler {'+
'    display: none;'+
'  }'+
'}'+
'@media (max-width:1199.98px) {'+
'  .navbar-expand-xl>.container,'+
'.navbar-expand-xl>.container-fluid {'+
'    padding-right: 0;'+
'    padding-left: 0;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .navbar-expand-xl {'+
'    -ms-flex-flow: row nowrap;'+
'    flex-flow: row nowrap;'+
'    -ms-flex-pack: start;'+
'    justify-content: flex-start;'+
'  }'+
''+
'  .navbar-expand-xl .navbar-nav {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .navbar-expand-xl .navbar-nav .dropdown-menu {'+
'    position: absolute;'+
'  }'+
''+
'  .navbar-expand-xl .navbar-nav .nav-link {'+
'    padding-right: .5rem;'+
'    padding-left: .5rem;'+
'  }'+
''+
'  .navbar-expand-xl>.container,'+
'.navbar-expand-xl>.container-fluid {'+
'    -ms-flex-wrap: nowrap;'+
'    flex-wrap: nowrap;'+
'  }'+
''+
'  .navbar-expand-xl .navbar-collapse {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'    -ms-flex-preferred-size: auto;'+
'    flex-basis: auto;'+
'  }'+
''+
'  .navbar-expand-xl .navbar-toggler {'+
'    display: none;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .card-deck {'+
'    -ms-flex-flow: row wrap;'+
'    flex-flow: row wrap;'+
'    margin-right: -15px;'+
'    margin-left: -15px;'+
'  }'+
''+
'  .card-deck .card {'+
'    display: -ms-flexbox;'+
'    display: flex;'+
'    -ms-flex: 1 0 0%;'+
'    flex: 1 0 0%;'+
'    -ms-flex-direction: column;'+
'    flex-direction: column;'+
'    margin-right: 15px;'+
'    margin-bottom: 0;'+
'    margin-left: 15px;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .card-group {'+
'    -ms-flex-flow: row wrap;'+
'    flex-flow: row wrap;'+
'  }'+
''+
'  .card-group>.card {'+
'    -ms-flex: 1 0 0%;'+
'    flex: 1 0 0%;'+
'    margin-bottom: 0;'+
'  }'+
''+
'  .card-group>.card+.card {'+
'    margin-left: 0;'+
'    border-left: 0;'+
'  }'+
''+
'  .card-group>.card:not(:last-child) {'+
'    border-top-right-radius: 0;'+
'    border-bottom-right-radius: 0;'+
'  }'+
''+
'  .card-group>.card:not(:last-child) .card-header,'+
'.card-group>.card:not(:last-child) .card-img-top {'+
'    border-top-right-radius: 0;'+
'  }'+
''+
'  .card-group>.card:not(:last-child) .card-footer,'+
'.card-group>.card:not(:last-child) .card-img-bottom {'+
'    border-bottom-right-radius: 0;'+
'  }'+
''+
'  .card-group>.card:not(:first-child) {'+
'    border-top-left-radius: 0;'+
'    border-bottom-left-radius: 0;'+
'  }'+
''+
'  .card-group>.card:not(:first-child) .card-header,'+
'.card-group>.card:not(:first-child) .card-img-top {'+
'    border-top-left-radius: 0;'+
'  }'+
''+
'  .card-group>.card:not(:first-child) .card-footer,'+
'.card-group>.card:not(:first-child) .card-img-bottom {'+
'    border-bottom-left-radius: 0;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .card-columns {'+
'    -webkit-column-count: 3;'+
'    -moz-column-count: 3;'+
'    column-count: 3;'+
'    -webkit-column-gap: 1.25rem;'+
'    -moz-column-gap: 1.25rem;'+
'    column-gap: 1.25rem;'+
'    orphans: 1;'+
'    widows: 1;'+
'  }'+
''+
'  .card-columns .card {'+
'    display: inline-block;'+
'    width: 100%;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .badge {'+
'    transition: none;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .jumbotron {'+
'    padding: 4rem 2rem;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .progress-bar {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .progress-bar-animated {'+
'    -webkit-animation: none;'+
'    animation: none;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .list-group-horizontal-sm {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .list-group-horizontal-sm .list-group-item {'+
'    margin-right: -1px;'+
'    margin-bottom: 0;'+
'  }'+
''+
'  .list-group-horizontal-sm .list-group-item:first-child {'+
'    border-top-left-radius: .25rem;'+
'    border-bottom-left-radius: .25rem;'+
'    border-top-right-radius: 0;'+
'  }'+
''+
'  .list-group-horizontal-sm .list-group-item:last-child {'+
'    margin-right: 0;'+
'    border-top-right-radius: .25rem;'+
'    border-bottom-right-radius: .25rem;'+
'    border-bottom-left-radius: 0;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .list-group-horizontal-md {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .list-group-horizontal-md .list-group-item {'+
'    margin-right: -1px;'+
'    margin-bottom: 0;'+
'  }'+
''+
'  .list-group-horizontal-md .list-group-item:first-child {'+
'    border-top-left-radius: .25rem;'+
'    border-bottom-left-radius: .25rem;'+
'    border-top-right-radius: 0;'+
'  }'+
''+
'  .list-group-horizontal-md .list-group-item:last-child {'+
'    margin-right: 0;'+
'    border-top-right-radius: .25rem;'+
'    border-bottom-right-radius: .25rem;'+
'    border-bottom-left-radius: 0;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .list-group-horizontal-lg {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .list-group-horizontal-lg .list-group-item {'+
'    margin-right: -1px;'+
'    margin-bottom: 0;'+
'  }'+
''+
'  .list-group-horizontal-lg .list-group-item:first-child {'+
'    border-top-left-radius: .25rem;'+
'    border-bottom-left-radius: .25rem;'+
'    border-top-right-radius: 0;'+
'  }'+
''+
'  .list-group-horizontal-lg .list-group-item:last-child {'+
'    margin-right: 0;'+
'    border-top-right-radius: .25rem;'+
'    border-bottom-right-radius: .25rem;'+
'    border-bottom-left-radius: 0;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .list-group-horizontal-xl {'+
'    -ms-flex-direction: row;'+
'    flex-direction: row;'+
'  }'+
''+
'  .list-group-horizontal-xl .list-group-item {'+
'    margin-right: -1px;'+
'    margin-bottom: 0;'+
'  }'+
''+
'  .list-group-horizontal-xl .list-group-item:first-child {'+
'    border-top-left-radius: .25rem;'+
'    border-bottom-left-radius: .25rem;'+
'    border-top-right-radius: 0;'+
'  }'+
''+
'  .list-group-horizontal-xl .list-group-item:last-child {'+
'    margin-right: 0;'+
'    border-top-right-radius: .25rem;'+
'    border-bottom-right-radius: .25rem;'+
'    border-bottom-left-radius: 0;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .modal.fade .modal-dialog {'+
'    transition: none;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .modal-dialog {'+
'    max-width: 500px;'+
'    margin: 1.75rem auto;'+
'  }'+
''+
'  .modal-dialog-scrollable {'+
'    max-height: calc(100% - 3.5rem);'+
'  }'+
''+
'  .modal-dialog-scrollable .modal-content {'+
'    max-height: calc(100vh - 3.5rem);'+
'  }'+
''+
'  .modal-dialog-centered {'+
'    min-height: calc(100% - 3.5rem);'+
'  }'+
''+
'  .modal-dialog-centered::before {'+
'    height: calc(100vh - 3.5rem);'+
'  }'+
''+
'  .modal-sm {'+
'    max-width: 300px;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .modal-lg,'+
'.modal-xl {'+
'    max-width: 800px;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .modal-xl {'+
'    max-width: 1140px;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .carousel-item {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .carousel-fade .active.carousel-item-left,'+
'.carousel-fade .active.carousel-item-right {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .carousel-control-next,'+
'.carousel-control-prev {'+
'    transition: none;'+
'  }'+
'}'+
'@media (prefers-reduced-motion:reduce) {'+
'  .carousel-indicators li {'+
'    transition: none;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .d-sm-none {'+
'    display: none!important;'+
'  }'+
''+
'  .d-sm-inline {'+
'    display: inline!important;'+
'  }'+
''+
'  .d-sm-inline-block {'+
'    display: inline-block!important;'+
'  }'+
''+
'  .d-sm-block {'+
'    display: block!important;'+
'  }'+
''+
'  .d-sm-table {'+
'    display: table!important;'+
'  }'+
''+
'  .d-sm-table-row {'+
'    display: table-row!important;'+
'  }'+
''+
'  .d-sm-table-cell {'+
'    display: table-cell!important;'+
'  }'+
''+
'  .d-sm-flex {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'  }'+
''+
'  .d-sm-inline-flex {'+
'    display: -ms-inline-flexbox!important;'+
'    display: inline-flex!important;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .d-md-none {'+
'    display: none!important;'+
'  }'+
''+
'  .d-md-inline {'+
'    display: inline!important;'+
'  }'+
''+
'  .d-md-inline-block {'+
'    display: inline-block!important;'+
'  }'+
''+
'  .d-md-block {'+
'    display: block!important;'+
'  }'+
''+
'  .d-md-table {'+
'    display: table!important;'+
'  }'+
''+
'  .d-md-table-row {'+
'    display: table-row!important;'+
'  }'+
''+
'  .d-md-table-cell {'+
'    display: table-cell!important;'+
'  }'+
''+
'  .d-md-flex {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'  }'+
''+
'  .d-md-inline-flex {'+
'    display: -ms-inline-flexbox!important;'+
'    display: inline-flex!important;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .d-lg-none {'+
'    display: none!important;'+
'  }'+
''+
'  .d-lg-inline {'+
'    display: inline!important;'+
'  }'+
''+
'  .d-lg-inline-block {'+
'    display: inline-block!important;'+
'  }'+
''+
'  .d-lg-block {'+
'    display: block!important;'+
'  }'+
''+
'  .d-lg-table {'+
'    display: table!important;'+
'  }'+
''+
'  .d-lg-table-row {'+
'    display: table-row!important;'+
'  }'+
''+
'  .d-lg-table-cell {'+
'    display: table-cell!important;'+
'  }'+
''+
'  .d-lg-flex {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'  }'+
''+
'  .d-lg-inline-flex {'+
'    display: -ms-inline-flexbox!important;'+
'    display: inline-flex!important;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .d-xl-none {'+
'    display: none!important;'+
'  }'+
''+
'  .d-xl-inline {'+
'    display: inline!important;'+
'  }'+
''+
'  .d-xl-inline-block {'+
'    display: inline-block!important;'+
'  }'+
''+
'  .d-xl-block {'+
'    display: block!important;'+
'  }'+
''+
'  .d-xl-table {'+
'    display: table!important;'+
'  }'+
''+
'  .d-xl-table-row {'+
'    display: table-row!important;'+
'  }'+
''+
'  .d-xl-table-cell {'+
'    display: table-cell!important;'+
'  }'+
''+
'  .d-xl-flex {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'  }'+
''+
'  .d-xl-inline-flex {'+
'    display: -ms-inline-flexbox!important;'+
'    display: inline-flex!important;'+
'  }'+
'}'+
'@media print {'+
'  .d-print-none {'+
'    display: none!important;'+
'  }'+
''+
'  .d-print-inline {'+
'    display: inline!important;'+
'  }'+
''+
'  .d-print-inline-block {'+
'    display: inline-block!important;'+
'  }'+
''+
'  .d-print-block {'+
'    display: block!important;'+
'  }'+
''+
'  .d-print-table {'+
'    display: table!important;'+
'  }'+
''+
'  .d-print-table-row {'+
'    display: table-row!important;'+
'  }'+
''+
'  .d-print-table-cell {'+
'    display: table-cell!important;'+
'  }'+
''+
'  .d-print-flex {'+
'    display: -ms-flexbox!important;'+
'    display: flex!important;'+
'  }'+
''+
'  .d-print-inline-flex {'+
'    display: -ms-inline-flexbox!important;'+
'    display: inline-flex!important;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .flex-sm-row {'+
'    -ms-flex-direction: row!important;'+
'    flex-direction: row!important;'+
'  }'+
''+
'  .flex-sm-column {'+
'    -ms-flex-direction: column!important;'+
'    flex-direction: column!important;'+
'  }'+
''+
'  .flex-sm-row-reverse {'+
'    -ms-flex-direction: row-reverse!important;'+
'    flex-direction: row-reverse!important;'+
'  }'+
''+
'  .flex-sm-column-reverse {'+
'    -ms-flex-direction: column-reverse!important;'+
'    flex-direction: column-reverse!important;'+
'  }'+
''+
'  .flex-sm-wrap {'+
'    -ms-flex-wrap: wrap!important;'+
'    flex-wrap: wrap!important;'+
'  }'+
''+
'  .flex-sm-nowrap {'+
'    -ms-flex-wrap: nowrap!important;'+
'    flex-wrap: nowrap!important;'+
'  }'+
''+
'  .flex-sm-wrap-reverse {'+
'    -ms-flex-wrap: wrap-reverse!important;'+
'    flex-wrap: wrap-reverse!important;'+
'  }'+
''+
'  .flex-sm-fill {'+
'    -ms-flex: 1 1 auto!important;'+
'    flex: 1 1 auto!important;'+
'  }'+
''+
'  .flex-sm-grow-0 {'+
'    -ms-flex-positive: 0!important;'+
'    flex-grow: 0!important;'+
'  }'+
''+
'  .flex-sm-grow-1 {'+
'    -ms-flex-positive: 1!important;'+
'    flex-grow: 1!important;'+
'  }'+
''+
'  .flex-sm-shrink-0 {'+
'    -ms-flex-negative: 0!important;'+
'    flex-shrink: 0!important;'+
'  }'+
''+
'  .flex-sm-shrink-1 {'+
'    -ms-flex-negative: 1!important;'+
'    flex-shrink: 1!important;'+
'  }'+
''+
'  .justify-content-sm-start {'+
'    -ms-flex-pack: start!important;'+
'    justify-content: flex-start!important;'+
'  }'+
''+
'  .justify-content-sm-end {'+
'    -ms-flex-pack: end!important;'+
'    justify-content: flex-end!important;'+
'  }'+
''+
'  .justify-content-sm-center {'+
'    -ms-flex-pack: center!important;'+
'    justify-content: center!important;'+
'  }'+
''+
'  .justify-content-sm-between {'+
'    -ms-flex-pack: justify!important;'+
'    justify-content: space-between!important;'+
'  }'+
''+
'  .justify-content-sm-around {'+
'    -ms-flex-pack: distribute!important;'+
'    justify-content: space-around!important;'+
'  }'+
''+
'  .align-items-sm-start {'+
'    -ms-flex-align: start!important;'+
'    align-items: flex-start!important;'+
'  }'+
''+
'  .align-items-sm-end {'+
'    -ms-flex-align: end!important;'+
'    align-items: flex-end!important;'+
'  }'+
''+
'  .align-items-sm-center {'+
'    -ms-flex-align: center!important;'+
'    align-items: center!important;'+
'  }'+
''+
'  .align-items-sm-baseline {'+
'    -ms-flex-align: baseline!important;'+
'    align-items: baseline!important;'+
'  }'+
''+
'  .align-items-sm-stretch {'+
'    -ms-flex-align: stretch!important;'+
'    align-items: stretch!important;'+
'  }'+
''+
'  .align-content-sm-start {'+
'    -ms-flex-line-pack: start!important;'+
'    align-content: flex-start!important;'+
'  }'+
''+
'  .align-content-sm-end {'+
'    -ms-flex-line-pack: end!important;'+
'    align-content: flex-end!important;'+
'  }'+
''+
'  .align-content-sm-center {'+
'    -ms-flex-line-pack: center!important;'+
'    align-content: center!important;'+
'  }'+
''+
'  .align-content-sm-between {'+
'    -ms-flex-line-pack: justify!important;'+
'    align-content: space-between!important;'+
'  }'+
''+
'  .align-content-sm-around {'+
'    -ms-flex-line-pack: distribute!important;'+
'    align-content: space-around!important;'+
'  }'+
''+
'  .align-content-sm-stretch {'+
'    -ms-flex-line-pack: stretch!important;'+
'    align-content: stretch!important;'+
'  }'+
''+
'  .align-self-sm-auto {'+
'    -ms-flex-item-align: auto!important;'+
'    align-self: auto!important;'+
'  }'+
''+
'  .align-self-sm-start {'+
'    -ms-flex-item-align: start!important;'+
'    align-self: flex-start!important;'+
'  }'+
''+
'  .align-self-sm-end {'+
'    -ms-flex-item-align: end!important;'+
'    align-self: flex-end!important;'+
'  }'+
''+
'  .align-self-sm-center {'+
'    -ms-flex-item-align: center!important;'+
'    align-self: center!important;'+
'  }'+
''+
'  .align-self-sm-baseline {'+
'    -ms-flex-item-align: baseline!important;'+
'    align-self: baseline!important;'+
'  }'+
''+
'  .align-self-sm-stretch {'+
'    -ms-flex-item-align: stretch!important;'+
'    align-self: stretch!important;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .flex-md-row {'+
'    -ms-flex-direction: row!important;'+
'    flex-direction: row!important;'+
'  }'+
''+
'  .flex-md-column {'+
'    -ms-flex-direction: column!important;'+
'    flex-direction: column!important;'+
'  }'+
''+
'  .flex-md-row-reverse {'+
'    -ms-flex-direction: row-reverse!important;'+
'    flex-direction: row-reverse!important;'+
'  }'+
''+
'  .flex-md-column-reverse {'+
'    -ms-flex-direction: column-reverse!important;'+
'    flex-direction: column-reverse!important;'+
'  }'+
''+
'  .flex-md-wrap {'+
'    -ms-flex-wrap: wrap!important;'+
'    flex-wrap: wrap!important;'+
'  }'+
''+
'  .flex-md-nowrap {'+
'    -ms-flex-wrap: nowrap!important;'+
'    flex-wrap: nowrap!important;'+
'  }'+
''+
'  .flex-md-wrap-reverse {'+
'    -ms-flex-wrap: wrap-reverse!important;'+
'    flex-wrap: wrap-reverse!important;'+
'  }'+
''+
'  .flex-md-fill {'+
'    -ms-flex: 1 1 auto!important;'+
'    flex: 1 1 auto!important;'+
'  }'+
''+
'  .flex-md-grow-0 {'+
'    -ms-flex-positive: 0!important;'+
'    flex-grow: 0!important;'+
'  }'+
''+
'  .flex-md-grow-1 {'+
'    -ms-flex-positive: 1!important;'+
'    flex-grow: 1!important;'+
'  }'+
''+
'  .flex-md-shrink-0 {'+
'    -ms-flex-negative: 0!important;'+
'    flex-shrink: 0!important;'+
'  }'+
''+
'  .flex-md-shrink-1 {'+
'    -ms-flex-negative: 1!important;'+
'    flex-shrink: 1!important;'+
'  }'+
''+
'  .justify-content-md-start {'+
'    -ms-flex-pack: start!important;'+
'    justify-content: flex-start!important;'+
'  }'+
''+
'  .justify-content-md-end {'+
'    -ms-flex-pack: end!important;'+
'    justify-content: flex-end!important;'+
'  }'+
''+
'  .justify-content-md-center {'+
'    -ms-flex-pack: center!important;'+
'    justify-content: center!important;'+
'  }'+
''+
'  .justify-content-md-between {'+
'    -ms-flex-pack: justify!important;'+
'    justify-content: space-between!important;'+
'  }'+
''+
'  .justify-content-md-around {'+
'    -ms-flex-pack: distribute!important;'+
'    justify-content: space-around!important;'+
'  }'+
''+
'  .align-items-md-start {'+
'    -ms-flex-align: start!important;'+
'    align-items: flex-start!important;'+
'  }'+
''+
'  .align-items-md-end {'+
'    -ms-flex-align: end!important;'+
'    align-items: flex-end!important;'+
'  }'+
''+
'  .align-items-md-center {'+
'    -ms-flex-align: center!important;'+
'    align-items: center!important;'+
'  }'+
''+
'  .align-items-md-baseline {'+
'    -ms-flex-align: baseline!important;'+
'    align-items: baseline!important;'+
'  }'+
''+
'  .align-items-md-stretch {'+
'    -ms-flex-align: stretch!important;'+
'    align-items: stretch!important;'+
'  }'+
''+
'  .align-content-md-start {'+
'    -ms-flex-line-pack: start!important;'+
'    align-content: flex-start!important;'+
'  }'+
''+
'  .align-content-md-end {'+
'    -ms-flex-line-pack: end!important;'+
'    align-content: flex-end!important;'+
'  }'+
''+
'  .align-content-md-center {'+
'    -ms-flex-line-pack: center!important;'+
'    align-content: center!important;'+
'  }'+
''+
'  .align-content-md-between {'+
'    -ms-flex-line-pack: justify!important;'+
'    align-content: space-between!important;'+
'  }'+
''+
'  .align-content-md-around {'+
'    -ms-flex-line-pack: distribute!important;'+
'    align-content: space-around!important;'+
'  }'+
''+
'  .align-content-md-stretch {'+
'    -ms-flex-line-pack: stretch!important;'+
'    align-content: stretch!important;'+
'  }'+
''+
'  .align-self-md-auto {'+
'    -ms-flex-item-align: auto!important;'+
'    align-self: auto!important;'+
'  }'+
''+
'  .align-self-md-start {'+
'    -ms-flex-item-align: start!important;'+
'    align-self: flex-start!important;'+
'  }'+
''+
'  .align-self-md-end {'+
'    -ms-flex-item-align: end!important;'+
'    align-self: flex-end!important;'+
'  }'+
''+
'  .align-self-md-center {'+
'    -ms-flex-item-align: center!important;'+
'    align-self: center!important;'+
'  }'+
''+
'  .align-self-md-baseline {'+
'    -ms-flex-item-align: baseline!important;'+
'    align-self: baseline!important;'+
'  }'+
''+
'  .align-self-md-stretch {'+
'    -ms-flex-item-align: stretch!important;'+
'    align-self: stretch!important;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .flex-lg-row {'+
'    -ms-flex-direction: row!important;'+
'    flex-direction: row!important;'+
'  }'+
''+
'  .flex-lg-column {'+
'    -ms-flex-direction: column!important;'+
'    flex-direction: column!important;'+
'  }'+
''+
'  .flex-lg-row-reverse {'+
'    -ms-flex-direction: row-reverse!important;'+
'    flex-direction: row-reverse!important;'+
'  }'+
''+
'  .flex-lg-column-reverse {'+
'    -ms-flex-direction: column-reverse!important;'+
'    flex-direction: column-reverse!important;'+
'  }'+
''+
'  .flex-lg-wrap {'+
'    -ms-flex-wrap: wrap!important;'+
'    flex-wrap: wrap!important;'+
'  }'+
''+
'  .flex-lg-nowrap {'+
'    -ms-flex-wrap: nowrap!important;'+
'    flex-wrap: nowrap!important;'+
'  }'+
''+
'  .flex-lg-wrap-reverse {'+
'    -ms-flex-wrap: wrap-reverse!important;'+
'    flex-wrap: wrap-reverse!important;'+
'  }'+
''+
'  .flex-lg-fill {'+
'    -ms-flex: 1 1 auto!important;'+
'    flex: 1 1 auto!important;'+
'  }'+
''+
'  .flex-lg-grow-0 {'+
'    -ms-flex-positive: 0!important;'+
'    flex-grow: 0!important;'+
'  }'+
''+
'  .flex-lg-grow-1 {'+
'    -ms-flex-positive: 1!important;'+
'    flex-grow: 1!important;'+
'  }'+
''+
'  .flex-lg-shrink-0 {'+
'    -ms-flex-negative: 0!important;'+
'    flex-shrink: 0!important;'+
'  }'+
''+
'  .flex-lg-shrink-1 {'+
'    -ms-flex-negative: 1!important;'+
'    flex-shrink: 1!important;'+
'  }'+
''+
'  .justify-content-lg-start {'+
'    -ms-flex-pack: start!important;'+
'    justify-content: flex-start!important;'+
'  }'+
''+
'  .justify-content-lg-end {'+
'    -ms-flex-pack: end!important;'+
'    justify-content: flex-end!important;'+
'  }'+
''+
'  .justify-content-lg-center {'+
'    -ms-flex-pack: center!important;'+
'    justify-content: center!important;'+
'  }'+
''+
'  .justify-content-lg-between {'+
'    -ms-flex-pack: justify!important;'+
'    justify-content: space-between!important;'+
'  }'+
''+
'  .justify-content-lg-around {'+
'    -ms-flex-pack: distribute!important;'+
'    justify-content: space-around!important;'+
'  }'+
''+
'  .align-items-lg-start {'+
'    -ms-flex-align: start!important;'+
'    align-items: flex-start!important;'+
'  }'+
''+
'  .align-items-lg-end {'+
'    -ms-flex-align: end!important;'+
'    align-items: flex-end!important;'+
'  }'+
''+
'  .align-items-lg-center {'+
'    -ms-flex-align: center!important;'+
'    align-items: center!important;'+
'  }'+
''+
'  .align-items-lg-baseline {'+
'    -ms-flex-align: baseline!important;'+
'    align-items: baseline!important;'+
'  }'+
''+
'  .align-items-lg-stretch {'+
'    -ms-flex-align: stretch!important;'+
'    align-items: stretch!important;'+
'  }'+
''+
'  .align-content-lg-start {'+
'    -ms-flex-line-pack: start!important;'+
'    align-content: flex-start!important;'+
'  }'+
''+
'  .align-content-lg-end {'+
'    -ms-flex-line-pack: end!important;'+
'    align-content: flex-end!important;'+
'  }'+
''+
'  .align-content-lg-center {'+
'    -ms-flex-line-pack: center!important;'+
'    align-content: center!important;'+
'  }'+
''+
'  .align-content-lg-between {'+
'    -ms-flex-line-pack: justify!important;'+
'    align-content: space-between!important;'+
'  }'+
''+
'  .align-content-lg-around {'+
'    -ms-flex-line-pack: distribute!important;'+
'    align-content: space-around!important;'+
'  }'+
''+
'  .align-content-lg-stretch {'+
'    -ms-flex-line-pack: stretch!important;'+
'    align-content: stretch!important;'+
'  }'+
''+
'  .align-self-lg-auto {'+
'    -ms-flex-item-align: auto!important;'+
'    align-self: auto!important;'+
'  }'+
''+
'  .align-self-lg-start {'+
'    -ms-flex-item-align: start!important;'+
'    align-self: flex-start!important;'+
'  }'+
''+
'  .align-self-lg-end {'+
'    -ms-flex-item-align: end!important;'+
'    align-self: flex-end!important;'+
'  }'+
''+
'  .align-self-lg-center {'+
'    -ms-flex-item-align: center!important;'+
'    align-self: center!important;'+
'  }'+
''+
'  .align-self-lg-baseline {'+
'    -ms-flex-item-align: baseline!important;'+
'    align-self: baseline!important;'+
'  }'+
''+
'  .align-self-lg-stretch {'+
'    -ms-flex-item-align: stretch!important;'+
'    align-self: stretch!important;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .flex-xl-row {'+
'    -ms-flex-direction: row!important;'+
'    flex-direction: row!important;'+
'  }'+
''+
'  .flex-xl-column {'+
'    -ms-flex-direction: column!important;'+
'    flex-direction: column!important;'+
'  }'+
''+
'  .flex-xl-row-reverse {'+
'    -ms-flex-direction: row-reverse!important;'+
'    flex-direction: row-reverse!important;'+
'  }'+
''+
'  .flex-xl-column-reverse {'+
'    -ms-flex-direction: column-reverse!important;'+
'    flex-direction: column-reverse!important;'+
'  }'+
''+
'  .flex-xl-wrap {'+
'    -ms-flex-wrap: wrap!important;'+
'    flex-wrap: wrap!important;'+
'  }'+
''+
'  .flex-xl-nowrap {'+
'    -ms-flex-wrap: nowrap!important;'+
'    flex-wrap: nowrap!important;'+
'  }'+
''+
'  .flex-xl-wrap-reverse {'+
'    -ms-flex-wrap: wrap-reverse!important;'+
'    flex-wrap: wrap-reverse!important;'+
'  }'+
''+
'  .flex-xl-fill {'+
'    -ms-flex: 1 1 auto!important;'+
'    flex: 1 1 auto!important;'+
'  }'+
''+
'  .flex-xl-grow-0 {'+
'    -ms-flex-positive: 0!important;'+
'    flex-grow: 0!important;'+
'  }'+
''+
'  .flex-xl-grow-1 {'+
'    -ms-flex-positive: 1!important;'+
'    flex-grow: 1!important;'+
'  }'+
''+
'  .flex-xl-shrink-0 {'+
'    -ms-flex-negative: 0!important;'+
'    flex-shrink: 0!important;'+
'  }'+
''+
'  .flex-xl-shrink-1 {'+
'    -ms-flex-negative: 1!important;'+
'    flex-shrink: 1!important;'+
'  }'+
''+
'  .justify-content-xl-start {'+
'    -ms-flex-pack: start!important;'+
'    justify-content: flex-start!important;'+
'  }'+
''+
'  .justify-content-xl-end {'+
'    -ms-flex-pack: end!important;'+
'    justify-content: flex-end!important;'+
'  }'+
''+
'  .justify-content-xl-center {'+
'    -ms-flex-pack: center!important;'+
'    justify-content: center!important;'+
'  }'+
''+
'  .justify-content-xl-between {'+
'    -ms-flex-pack: justify!important;'+
'    justify-content: space-between!important;'+
'  }'+
''+
'  .justify-content-xl-around {'+
'    -ms-flex-pack: distribute!important;'+
'    justify-content: space-around!important;'+
'  }'+
''+
'  .align-items-xl-start {'+
'    -ms-flex-align: start!important;'+
'    align-items: flex-start!important;'+
'  }'+
''+
'  .align-items-xl-end {'+
'    -ms-flex-align: end!important;'+
'    align-items: flex-end!important;'+
'  }'+
''+
'  .align-items-xl-center {'+
'    -ms-flex-align: center!important;'+
'    align-items: center!important;'+
'  }'+
''+
'  .align-items-xl-baseline {'+
'    -ms-flex-align: baseline!important;'+
'    align-items: baseline!important;'+
'  }'+
''+
'  .align-items-xl-stretch {'+
'    -ms-flex-align: stretch!important;'+
'    align-items: stretch!important;'+
'  }'+
''+
'  .align-content-xl-start {'+
'    -ms-flex-line-pack: start!important;'+
'    align-content: flex-start!important;'+
'  }'+
''+
'  .align-content-xl-end {'+
'    -ms-flex-line-pack: end!important;'+
'    align-content: flex-end!important;'+
'  }'+
''+
'  .align-content-xl-center {'+
'    -ms-flex-line-pack: center!important;'+
'    align-content: center!important;'+
'  }'+
''+
'  .align-content-xl-between {'+
'    -ms-flex-line-pack: justify!important;'+
'    align-content: space-between!important;'+
'  }'+
''+
'  .align-content-xl-around {'+
'    -ms-flex-line-pack: distribute!important;'+
'    align-content: space-around!important;'+
'  }'+
''+
'  .align-content-xl-stretch {'+
'    -ms-flex-line-pack: stretch!important;'+
'    align-content: stretch!important;'+
'  }'+
''+
'  .align-self-xl-auto {'+
'    -ms-flex-item-align: auto!important;'+
'    align-self: auto!important;'+
'  }'+
''+
'  .align-self-xl-start {'+
'    -ms-flex-item-align: start!important;'+
'    align-self: flex-start!important;'+
'  }'+
''+
'  .align-self-xl-end {'+
'    -ms-flex-item-align: end!important;'+
'    align-self: flex-end!important;'+
'  }'+
''+
'  .align-self-xl-center {'+
'    -ms-flex-item-align: center!important;'+
'    align-self: center!important;'+
'  }'+
''+
'  .align-self-xl-baseline {'+
'    -ms-flex-item-align: baseline!important;'+
'    align-self: baseline!important;'+
'  }'+
''+
'  .align-self-xl-stretch {'+
'    -ms-flex-item-align: stretch!important;'+
'    align-self: stretch!important;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .float-sm-left {'+
'    float: left!important;'+
'  }'+
''+
'  .float-sm-right {'+
'    float: right!important;'+
'  }'+
''+
'  .float-sm-none {'+
'    float: none!important;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .float-md-left {'+
'    float: left!important;'+
'  }'+
''+
'  .float-md-right {'+
'    float: right!important;'+
'  }'+
''+
'  .float-md-none {'+
'    float: none!important;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .float-lg-left {'+
'    float: left!important;'+
'  }'+
''+
'  .float-lg-right {'+
'    float: right!important;'+
'  }'+
''+
'  .float-lg-none {'+
'    float: none!important;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .float-xl-left {'+
'    float: left!important;'+
'  }'+
''+
'  .float-xl-right {'+
'    float: right!important;'+
'  }'+
''+
'  .float-xl-none {'+
'    float: none!important;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .m-sm-0 {'+
'    margin: 0!important;'+
'  }'+
''+
'  .mt-sm-0,'+
'.my-sm-0 {'+
'    margin-top: 0!important;'+
'  }'+
''+
'  .mr-sm-0,'+
'.mx-sm-0 {'+
'    margin-right: 0!important;'+
'  }'+
''+
'  .mb-sm-0,'+
'.my-sm-0 {'+
'    margin-bottom: 0!important;'+
'  }'+
''+
'  .ml-sm-0,'+
'.mx-sm-0 {'+
'    margin-left: 0!important;'+
'  }'+
''+
'  .m-sm-1 {'+
'    margin: .25rem!important;'+
'  }'+
''+
'  .mt-sm-1,'+
'.my-sm-1 {'+
'    margin-top: .25rem!important;'+
'  }'+
''+
'  .mr-sm-1,'+
'.mx-sm-1 {'+
'    margin-right: .25rem!important;'+
'  }'+
''+
'  .mb-sm-1,'+
'.my-sm-1 {'+
'    margin-bottom: .25rem!important;'+
'  }'+
''+
'  .ml-sm-1,'+
'.mx-sm-1 {'+
'    margin-left: .25rem!important;'+
'  }'+
''+
'  .m-sm-2 {'+
'    margin: .5rem!important;'+
'  }'+
''+
'  .mt-sm-2,'+
'.my-sm-2 {'+
'    margin-top: .5rem!important;'+
'  }'+
''+
'  .mr-sm-2,'+
'.mx-sm-2 {'+
'    margin-right: .5rem!important;'+
'  }'+
''+
'  .mb-sm-2,'+
'.my-sm-2 {'+
'    margin-bottom: .5rem!important;'+
'  }'+
''+
'  .ml-sm-2,'+
'.mx-sm-2 {'+
'    margin-left: .5rem!important;'+
'  }'+
''+
'  .m-sm-3 {'+
'    margin: 1rem!important;'+
'  }'+
''+
'  .mt-sm-3,'+
'.my-sm-3 {'+
'    margin-top: 1rem!important;'+
'  }'+
''+
'  .mr-sm-3,'+
'.mx-sm-3 {'+
'    margin-right: 1rem!important;'+
'  }'+
''+
'  .mb-sm-3,'+
'.my-sm-3 {'+
'    margin-bottom: 1rem!important;'+
'  }'+
''+
'  .ml-sm-3,'+
'.mx-sm-3 {'+
'    margin-left: 1rem!important;'+
'  }'+
''+
'  .m-sm-4 {'+
'    margin: 1.5rem!important;'+
'  }'+
''+
'  .mt-sm-4,'+
'.my-sm-4 {'+
'    margin-top: 1.5rem!important;'+
'  }'+
''+
'  .mr-sm-4,'+
'.mx-sm-4 {'+
'    margin-right: 1.5rem!important;'+
'  }'+
''+
'  .mb-sm-4,'+
'.my-sm-4 {'+
'    margin-bottom: 1.5rem!important;'+
'  }'+
''+
'  .ml-sm-4,'+
'.mx-sm-4 {'+
'    margin-left: 1.5rem!important;'+
'  }'+
''+
'  .m-sm-5 {'+
'    margin: 3rem!important;'+
'  }'+
''+
'  .mt-sm-5,'+
'.my-sm-5 {'+
'    margin-top: 3rem!important;'+
'  }'+
''+
'  .mr-sm-5,'+
'.mx-sm-5 {'+
'    margin-right: 3rem!important;'+
'  }'+
''+
'  .mb-sm-5,'+
'.my-sm-5 {'+
'    margin-bottom: 3rem!important;'+
'  }'+
''+
'  .ml-sm-5,'+
'.mx-sm-5 {'+
'    margin-left: 3rem!important;'+
'  }'+
''+
'  .p-sm-0 {'+
'    padding: 0!important;'+
'  }'+
''+
'  .pt-sm-0,'+
'.py-sm-0 {'+
'    padding-top: 0!important;'+
'  }'+
''+
'  .pr-sm-0,'+
'.px-sm-0 {'+
'    padding-right: 0!important;'+
'  }'+
''+
'  .pb-sm-0,'+
'.py-sm-0 {'+
'    padding-bottom: 0!important;'+
'  }'+
''+
'  .pl-sm-0,'+
'.px-sm-0 {'+
'    padding-left: 0!important;'+
'  }'+
''+
'  .p-sm-1 {'+
'    padding: .25rem!important;'+
'  }'+
''+
'  .pt-sm-1,'+
'.py-sm-1 {'+
'    padding-top: .25rem!important;'+
'  }'+
''+
'  .pr-sm-1,'+
'.px-sm-1 {'+
'    padding-right: .25rem!important;'+
'  }'+
''+
'  .pb-sm-1,'+
'.py-sm-1 {'+
'    padding-bottom: .25rem!important;'+
'  }'+
''+
'  .pl-sm-1,'+
'.px-sm-1 {'+
'    padding-left: .25rem!important;'+
'  }'+
''+
'  .p-sm-2 {'+
'    padding: .5rem!important;'+
'  }'+
''+
'  .pt-sm-2,'+
'.py-sm-2 {'+
'    padding-top: .5rem!important;'+
'  }'+
''+
'  .pr-sm-2,'+
'.px-sm-2 {'+
'    padding-right: .5rem!important;'+
'  }'+
''+
'  .pb-sm-2,'+
'.py-sm-2 {'+
'    padding-bottom: .5rem!important;'+
'  }'+
''+
'  .pl-sm-2,'+
'.px-sm-2 {'+
'    padding-left: .5rem!important;'+
'  }'+
''+
'  .p-sm-3 {'+
'    padding: 1rem!important;'+
'  }'+
''+
'  .pt-sm-3,'+
'.py-sm-3 {'+
'    padding-top: 1rem!important;'+
'  }'+
''+
'  .pr-sm-3,'+
'.px-sm-3 {'+
'    padding-right: 1rem!important;'+
'  }'+
''+
'  .pb-sm-3,'+
'.py-sm-3 {'+
'    padding-bottom: 1rem!important;'+
'  }'+
''+
'  .pl-sm-3,'+
'.px-sm-3 {'+
'    padding-left: 1rem!important;'+
'  }'+
''+
'  .p-sm-4 {'+
'    padding: 1.5rem!important;'+
'  }'+
''+
'  .pt-sm-4,'+
'.py-sm-4 {'+
'    padding-top: 1.5rem!important;'+
'  }'+
''+
'  .pr-sm-4,'+
'.px-sm-4 {'+
'    padding-right: 1.5rem!important;'+
'  }'+
''+
'  .pb-sm-4,'+
'.py-sm-4 {'+
'    padding-bottom: 1.5rem!important;'+
'  }'+
''+
'  .pl-sm-4,'+
'.px-sm-4 {'+
'    padding-left: 1.5rem!important;'+
'  }'+
''+
'  .p-sm-5 {'+
'    padding: 3rem!important;'+
'  }'+
''+
'  .pt-sm-5,'+
'.py-sm-5 {'+
'    padding-top: 3rem!important;'+
'  }'+
''+
'  .pr-sm-5,'+
'.px-sm-5 {'+
'    padding-right: 3rem!important;'+
'  }'+
''+
'  .pb-sm-5,'+
'.py-sm-5 {'+
'    padding-bottom: 3rem!important;'+
'  }'+
''+
'  .pl-sm-5,'+
'.px-sm-5 {'+
'    padding-left: 3rem!important;'+
'  }'+
''+
'  .m-sm-n1 {'+
'    margin: -.25rem!important;'+
'  }'+
''+
'  .mt-sm-n1,'+
'.my-sm-n1 {'+
'    margin-top: -.25rem!important;'+
'  }'+
''+
'  .mr-sm-n1,'+
'.mx-sm-n1 {'+
'    margin-right: -.25rem!important;'+
'  }'+
''+
'  .mb-sm-n1,'+
'.my-sm-n1 {'+
'    margin-bottom: -.25rem!important;'+
'  }'+
''+
'  .ml-sm-n1,'+
'.mx-sm-n1 {'+
'    margin-left: -.25rem!important;'+
'  }'+
''+
'  .m-sm-n2 {'+
'    margin: -.5rem!important;'+
'  }'+
''+
'  .mt-sm-n2,'+
'.my-sm-n2 {'+
'    margin-top: -.5rem!important;'+
'  }'+
''+
'  .mr-sm-n2,'+
'.mx-sm-n2 {'+
'    margin-right: -.5rem!important;'+
'  }'+
''+
'  .mb-sm-n2,'+
'.my-sm-n2 {'+
'    margin-bottom: -.5rem!important;'+
'  }'+
''+
'  .ml-sm-n2,'+
'.mx-sm-n2 {'+
'    margin-left: -.5rem!important;'+
'  }'+
''+
'  .m-sm-n3 {'+
'    margin: -1rem!important;'+
'  }'+
''+
'  .mt-sm-n3,'+
'.my-sm-n3 {'+
'    margin-top: -1rem!important;'+
'  }'+
''+
'  .mr-sm-n3,'+
'.mx-sm-n3 {'+
'    margin-right: -1rem!important;'+
'  }'+
''+
'  .mb-sm-n3,'+
'.my-sm-n3 {'+
'    margin-bottom: -1rem!important;'+
'  }'+
''+
'  .ml-sm-n3,'+
'.mx-sm-n3 {'+
'    margin-left: -1rem!important;'+
'  }'+
''+
'  .m-sm-n4 {'+
'    margin: -1.5rem!important;'+
'  }'+
''+
'  .mt-sm-n4,'+
'.my-sm-n4 {'+
'    margin-top: -1.5rem!important;'+
'  }'+
''+
'  .mr-sm-n4,'+
'.mx-sm-n4 {'+
'    margin-right: -1.5rem!important;'+
'  }'+
''+
'  .mb-sm-n4,'+
'.my-sm-n4 {'+
'    margin-bottom: -1.5rem!important;'+
'  }'+
''+
'  .ml-sm-n4,'+
'.mx-sm-n4 {'+
'    margin-left: -1.5rem!important;'+
'  }'+
''+
'  .m-sm-n5 {'+
'    margin: -3rem!important;'+
'  }'+
''+
'  .mt-sm-n5,'+
'.my-sm-n5 {'+
'    margin-top: -3rem!important;'+
'  }'+
''+
'  .mr-sm-n5,'+
'.mx-sm-n5 {'+
'    margin-right: -3rem!important;'+
'  }'+
''+
'  .mb-sm-n5,'+
'.my-sm-n5 {'+
'    margin-bottom: -3rem!important;'+
'  }'+
''+
'  .ml-sm-n5,'+
'.mx-sm-n5 {'+
'    margin-left: -3rem!important;'+
'  }'+
''+
'  .m-sm-auto {'+
'    margin: auto!important;'+
'  }'+
''+
'  .mt-sm-auto,'+
'.my-sm-auto {'+
'    margin-top: auto!important;'+
'  }'+
''+
'  .mr-sm-auto,'+
'.mx-sm-auto {'+
'    margin-right: auto!important;'+
'  }'+
''+
'  .mb-sm-auto,'+
'.my-sm-auto {'+
'    margin-bottom: auto!important;'+
'  }'+
''+
'  .ml-sm-auto,'+
'.mx-sm-auto {'+
'    margin-left: auto!important;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .m-md-0 {'+
'    margin: 0!important;'+
'  }'+
''+
'  .mt-md-0,'+
'.my-md-0 {'+
'    margin-top: 0!important;'+
'  }'+
''+
'  .mr-md-0,'+
'.mx-md-0 {'+
'    margin-right: 0!important;'+
'  }'+
''+
'  .mb-md-0,'+
'.my-md-0 {'+
'    margin-bottom: 0!important;'+
'  }'+
''+
'  .ml-md-0,'+
'.mx-md-0 {'+
'    margin-left: 0!important;'+
'  }'+
''+
'  .m-md-1 {'+
'    margin: .25rem!important;'+
'  }'+
''+
'  .mt-md-1,'+
'.my-md-1 {'+
'    margin-top: .25rem!important;'+
'  }'+
''+
'  .mr-md-1,'+
'.mx-md-1 {'+
'    margin-right: .25rem!important;'+
'  }'+
''+
'  .mb-md-1,'+
'.my-md-1 {'+
'    margin-bottom: .25rem!important;'+
'  }'+
''+
'  .ml-md-1,'+
'.mx-md-1 {'+
'    margin-left: .25rem!important;'+
'  }'+
''+
'  .m-md-2 {'+
'    margin: .5rem!important;'+
'  }'+
''+
'  .mt-md-2,'+
'.my-md-2 {'+
'    margin-top: .5rem!important;'+
'  }'+
''+
'  .mr-md-2,'+
'.mx-md-2 {'+
'    margin-right: .5rem!important;'+
'  }'+
''+
'  .mb-md-2,'+
'.my-md-2 {'+
'    margin-bottom: .5rem!important;'+
'  }'+
''+
'  .ml-md-2,'+
'.mx-md-2 {'+
'    margin-left: .5rem!important;'+
'  }'+
''+
'  .m-md-3 {'+
'    margin: 1rem!important;'+
'  }'+
''+
'  .mt-md-3,'+
'.my-md-3 {'+
'    margin-top: 1rem!important;'+
'  }'+
''+
'  .mr-md-3,'+
'.mx-md-3 {'+
'    margin-right: 1rem!important;'+
'  }'+
''+
'  .mb-md-3,'+
'.my-md-3 {'+
'    margin-bottom: 1rem!important;'+
'  }'+
''+
'  .ml-md-3,'+
'.mx-md-3 {'+
'    margin-left: 1rem!important;'+
'  }'+
''+
'  .m-md-4 {'+
'    margin: 1.5rem!important;'+
'  }'+
''+
'  .mt-md-4,'+
'.my-md-4 {'+
'    margin-top: 1.5rem!important;'+
'  }'+
''+
'  .mr-md-4,'+
'.mx-md-4 {'+
'    margin-right: 1.5rem!important;'+
'  }'+
''+
'  .mb-md-4,'+
'.my-md-4 {'+
'    margin-bottom: 1.5rem!important;'+
'  }'+
''+
'  .ml-md-4,'+
'.mx-md-4 {'+
'    margin-left: 1.5rem!important;'+
'  }'+
''+
'  .m-md-5 {'+
'    margin: 3rem!important;'+
'  }'+
''+
'  .mt-md-5,'+
'.my-md-5 {'+
'    margin-top: 3rem!important;'+
'  }'+
''+
'  .mr-md-5,'+
'.mx-md-5 {'+
'    margin-right: 3rem!important;'+
'  }'+
''+
'  .mb-md-5,'+
'.my-md-5 {'+
'    margin-bottom: 3rem!important;'+
'  }'+
''+
'  .ml-md-5,'+
'.mx-md-5 {'+
'    margin-left: 3rem!important;'+
'  }'+
''+
'  .p-md-0 {'+
'    padding: 0!important;'+
'  }'+
''+
'  .pt-md-0,'+
'.py-md-0 {'+
'    padding-top: 0!important;'+
'  }'+
''+
'  .pr-md-0,'+
'.px-md-0 {'+
'    padding-right: 0!important;'+
'  }'+
''+
'  .pb-md-0,'+
'.py-md-0 {'+
'    padding-bottom: 0!important;'+
'  }'+
''+
'  .pl-md-0,'+
'.px-md-0 {'+
'    padding-left: 0!important;'+
'  }'+
''+
'  .p-md-1 {'+
'    padding: .25rem!important;'+
'  }'+
''+
'  .pt-md-1,'+
'.py-md-1 {'+
'    padding-top: .25rem!important;'+
'  }'+
''+
'  .pr-md-1,'+
'.px-md-1 {'+
'    padding-right: .25rem!important;'+
'  }'+
''+
'  .pb-md-1,'+
'.py-md-1 {'+
'    padding-bottom: .25rem!important;'+
'  }'+
''+
'  .pl-md-1,'+
'.px-md-1 {'+
'    padding-left: .25rem!important;'+
'  }'+
''+
'  .p-md-2 {'+
'    padding: .5rem!important;'+
'  }'+
''+
'  .pt-md-2,'+
'.py-md-2 {'+
'    padding-top: .5rem!important;'+
'  }'+
''+
'  .pr-md-2,'+
'.px-md-2 {'+
'    padding-right: .5rem!important;'+
'  }'+
''+
'  .pb-md-2,'+
'.py-md-2 {'+
'    padding-bottom: .5rem!important;'+
'  }'+
''+
'  .pl-md-2,'+
'.px-md-2 {'+
'    padding-left: .5rem!important;'+
'  }'+
''+
'  .p-md-3 {'+
'    padding: 1rem!important;'+
'  }'+
''+
'  .pt-md-3,'+
'.py-md-3 {'+
'    padding-top: 1rem!important;'+
'  }'+
''+
'  .pr-md-3,'+
'.px-md-3 {'+
'    padding-right: 1rem!important;'+
'  }'+
''+
'  .pb-md-3,'+
'.py-md-3 {'+
'    padding-bottom: 1rem!important;'+
'  }'+
''+
'  .pl-md-3,'+
'.px-md-3 {'+
'    padding-left: 1rem!important;'+
'  }'+
''+
'  .p-md-4 {'+
'    padding: 1.5rem!important;'+
'  }'+
''+
'  .pt-md-4,'+
'.py-md-4 {'+
'    padding-top: 1.5rem!important;'+
'  }'+
''+
'  .pr-md-4,'+
'.px-md-4 {'+
'    padding-right: 1.5rem!important;'+
'  }'+
''+
'  .pb-md-4,'+
'.py-md-4 {'+
'    padding-bottom: 1.5rem!important;'+
'  }'+
''+
'  .pl-md-4,'+
'.px-md-4 {'+
'    padding-left: 1.5rem!important;'+
'  }'+
''+
'  .p-md-5 {'+
'    padding: 3rem!important;'+
'  }'+
''+
'  .pt-md-5,'+
'.py-md-5 {'+
'    padding-top: 3rem!important;'+
'  }'+
''+
'  .pr-md-5,'+
'.px-md-5 {'+
'    padding-right: 3rem!important;'+
'  }'+
''+
'  .pb-md-5,'+
'.py-md-5 {'+
'    padding-bottom: 3rem!important;'+
'  }'+
''+
'  .pl-md-5,'+
'.px-md-5 {'+
'    padding-left: 3rem!important;'+
'  }'+
''+
'  .m-md-n1 {'+
'    margin: -.25rem!important;'+
'  }'+
''+
'  .mt-md-n1,'+
'.my-md-n1 {'+
'    margin-top: -.25rem!important;'+
'  }'+
''+
'  .mr-md-n1,'+
'.mx-md-n1 {'+
'    margin-right: -.25rem!important;'+
'  }'+
''+
'  .mb-md-n1,'+
'.my-md-n1 {'+
'    margin-bottom: -.25rem!important;'+
'  }'+
''+
'  .ml-md-n1,'+
'.mx-md-n1 {'+
'    margin-left: -.25rem!important;'+
'  }'+
''+
'  .m-md-n2 {'+
'    margin: -.5rem!important;'+
'  }'+
''+
'  .mt-md-n2,'+
'.my-md-n2 {'+
'    margin-top: -.5rem!important;'+
'  }'+
''+
'  .mr-md-n2,'+
'.mx-md-n2 {'+
'    margin-right: -.5rem!important;'+
'  }'+
''+
'  .mb-md-n2,'+
'.my-md-n2 {'+
'    margin-bottom: -.5rem!important;'+
'  }'+
''+
'  .ml-md-n2,'+
'.mx-md-n2 {'+
'    margin-left: -.5rem!important;'+
'  }'+
''+
'  .m-md-n3 {'+
'    margin: -1rem!important;'+
'  }'+
''+
'  .mt-md-n3,'+
'.my-md-n3 {'+
'    margin-top: -1rem!important;'+
'  }'+
''+
'  .mr-md-n3,'+
'.mx-md-n3 {'+
'    margin-right: -1rem!important;'+
'  }'+
''+
'  .mb-md-n3,'+
'.my-md-n3 {'+
'    margin-bottom: -1rem!important;'+
'  }'+
''+
'  .ml-md-n3,'+
'.mx-md-n3 {'+
'    margin-left: -1rem!important;'+
'  }'+
''+
'  .m-md-n4 {'+
'    margin: -1.5rem!important;'+
'  }'+
''+
'  .mt-md-n4,'+
'.my-md-n4 {'+
'    margin-top: -1.5rem!important;'+
'  }'+
''+
'  .mr-md-n4,'+
'.mx-md-n4 {'+
'    margin-right: -1.5rem!important;'+
'  }'+
''+
'  .mb-md-n4,'+
'.my-md-n4 {'+
'    margin-bottom: -1.5rem!important;'+
'  }'+
''+
'  .ml-md-n4,'+
'.mx-md-n4 {'+
'    margin-left: -1.5rem!important;'+
'  }'+
''+
'  .m-md-n5 {'+
'    margin: -3rem!important;'+
'  }'+
''+
'  .mt-md-n5,'+
'.my-md-n5 {'+
'    margin-top: -3rem!important;'+
'  }'+
''+
'  .mr-md-n5,'+
'.mx-md-n5 {'+
'    margin-right: -3rem!important;'+
'  }'+
''+
'  .mb-md-n5,'+
'.my-md-n5 {'+
'    margin-bottom: -3rem!important;'+
'  }'+
''+
'  .ml-md-n5,'+
'.mx-md-n5 {'+
'    margin-left: -3rem!important;'+
'  }'+
''+
'  .m-md-auto {'+
'    margin: auto!important;'+
'  }'+
''+
'  .mt-md-auto,'+
'.my-md-auto {'+
'    margin-top: auto!important;'+
'  }'+
''+
'  .mr-md-auto,'+
'.mx-md-auto {'+
'    margin-right: auto!important;'+
'  }'+
''+
'  .mb-md-auto,'+
'.my-md-auto {'+
'    margin-bottom: auto!important;'+
'  }'+
''+
'  .ml-md-auto,'+
'.mx-md-auto {'+
'    margin-left: auto!important;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .m-lg-0 {'+
'    margin: 0!important;'+
'  }'+
''+
'  .mt-lg-0,'+
'.my-lg-0 {'+
'    margin-top: 0!important;'+
'  }'+
''+
'  .mr-lg-0,'+
'.mx-lg-0 {'+
'    margin-right: 0!important;'+
'  }'+
''+
'  .mb-lg-0,'+
'.my-lg-0 {'+
'    margin-bottom: 0!important;'+
'  }'+
''+
'  .ml-lg-0,'+
'.mx-lg-0 {'+
'    margin-left: 0!important;'+
'  }'+
''+
'  .m-lg-1 {'+
'    margin: .25rem!important;'+
'  }'+
''+
'  .mt-lg-1,'+
'.my-lg-1 {'+
'    margin-top: .25rem!important;'+
'  }'+
''+
'  .mr-lg-1,'+
'.mx-lg-1 {'+
'    margin-right: .25rem!important;'+
'  }'+
''+
'  .mb-lg-1,'+
'.my-lg-1 {'+
'    margin-bottom: .25rem!important;'+
'  }'+
''+
'  .ml-lg-1,'+
'.mx-lg-1 {'+
'    margin-left: .25rem!important;'+
'  }'+
''+
'  .m-lg-2 {'+
'    margin: .5rem!important;'+
'  }'+
''+
'  .mt-lg-2,'+
'.my-lg-2 {'+
'    margin-top: .5rem!important;'+
'  }'+
''+
'  .mr-lg-2,'+
'.mx-lg-2 {'+
'    margin-right: .5rem!important;'+
'  }'+
''+
'  .mb-lg-2,'+
'.my-lg-2 {'+
'    margin-bottom: .5rem!important;'+
'  }'+
''+
'  .ml-lg-2,'+
'.mx-lg-2 {'+
'    margin-left: .5rem!important;'+
'  }'+
''+
'  .m-lg-3 {'+
'    margin: 1rem!important;'+
'  }'+
''+
'  .mt-lg-3,'+
'.my-lg-3 {'+
'    margin-top: 1rem!important;'+
'  }'+
''+
'  .mr-lg-3,'+
'.mx-lg-3 {'+
'    margin-right: 1rem!important;'+
'  }'+
''+
'  .mb-lg-3,'+
'.my-lg-3 {'+
'    margin-bottom: 1rem!important;'+
'  }'+
''+
'  .ml-lg-3,'+
'.mx-lg-3 {'+
'    margin-left: 1rem!important;'+
'  }'+
''+
'  .m-lg-4 {'+
'    margin: 1.5rem!important;'+
'  }'+
''+
'  .mt-lg-4,'+
'.my-lg-4 {'+
'    margin-top: 1.5rem!important;'+
'  }'+
''+
'  .mr-lg-4,'+
'.mx-lg-4 {'+
'    margin-right: 1.5rem!important;'+
'  }'+
''+
'  .mb-lg-4,'+
'.my-lg-4 {'+
'    margin-bottom: 1.5rem!important;'+
'  }'+
''+
'  .ml-lg-4,'+
'.mx-lg-4 {'+
'    margin-left: 1.5rem!important;'+
'  }'+
''+
'  .m-lg-5 {'+
'    margin: 3rem!important;'+
'  }'+
''+
'  .mt-lg-5,'+
'.my-lg-5 {'+
'    margin-top: 3rem!important;'+
'  }'+
''+
'  .mr-lg-5,'+
'.mx-lg-5 {'+
'    margin-right: 3rem!important;'+
'  }'+
''+
'  .mb-lg-5,'+
'.my-lg-5 {'+
'    margin-bottom: 3rem!important;'+
'  }'+
''+
'  .ml-lg-5,'+
'.mx-lg-5 {'+
'    margin-left: 3rem!important;'+
'  }'+
''+
'  .p-lg-0 {'+
'    padding: 0!important;'+
'  }'+
''+
'  .pt-lg-0,'+
'.py-lg-0 {'+
'    padding-top: 0!important;'+
'  }'+
''+
'  .pr-lg-0,'+
'.px-lg-0 {'+
'    padding-right: 0!important;'+
'  }'+
''+
'  .pb-lg-0,'+
'.py-lg-0 {'+
'    padding-bottom: 0!important;'+
'  }'+
''+
'  .pl-lg-0,'+
'.px-lg-0 {'+
'    padding-left: 0!important;'+
'  }'+
''+
'  .p-lg-1 {'+
'    padding: .25rem!important;'+
'  }'+
''+
'  .pt-lg-1,'+
'.py-lg-1 {'+
'    padding-top: .25rem!important;'+
'  }'+
''+
'  .pr-lg-1,'+
'.px-lg-1 {'+
'    padding-right: .25rem!important;'+
'  }'+
''+
'  .pb-lg-1,'+
'.py-lg-1 {'+
'    padding-bottom: .25rem!important;'+
'  }'+
''+
'  .pl-lg-1,'+
'.px-lg-1 {'+
'    padding-left: .25rem!important;'+
'  }'+
''+
'  .p-lg-2 {'+
'    padding: .5rem!important;'+
'  }'+
''+
'  .pt-lg-2,'+
'.py-lg-2 {'+
'    padding-top: .5rem!important;'+
'  }'+
''+
'  .pr-lg-2,'+
'.px-lg-2 {'+
'    padding-right: .5rem!important;'+
'  }'+
''+
'  .pb-lg-2,'+
'.py-lg-2 {'+
'    padding-bottom: .5rem!important;'+
'  }'+
''+
'  .pl-lg-2,'+
'.px-lg-2 {'+
'    padding-left: .5rem!important;'+
'  }'+
''+
'  .p-lg-3 {'+
'    padding: 1rem!important;'+
'  }'+
''+
'  .pt-lg-3,'+
'.py-lg-3 {'+
'    padding-top: 1rem!important;'+
'  }'+
''+
'  .pr-lg-3,'+
'.px-lg-3 {'+
'    padding-right: 1rem!important;'+
'  }'+
''+
'  .pb-lg-3,'+
'.py-lg-3 {'+
'    padding-bottom: 1rem!important;'+
'  }'+
''+
'  .pl-lg-3,'+
'.px-lg-3 {'+
'    padding-left: 1rem!important;'+
'  }'+
''+
'  .p-lg-4 {'+
'    padding: 1.5rem!important;'+
'  }'+
''+
'  .pt-lg-4,'+
'.py-lg-4 {'+
'    padding-top: 1.5rem!important;'+
'  }'+
''+
'  .pr-lg-4,'+
'.px-lg-4 {'+
'    padding-right: 1.5rem!important;'+
'  }'+
''+
'  .pb-lg-4,'+
'.py-lg-4 {'+
'    padding-bottom: 1.5rem!important;'+
'  }'+
''+
'  .pl-lg-4,'+
'.px-lg-4 {'+
'    padding-left: 1.5rem!important;'+
'  }'+
''+
'  .p-lg-5 {'+
'    padding: 3rem!important;'+
'  }'+
''+
'  .pt-lg-5,'+
'.py-lg-5 {'+
'    padding-top: 3rem!important;'+
'  }'+
''+
'  .pr-lg-5,'+
'.px-lg-5 {'+
'    padding-right: 3rem!important;'+
'  }'+
''+
'  .pb-lg-5,'+
'.py-lg-5 {'+
'    padding-bottom: 3rem!important;'+
'  }'+
''+
'  .pl-lg-5,'+
'.px-lg-5 {'+
'    padding-left: 3rem!important;'+
'  }'+
''+
'  .m-lg-n1 {'+
'    margin: -.25rem!important;'+
'  }'+
''+
'  .mt-lg-n1,'+
'.my-lg-n1 {'+
'    margin-top: -.25rem!important;'+
'  }'+
''+
'  .mr-lg-n1,'+
'.mx-lg-n1 {'+
'    margin-right: -.25rem!important;'+
'  }'+
''+
'  .mb-lg-n1,'+
'.my-lg-n1 {'+
'    margin-bottom: -.25rem!important;'+
'  }'+
''+
'  .ml-lg-n1,'+
'.mx-lg-n1 {'+
'    margin-left: -.25rem!important;'+
'  }'+
''+
'  .m-lg-n2 {'+
'    margin: -.5rem!important;'+
'  }'+
''+
'  .mt-lg-n2,'+
'.my-lg-n2 {'+
'    margin-top: -.5rem!important;'+
'  }'+
''+
'  .mr-lg-n2,'+
'.mx-lg-n2 {'+
'    margin-right: -.5rem!important;'+
'  }'+
''+
'  .mb-lg-n2,'+
'.my-lg-n2 {'+
'    margin-bottom: -.5rem!important;'+
'  }'+
''+
'  .ml-lg-n2,'+
'.mx-lg-n2 {'+
'    margin-left: -.5rem!important;'+
'  }'+
''+
'  .m-lg-n3 {'+
'    margin: -1rem!important;'+
'  }'+
''+
'  .mt-lg-n3,'+
'.my-lg-n3 {'+
'    margin-top: -1rem!important;'+
'  }'+
''+
'  .mr-lg-n3,'+
'.mx-lg-n3 {'+
'    margin-right: -1rem!important;'+
'  }'+
''+
'  .mb-lg-n3,'+
'.my-lg-n3 {'+
'    margin-bottom: -1rem!important;'+
'  }'+
''+
'  .ml-lg-n3,'+
'.mx-lg-n3 {'+
'    margin-left: -1rem!important;'+
'  }'+
''+
'  .m-lg-n4 {'+
'    margin: -1.5rem!important;'+
'  }'+
''+
'  .mt-lg-n4,'+
'.my-lg-n4 {'+
'    margin-top: -1.5rem!important;'+
'  }'+
''+
'  .mr-lg-n4,'+
'.mx-lg-n4 {'+
'    margin-right: -1.5rem!important;'+
'  }'+
''+
'  .mb-lg-n4,'+
'.my-lg-n4 {'+
'    margin-bottom: -1.5rem!important;'+
'  }'+
''+
'  .ml-lg-n4,'+
'.mx-lg-n4 {'+
'    margin-left: -1.5rem!important;'+
'  }'+
''+
'  .m-lg-n5 {'+
'    margin: -3rem!important;'+
'  }'+
''+
'  .mt-lg-n5,'+
'.my-lg-n5 {'+
'    margin-top: -3rem!important;'+
'  }'+
''+
'  .mr-lg-n5,'+
'.mx-lg-n5 {'+
'    margin-right: -3rem!important;'+
'  }'+
''+
'  .mb-lg-n5,'+
'.my-lg-n5 {'+
'    margin-bottom: -3rem!important;'+
'  }'+
''+
'  .ml-lg-n5,'+
'.mx-lg-n5 {'+
'    margin-left: -3rem!important;'+
'  }'+
''+
'  .m-lg-auto {'+
'    margin: auto!important;'+
'  }'+
''+
'  .mt-lg-auto,'+
'.my-lg-auto {'+
'    margin-top: auto!important;'+
'  }'+
''+
'  .mr-lg-auto,'+
'.mx-lg-auto {'+
'    margin-right: auto!important;'+
'  }'+
''+
'  .mb-lg-auto,'+
'.my-lg-auto {'+
'    margin-bottom: auto!important;'+
'  }'+
''+
'  .ml-lg-auto,'+
'.mx-lg-auto {'+
'    margin-left: auto!important;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .m-xl-0 {'+
'    margin: 0!important;'+
'  }'+
''+
'  .mt-xl-0,'+
'.my-xl-0 {'+
'    margin-top: 0!important;'+
'  }'+
''+
'  .mr-xl-0,'+
'.mx-xl-0 {'+
'    margin-right: 0!important;'+
'  }'+
''+
'  .mb-xl-0,'+
'.my-xl-0 {'+
'    margin-bottom: 0!important;'+
'  }'+
''+
'  .ml-xl-0,'+
'.mx-xl-0 {'+
'    margin-left: 0!important;'+
'  }'+
''+
'  .m-xl-1 {'+
'    margin: .25rem!important;'+
'  }'+
''+
'  .mt-xl-1,'+
'.my-xl-1 {'+
'    margin-top: .25rem!important;'+
'  }'+
''+
'  .mr-xl-1,'+
'.mx-xl-1 {'+
'    margin-right: .25rem!important;'+
'  }'+
''+
'  .mb-xl-1,'+
'.my-xl-1 {'+
'    margin-bottom: .25rem!important;'+
'  }'+
''+
'  .ml-xl-1,'+
'.mx-xl-1 {'+
'    margin-left: .25rem!important;'+
'  }'+
''+
'  .m-xl-2 {'+
'    margin: .5rem!important;'+
'  }'+
''+
'  .mt-xl-2,'+
'.my-xl-2 {'+
'    margin-top: .5rem!important;'+
'  }'+
''+
'  .mr-xl-2,'+
'.mx-xl-2 {'+
'    margin-right: .5rem!important;'+
'  }'+
''+
'  .mb-xl-2,'+
'.my-xl-2 {'+
'    margin-bottom: .5rem!important;'+
'  }'+
''+
'  .ml-xl-2,'+
'.mx-xl-2 {'+
'    margin-left: .5rem!important;'+
'  }'+
''+
'  .m-xl-3 {'+
'    margin: 1rem!important;'+
'  }'+
''+
'  .mt-xl-3,'+
'.my-xl-3 {'+
'    margin-top: 1rem!important;'+
'  }'+
''+
'  .mr-xl-3,'+
'.mx-xl-3 {'+
'    margin-right: 1rem!important;'+
'  }'+
''+
'  .mb-xl-3,'+
'.my-xl-3 {'+
'    margin-bottom: 1rem!important;'+
'  }'+
''+
'  .ml-xl-3,'+
'.mx-xl-3 {'+
'    margin-left: 1rem!important;'+
'  }'+
''+
'  .m-xl-4 {'+
'    margin: 1.5rem!important;'+
'  }'+
''+
'  .mt-xl-4,'+
'.my-xl-4 {'+
'    margin-top: 1.5rem!important;'+
'  }'+
''+
'  .mr-xl-4,'+
'.mx-xl-4 {'+
'    margin-right: 1.5rem!important;'+
'  }'+
''+
'  .mb-xl-4,'+
'.my-xl-4 {'+
'    margin-bottom: 1.5rem!important;'+
'  }'+
''+
'  .ml-xl-4,'+
'.mx-xl-4 {'+
'    margin-left: 1.5rem!important;'+
'  }'+
''+
'  .m-xl-5 {'+
'    margin: 3rem!important;'+
'  }'+
''+
'  .mt-xl-5,'+
'.my-xl-5 {'+
'    margin-top: 3rem!important;'+
'  }'+
''+
'  .mr-xl-5,'+
'.mx-xl-5 {'+
'    margin-right: 3rem!important;'+
'  }'+
''+
'  .mb-xl-5,'+
'.my-xl-5 {'+
'    margin-bottom: 3rem!important;'+
'  }'+
''+
'  .ml-xl-5,'+
'.mx-xl-5 {'+
'    margin-left: 3rem!important;'+
'  }'+
''+
'  .p-xl-0 {'+
'    padding: 0!important;'+
'  }'+
''+
'  .pt-xl-0,'+
'.py-xl-0 {'+
'    padding-top: 0!important;'+
'  }'+
''+
'  .pr-xl-0,'+
'.px-xl-0 {'+
'    padding-right: 0!important;'+
'  }'+
''+
'  .pb-xl-0,'+
'.py-xl-0 {'+
'    padding-bottom: 0!important;'+
'  }'+
''+
'  .pl-xl-0,'+
'.px-xl-0 {'+
'    padding-left: 0!important;'+
'  }'+
''+
'  .p-xl-1 {'+
'    padding: .25rem!important;'+
'  }'+
''+
'  .pt-xl-1,'+
'.py-xl-1 {'+
'    padding-top: .25rem!important;'+
'  }'+
''+
'  .pr-xl-1,'+
'.px-xl-1 {'+
'    padding-right: .25rem!important;'+
'  }'+
''+
'  .pb-xl-1,'+
'.py-xl-1 {'+
'    padding-bottom: .25rem!important;'+
'  }'+
''+
'  .pl-xl-1,'+
'.px-xl-1 {'+
'    padding-left: .25rem!important;'+
'  }'+
''+
'  .p-xl-2 {'+
'    padding: .5rem!important;'+
'  }'+
''+
'  .pt-xl-2,'+
'.py-xl-2 {'+
'    padding-top: .5rem!important;'+
'  }'+
''+
'  .pr-xl-2,'+
'.px-xl-2 {'+
'    padding-right: .5rem!important;'+
'  }'+
''+
'  .pb-xl-2,'+
'.py-xl-2 {'+
'    padding-bottom: .5rem!important;'+
'  }'+
''+
'  .pl-xl-2,'+
'.px-xl-2 {'+
'    padding-left: .5rem!important;'+
'  }'+
''+
'  .p-xl-3 {'+
'    padding: 1rem!important;'+
'  }'+
''+
'  .pt-xl-3,'+
'.py-xl-3 {'+
'    padding-top: 1rem!important;'+
'  }'+
''+
'  .pr-xl-3,'+
'.px-xl-3 {'+
'    padding-right: 1rem!important;'+
'  }'+
''+
'  .pb-xl-3,'+
'.py-xl-3 {'+
'    padding-bottom: 1rem!important;'+
'  }'+
''+
'  .pl-xl-3,'+
'.px-xl-3 {'+
'    padding-left: 1rem!important;'+
'  }'+
''+
'  .p-xl-4 {'+
'    padding: 1.5rem!important;'+
'  }'+
''+
'  .pt-xl-4,'+
'.py-xl-4 {'+
'    padding-top: 1.5rem!important;'+
'  }'+
''+
'  .pr-xl-4,'+
'.px-xl-4 {'+
'    padding-right: 1.5rem!important;'+
'  }'+
''+
'  .pb-xl-4,'+
'.py-xl-4 {'+
'    padding-bottom: 1.5rem!important;'+
'  }'+
''+
'  .pl-xl-4,'+
'.px-xl-4 {'+
'    padding-left: 1.5rem!important;'+
'  }'+
''+
'  .p-xl-5 {'+
'    padding: 3rem!important;'+
'  }'+
''+
'  .pt-xl-5,'+
'.py-xl-5 {'+
'    padding-top: 3rem!important;'+
'  }'+
''+
'  .pr-xl-5,'+
'.px-xl-5 {'+
'    padding-right: 3rem!important;'+
'  }'+
''+
'  .pb-xl-5,'+
'.py-xl-5 {'+
'    padding-bottom: 3rem!important;'+
'  }'+
''+
'  .pl-xl-5,'+
'.px-xl-5 {'+
'    padding-left: 3rem!important;'+
'  }'+
''+
'  .m-xl-n1 {'+
'    margin: -.25rem!important;'+
'  }'+
''+
'  .mt-xl-n1,'+
'.my-xl-n1 {'+
'    margin-top: -.25rem!important;'+
'  }'+
''+
'  .mr-xl-n1,'+
'.mx-xl-n1 {'+
'    margin-right: -.25rem!important;'+
'  }'+
''+
'  .mb-xl-n1,'+
'.my-xl-n1 {'+
'    margin-bottom: -.25rem!important;'+
'  }'+
''+
'  .ml-xl-n1,'+
'.mx-xl-n1 {'+
'    margin-left: -.25rem!important;'+
'  }'+
''+
'  .m-xl-n2 {'+
'    margin: -.5rem!important;'+
'  }'+
''+
'  .mt-xl-n2,'+
'.my-xl-n2 {'+
'    margin-top: -.5rem!important;'+
'  }'+
''+
'  .mr-xl-n2,'+
'.mx-xl-n2 {'+
'    margin-right: -.5rem!important;'+
'  }'+
''+
'  .mb-xl-n2,'+
'.my-xl-n2 {'+
'    margin-bottom: -.5rem!important;'+
'  }'+
''+
'  .ml-xl-n2,'+
'.mx-xl-n2 {'+
'    margin-left: -.5rem!important;'+
'  }'+
''+
'  .m-xl-n3 {'+
'    margin: -1rem!important;'+
'  }'+
''+
'  .mt-xl-n3,'+
'.my-xl-n3 {'+
'    margin-top: -1rem!important;'+
'  }'+
''+
'  .mr-xl-n3,'+
'.mx-xl-n3 {'+
'    margin-right: -1rem!important;'+
'  }'+
''+
'  .mb-xl-n3,'+
'.my-xl-n3 {'+
'    margin-bottom: -1rem!important;'+
'  }'+
''+
'  .ml-xl-n3,'+
'.mx-xl-n3 {'+
'    margin-left: -1rem!important;'+
'  }'+
''+
'  .m-xl-n4 {'+
'    margin: -1.5rem!important;'+
'  }'+
''+
'  .mt-xl-n4,'+
'.my-xl-n4 {'+
'    margin-top: -1.5rem!important;'+
'  }'+
''+
'  .mr-xl-n4,'+
'.mx-xl-n4 {'+
'    margin-right: -1.5rem!important;'+
'  }'+
''+
'  .mb-xl-n4,'+
'.my-xl-n4 {'+
'    margin-bottom: -1.5rem!important;'+
'  }'+
''+
'  .ml-xl-n4,'+
'.mx-xl-n4 {'+
'    margin-left: -1.5rem!important;'+
'  }'+
''+
'  .m-xl-n5 {'+
'    margin: -3rem!important;'+
'  }'+
''+
'  .mt-xl-n5,'+
'.my-xl-n5 {'+
'    margin-top: -3rem!important;'+
'  }'+
''+
'  .mr-xl-n5,'+
'.mx-xl-n5 {'+
'    margin-right: -3rem!important;'+
'  }'+
''+
'  .mb-xl-n5,'+
'.my-xl-n5 {'+
'    margin-bottom: -3rem!important;'+
'  }'+
''+
'  .ml-xl-n5,'+
'.mx-xl-n5 {'+
'    margin-left: -3rem!important;'+
'  }'+
''+
'  .m-xl-auto {'+
'    margin: auto!important;'+
'  }'+
''+
'  .mt-xl-auto,'+
'.my-xl-auto {'+
'    margin-top: auto!important;'+
'  }'+
''+
'  .mr-xl-auto,'+
'.mx-xl-auto {'+
'    margin-right: auto!important;'+
'  }'+
''+
'  .mb-xl-auto,'+
'.my-xl-auto {'+
'    margin-bottom: auto!important;'+
'  }'+
''+
'  .ml-xl-auto,'+
'.mx-xl-auto {'+
'    margin-left: auto!important;'+
'  }'+
'}'+
'@media (min-width:576px) {'+
'  .text-sm-left {'+
'    text-align: left!important;'+
'  }'+
''+
'  .text-sm-right {'+
'    text-align: right!important;'+
'  }'+
''+
'  .text-sm-center {'+
'    text-align: center!important;'+
'  }'+
'}'+
'@media (min-width:768px) {'+
'  .text-md-left {'+
'    text-align: left!important;'+
'  }'+
''+
'  .text-md-right {'+
'    text-align: right!important;'+
'  }'+
''+
'  .text-md-center {'+
'    text-align: center!important;'+
'  }'+
'}'+
'@media (min-width:992px) {'+
'  .text-lg-left {'+
'    text-align: left!important;'+
'  }'+
''+
'  .text-lg-right {'+
'    text-align: right!important;'+
'  }'+
''+
'  .text-lg-center {'+
'    text-align: center!important;'+
'  }'+
'}'+
'@media (min-width:1200px) {'+
'  .text-xl-left {'+
'    text-align: left!important;'+
'  }'+
''+
'  .text-xl-right {'+
'    text-align: right!important;'+
'  }'+
''+
'  .text-xl-center {'+
'    text-align: center!important;'+
'  }'+
'}'+
'@media print {'+
'  *,'+
'::after,'+
'::before {'+
'    text-shadow: none!important;'+
'    box-shadow: none!important;'+
'  }'+
''+
'  a:not(.btn) {'+
'    text-decoration: underline;'+
'  }'+
''+
'  abbr[title]::after {'+
'    content: " (" attr(title) ")";'+
'  }'+
''+
'  pre {'+
'    white-space: pre-wrap!important;'+
'  }'+
''+
'  blockquote,'+
'pre {'+
'    border: 1px solid #adb5bd;'+
'    page-break-inside: avoid;'+
'  }'+
''+
'  thead {'+
'    display: table-header-group;'+
'  }'+
''+
'  img,'+
'tr {'+
'    page-break-inside: avoid;'+
'  }'+
''+
'  h2,'+
'h3,'+
'p {'+
'    orphans: 3;'+
'    widows: 3;'+
'  }'+
''+
'  h2,'+
'h3 {'+
'    page-break-after: avoid;'+
'  }'+
''+
'  @page {'+
'    size: a3;'+
'  }'+
''+
'  body {'+
'    min-width: 992px!important;'+
'  }'+
''+
'  .container {'+
'    min-width: 992px!important;'+
'  }'+
''+
'  .navbar {'+
'    display: none;'+
'  }'+
''+
'  .badge {'+
'    border: 1px solid #000;'+
'  }'+
''+
'  .table {'+
'    border-collapse: collapse!important;'+
'  }'+
''+
'  .table td,'+
'.table th {'+
'    background-color: #fff!important;'+
'  }'+
''+
'  .table-bordered td,'+
'.table-bordered th {'+
'    border: 1px solid #dee2e6!important;'+
'  }'+
''+
'  .table-dark {'+
'    color: inherit;'+
'  }'+
''+
'  .table-dark tbody+tbody,'+
'.table-dark td,'+
'.table-dark th,'+
'.table-dark thead th {'+
'    border-color: #dee2e6;'+
'  }'+
''+
'  .table .thead-dark th {'+
'    color: inherit;'+
'    border-color: #dee2e6;'+
'  }'+
'}'+
'</style>'+
'  '+
'</head>'+
'<body style="box-sizing: border-box; margin: 0; font-family: -apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,\'Noto Sans\',sans-serif,\'Apple Color Emoji\',\'Segoe UI Emoji\',\'Segoe UI Symbol\',\'Noto Color Emoji\'; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; text-align: left; background-color: #fff;">'+
'<div class="alert alert-success" style="box-sizing: border-box; position: relative; padding: .75rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem; color: #155724; background-color: #d4edda; border-color: #c3e6cb;">'+
'  <strong style="box-sizing: border-box; font-weight: bolder;">Success!</strong> Account created successfully.'+
'</div>'+
'<div class="jumbotron jumbotron-fluid" style="box-sizing: border-box; padding: 2rem 1rem; margin-bottom: 2rem; background-color: #e9ecef; padding-right: 0; padding-left: 0; border-radius: 0;">'+
'  <div class="container" style="box-sizing: border-box; width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;">'+
'    <h1 style="box-sizing: border-box; margin-top: 0; margin-bottom: .5rem; font-weight: 500; line-height: 1.2; font-size: 2.5rem;">Welcome to WistaBot</h1>      '+
'    <p style="box-sizing: border-box; margin-top: 0; margin-bottom: 1rem;">Your account has been created successfully and use the following credentials at wistabot.com to login.</p>'+
'<div class="container" style="box-sizing: border-box; width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;">'+
'  <table class="table" style="box-sizing: border-box; border-collapse: collapse; width: 100%; margin-bottom: 1rem; color: #212529;" width="100%">'+
'   '+
'    <tbody style="box-sizing: border-box;">'+
'      <tr style="box-sizing: border-box;">'+
'        <td style="box-sizing: border-box; padding: .75rem; vertical-align: top; border-top: 1px solid #dee2e6;" valign="top"><b>Username</b></td>'+
'        <td style="box-sizing: border-box; padding: .75rem; vertical-align: top; border-top: 1px solid #dee2e6;" valign="top">'+toAdd+'</td>'+
'        '+
'      </tr>'+
'      <tr style="box-sizing: border-box;">'+
'        <td style="box-sizing: border-box; padding: .75rem; vertical-align: top; border-top: 1px solid #dee2e6;" valign="top"><b>Password</b></td>'+
'        <td style="box-sizing: border-box; padding: .75rem; vertical-align: top; border-top: 1px solid #dee2e6;" valign="top">'+passw+'</td>'+
'        '+
'      </tr>'+
'      '+
'    </tbody>'+
'  </table>      '+
'</div>'+
'  </div>'+
'</div>'+
''+
''+
''+
'</body>'+
'</html>'
	

};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

