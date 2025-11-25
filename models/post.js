const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clubId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
<<<<<<< HEAD
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending',
      allowNull: false,
    },
=======
>>>>>>> c8d1fd0 (Initial commit)
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

<<<<<<< HEAD
module.exports =  Post ;
=======
module.exports = { Post };
>>>>>>> c8d1fd0 (Initial commit)
