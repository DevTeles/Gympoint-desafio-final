import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import Student from '../models/Student';
import File from '../models/File';

class SessionStudentController {
  async store(req, res) {
    const { id } = req.body;

    // const student = await Student.findByPk(
    //   id,
    //   {
    //     token: jwt.sign({ id }, authConfig.secret, {
    //       expiresIn: authConfig.expiresIn,
    //     }),
    //   },
    //   {
    //     include: [
    //       {
    //         model: File,
    //         as: 'avatar',
    //         attributes: ['id', 'name', 'path', 'url'],
    //       },
    //     ],
    //   }
    // );

    const student = await Student.findOne({
      where: { id },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    return res.json({
      student,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });

    // if (!student)
    //   return res.status(401).json({ error: 'Student not found....' });

    // return res.json(student);
  }
}

export default new SessionStudentController();
