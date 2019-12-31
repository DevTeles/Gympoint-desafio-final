import * as Yup from 'yup';
import Pack from '../models/Pack';
import User from '../models/User';

class PackController {
  async index(req, res) {
    const packs = await Pack.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
      order: ['id'],
    });

    return res.json(packs);
  }

  async find(req, res) {
    const { id } = req.params;
    const pack = await Pack.findOne({ where: { id } });

    return res.json(pack);
  }

  async store(req, res) {
    /**
     * Validation fields
     */
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .min(1)
        .max(12, 'teste')
        .required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validate failed' });
    }

    /**
     * Validation User Acess
     */
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'User no logged' });
    }

    const { title, duration, price } = req.body;
    const pack = await Pack.create({ title, duration, price });

    return res.json(pack);
  }

  async update(req, res) {
    /**
     * Validation fields
     */
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .moreThan(0)
        .lessThan(13)
        .required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validate failed' });
    }

    const { id } = req.params;
    const pack = await Pack.findOne({ where: { id } });

    const { title, duration, price } = await pack.update(req.body);

    return res.json({
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const pack = await Pack.findOne({ where: { id } });

    await pack.destroy(pack);

    return res.json(pack);
  }
}

export default new PackController();
