import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import Student from '../app/models/Student';
import Pack from '../app/models/Pack';
import Enroll from '../app/models/Enroll';
import Checkin from '../app/models/Checkin';
import HelpOrder from '../app/models/HelpOrder';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, Student, Pack, Enroll, Checkin, HelpOrder, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
