import  nodemailer  from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "00ed31ff7fee7d",
    pass: "722a0c22b82a05"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gerson Videira <gersonvideita@task.ao>',
      subject,
      html: body,
    })
  }
}