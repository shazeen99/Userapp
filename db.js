const path = require("path");
const {Sequelize, DataTypes, Model} = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
});

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = User;

sequelize.sync()
