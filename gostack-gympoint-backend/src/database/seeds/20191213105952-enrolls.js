const addMonths = require('date-fns/addMonths');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'enrolls',
      [
        {
          student_id: 1,
          pack_id: 1,
          start_date: new Date(),
          end_date: addMonths(new Date(), 1),
          price: 129,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 2,
          pack_id: 2,
          start_date: new Date(),
          end_date: addMonths(new Date(), 3),
          price: 109,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 3,
          pack_id: 3,
          start_date: new Date(),
          end_date: addMonths(new Date(), 6),
          price: 89,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 4,
          pack_id: 2,
          start_date: new Date(),
          end_date: addMonths(new Date(), 3),
          price: 109,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 5,
          pack_id: 1,
          start_date: new Date(),
          end_date: addMonths(new Date(), 1),
          price: 129,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 6,
          pack_id: 3,
          start_date: new Date(),
          end_date: addMonths(new Date(), 6),
          price: 89,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('enrolls', null, {});
  },
};
