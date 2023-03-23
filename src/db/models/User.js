const { DataTypes } = require("sequelize");

const userFunc = (database) => {
  database.define(
    "User",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "el nombre no puede estar vacio",
          },
        },
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: {
          msg: "el email necesita ser unico",
        },
        validate: {
          isEmail: {
            msg: "el email no es valido",
          },
          notEmpty: {
            msg: "el email no puede estar vacio",
          },
        },
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "la contraseña no puede estar vacia",
          },
          len: {
            args: [5, 40],
            msg: "la contraseña debe tener entre 5 y 40 caracteres",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = userFunc;
