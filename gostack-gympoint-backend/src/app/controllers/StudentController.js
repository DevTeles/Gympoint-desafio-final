import * as Yup from 'yup';
import { Op } from 'sequelize';
import User from '../models/User';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const { name } = req.query;
    const students = await Student.findAll({
      where: name ? { name: { [Op.iLike]: `%${name}` } } : null,
      attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
      order: ['id'],
    });

    return res.json(students);
  }

  async find(req, res) {
    const { id } = req.params;
    const student = await Student.findOne({ where: { id } });

    return res.json(student);
  }

  async store(req, res) {
    /**
     * Validation Fields
     */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    /**
     * Check Logged User
     */
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(401).json({ error: 'Você não está logado' });
    }

    /**
     * Check if email already exists
     */
    const { email } = req.body;

    const emailExists = await Student.findOne({ where: { email } });

    if (emailExists) {
      return res.status(401).json({ error: 'Este email já está cadastrado' });
    }

    /**
     * Create Student
     */
    const { name, age, weight, height } = await Student.create(req.body);

    return res.json({
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    /**
     * Validation Fields
     */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Erro de validação' });
    }

    /**
     * Check Logged User
     */
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.statu(400).json({ error: 'Você não está logado' });
    }

    /**
     * Update Student
     */
    const { id } = req.params; // get id params

    const student = await Student.findOne({ where: { id } }); // find student by id

    /**
     * Check if email already exists
     */
    const { email } = req.body;

    if (email !== student.email) {
      const emailExists = await Student.findOne({ where: { email } });

      if (emailExists) {
        return res.status(401).json({ error: 'Este email já está cadastrado' });
      }
    }

    const { name, age, weight, height } = await student.update(req.body); // update student

    return res.json({
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const student = await Student.findOne({ where: { id } });
    await student.destroy();
    return res.json(student);
  }
}

export default new StudentController();
