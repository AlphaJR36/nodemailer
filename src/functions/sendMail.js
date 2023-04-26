const fs = require('fs');
const { createTransport } = require('./createTransport');

async function sendMail() {

    try {

        const transporter = await createTransport();
        const sendMail = await transporter.sendMail({
            html: fs.readFileSync('./src/components/PaymentConfirmed/index.html', 'utf-8'),
            subject: 'Pagamento Confirmado | BOT - (Nome do BOT)',
            from: 'Azure Store™ <azureestoree@gmail.com>',
            to: [
                ''
            ]
        }).then(async () => {
            console.log('O email foi enviado com sucesso.');
        })
    } catch (err) {

        console.log('O email foi enviado sem sucesso.\n\nErro: ' + err);
    }
}

module.exports = { sendMail }
