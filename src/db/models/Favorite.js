const { DataTypes } = require('sequelize')

const favFunc = (database) => {
  database.define(
    'Favorite',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: false
    }
  )
}

module.exports = favFunc
