'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plant.init(
    {
      plantName: DataTypes.STRING,
      plantSeason: DataTypes.STRING,
      plantColor: DataTypes.STRING,
      plantType: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Plant',
      tableName: 'plants'
    }
  )
  return Plant
}
