import summary from './temp/allure-report/widgets/summary.json';
import sgMail from '@sendgrid/mail';
console.log(summary.statistic.total);

sgMail.setApiKey('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')
const msg = {
    to: 'alacopr@gmail.com', // Change to your recipient
    from: 'gera.salash@gmail.com', // Change to your verified sender
    subject: 'Class Work by Laziza',
    html: '<strong>Hello, this is Lazizas email. Test, test test. </strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
