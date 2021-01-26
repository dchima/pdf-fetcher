module.exports = (sequelize, DataTypes) => {
  const Pdf = sequelize.define(
    'Pdf',
    {
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
        allowNull: true,
      },
    },
    {}
  );
  Pdf.associate = () => {
  };
  return Pdf;
};