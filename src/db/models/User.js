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
        type: DataTypes.STRING,
        allowNull: false,
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
            msg: "el email no pu ede estar vacio",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "la contraseña no puede estar vacia",
          },
          len: {
            args: [7, 40],
            msg: "la contraseña debe tener entre 7 y 40 caracteres",
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
