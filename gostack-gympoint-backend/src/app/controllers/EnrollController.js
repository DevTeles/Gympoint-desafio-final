import { addMonths, parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Pack from '../models/Pack';
import Enroll from '../models/Enroll';
import Student from '../models/Student';

import EnrollMail from '../jobs/EnrollMail';
import Queue from '../../lib/Queue';

class EnrollController {
  async index(req, res) {
    const enrolls = await Enroll.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      order: ['id'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Pack,
          as: 'pack',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json(enrolls);
  }

  async find(req, res) {
    const { id } = req.params;
    const enroll = await Enroll.findOne({
      where: { id },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name'],
        },
        {
          model: Pack,
          as: 'pack',
          attributes: ['id', 'duration', 'price'],
        },
      ],
    });

    return res.json(enroll);
  }

  async store(req, res) {
    const { student_id, pack_id, start_date } = req.body;
    /**
     * Check if student is enrolled
     */
    const studentEnrolled = await Enroll.findOne({ where: { student_id } });
    if (studentEnrolled) {
      return res.status(400).json({ error: 'Estudante já cadastrado' });
    }

    /**
     * Check if student exists
     */
    const studentExists = await Student.findOne({ where: { id: student_id } });
    if (!studentExists) {
      return res.status(400).json({ error: 'Estudante não cadastrado' });
    }

    /**
     * Check if pack exists
     */
    const packExists = await Pack.findOne({ where: { id: pack_id } });
    if (!packExists) {
      return res.status(400).json({ error: 'Pacote não cadastrado' });
    }

    /**
     * Get Pack and calc the End_Date and Price
     */
    const pack = await Pack.findByPk(pack_id);

    const date = parseISO(start_date);
    const end_date = addMonths(date, pack.duration);

    const price = pack.price * pack.duration;

    /**
     * Create enroll
     */
    const enroll = await Enroll.create({
      student_id,
      pack_id,
      start_date,
      end_date,
      price,
    });

    /**
     * Send email to student
     */
    const { name, email } = await Student.findOne({
      where: { id: student_id },
    });
    const start_date_formartted = format(date, "dd 'de' MMMM', às' H:mm'h'", {
      locale: pt,
    });
    const end_date_formartted = format(end_date, "dd 'de' MMMM', às' H:mm'h'", {
      locale: pt,
    });
    const enroll_id = enroll.id;
    const pack_title = pack.title;

    await Queue.add(EnrollMail.key, {
      enroll_id,
      pack_title,
      name,
      email,
      start_date_formartted,
      end_date_formartted,
      price,
    });

    return res.json(enroll);
  }

  async update(req, res) {
    const { id } = req.params;

    const enroll = await Enroll.findOne({ where: { id } });

    /**
     * Check if student exists
     */
    const { student_id } = req.body;

    if (student_id !== enroll.student_id) {
      const studentEnrolled = await Enroll.findOne({
        where: { id: student_id },
      });

      if (studentEnrolled) {
        return res.status(400).json({ error: 'Estudante já matriculado' });
      }
    }

    await enroll.update(req.body);

    return res.json(enroll);
  }

  async delete(req, res) {
    const { id } = req.params;

    const enroll = await Enroll.findByPk(id);

    await enroll.destroy();

    return res.json(enroll);
  }
}

export default new EnrollController();
