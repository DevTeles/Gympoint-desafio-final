import { endOfWeek, startOfWeek } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const checkins = await Checkin.findAll({
      order: ['createdAt'],
    });

    return res.json(checkins);
  }

  async show(req, res) {
    const { id } = req.params;
    const checkins = await Checkin.findAll({
      where: { student_id: id },
      order: ['createdAt'],
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const { id } = req.params;

    const endWeek = endOfWeek(new Date());
    const startWeek = startOfWeek(new Date());

    const student = await Checkin.findAndCountAll({
      where: {
        student_id: id,
        createdAt: {
          [Op.between]: [startWeek, endWeek],
        },
      },
    });

    if (student.count >= 5) {
      return res.status(400).json({ error: 'Limit checkin' });
    }

    const checkin = await Checkin.create({
      student_id: id,
    });

    return res.json(checkin);
  }
}

export default new CheckinController();
