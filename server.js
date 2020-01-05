const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const { user } = require('./user');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.post("/sendemail", (req, res) => {
    const { name, email, message } = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
            user: user().email,
            pass: user().pass
        }
    });

    var mailOptions = {
        from: user().email,
        to: "navascruzf@gmail.com",
        subject: "From Juan Navas Portfolio's",
        text: `
            Nombre: ${ name }
            Email: ${ email }
            Mensaje: ${ message }
        `
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) console.log(error);
        else {
            console.log("Message sent successfully: " + info.response);
            res.sendStatus(200);
        }
    });
});

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`SERVER running on localhost:${port}`));