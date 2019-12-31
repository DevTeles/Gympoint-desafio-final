import Mail from '../../lib/Mail';

class EnrollMail {
  get key() {
    return 'EnrollMail';
  }

  async handle({ data }) {
    const {
      enroll_id,
      pack_title,
      name,
      email,
      start_date_formartted,
      end_date_formartted,
      price,
    } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Matrícula realizada',
      template: 'enroll',
      context: {
        enroll_number: enroll_id,
        student_name: name,
        student_email: email,
        pack_name: pack_title,
        enroll_start_date: start_date_formartted,
        enroll_end_date: end_date_formartted,
        enroll_price: price,
      },
    });
  }
}

export default new EnrollMail();
