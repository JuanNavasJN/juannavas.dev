const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

//app.use('/api', api);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.post("/sendemail", (req, res) => {
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        tls: {
            chipers: "SSLv3"
        },
        auth: {
            user: "navascruz@hotmail.com",
            pass: "yoTocoFagoteCorreos17"
        }
    });

    var mailOptions = {
        from: "navascruz@hotmail.com",
        to: "navascruzf@gmail.com",
        subject: "Nodejs Mail",
        text: "this is the email's body text..."
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) console.log(error);
        else console.log("Message sent successfully: " + info.response);
    });
});

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));