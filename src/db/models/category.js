'use strict';
//import { CATEGORY } from '../../constants';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: { field:'categoryId'}
      })
    }
  }
  Category.init({
    name: DataTypes.STRING //ENUM(... Object.values(CATEGORY))
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};