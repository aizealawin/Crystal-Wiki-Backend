'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.hasMany(models.Comment, { foreignKey: 'articleId' })
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      type: DataTypes.STRING,
      alignment: DataTypes.STRING,
      category: DataTypes.STRING,
      domains: DataTypes.STRING,
      pantheon: DataTypes.STRING,
      symbol: DataTypes.STRING,
      symbolImage: DataTypes.STRING,
      depiction: DataTypes.TEXT,
      enemies: DataTypes.TEXT,
      commandments: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Article',
      tableName: 'articles'
    }
  )
  return Article
}
