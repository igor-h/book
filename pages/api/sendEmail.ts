import { NextApiRequest, NextApiResponse } from 'next';

const sgMail = require('@sendgrid/mail');

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  const content = {
    to: ['hola@bookledge.es'],
    from: 'hola@bookledge.es',
    subject: subject,
    text: description,
    html: `<div>
    <h1>Nombre: ${name}</h1>
    <h1>E-mail: ${email}</h1>
    <p>${description}</p>
    <p>Enviado por: ${referer || 'No especificado o oculto.'}`,
  };

  try {
    await sgMail.send(content);
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
