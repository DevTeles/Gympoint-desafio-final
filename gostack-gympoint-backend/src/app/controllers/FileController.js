import File from '../models/File';
import Student from '../models/Student';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path });

    const student = await Student.findByPk(req.params.id);

    if (!student) return res.status(400).json({ error: 'Student Not found' });

    student.avatar_id = file.id;

    await student.save();

    return res.json(file);
  }
}

export default new FileController();
