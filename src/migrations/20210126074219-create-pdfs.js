module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Pdfs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    path: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    data: {
      type: Sequelize.BLOB('long'),
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Pdfs')
};