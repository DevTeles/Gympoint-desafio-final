module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Gabriel Costa',
          email: 'gabriel@gmail.com',
          age: 18,
          weight: 75,
          height: 175,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Francisco Costa',
          email: 'francisco@gmail.com',
          age: 25,
          weight: 88,
          height: 165,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Juliana Amorim',
          email: 'juliana@gmail.com',
          age: 30,
          weight: 61,
          height: 160,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Elda Rocha',
          email: 'elda@gmail.com',
          age: 33,
          weight: 65,
          height: 170,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'José Maria',
          email: 'josemaria@gmail.com',
          age: 55,
          weight: 85,
          height: 175,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria Eunice',
          email: 'mariaeunice@gmail.com',
          age: 52,
          weight: 68,
          height: 165,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('students', null, {});
  },
};
