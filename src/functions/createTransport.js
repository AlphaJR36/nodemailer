const nodemailer = require('nodemailer');
const { host, pass, port, user } = require('../config/smtp');

async function createTransport() {

    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: false,
        auth: {
            user: user,
            pass: pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    return transporter;
}

module.exports = { createTransport }
