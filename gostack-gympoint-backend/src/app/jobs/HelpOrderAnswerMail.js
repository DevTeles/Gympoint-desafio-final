import Mail from '../../lib/Mail';

class HelpOrderAnswerMail {
  get key() {
    return 'HelpOrderAnswerMail';
  }

  async handle({ data }) {
    const { name, email, question, answer } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Oba! Sua pergunta foi respondida - GymPoint',
      template: 'helpOrderAnswer',
      context: {
        student_name: name,
        student_email: email,
        question,
        answer,
      },
    });
  }
}

export default new HelpOrderAnswerMail();
