'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles', [
      {
        title: 'Map Article',
        content: 'This is a Map Article',
        image: 'map_article.png',
        type: 'map',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'God Article',
        content: 'This is a God Article',
        image: 'god_article.png',
        type: 'god',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lore Article',
        content: 'This is a Lore Article',
        image: 'lore_article.png',
        type: 'lore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Character Article',
        content: 'This is a Map Article',
        image: 'map_article.png',
        type: 'map',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {})
  }
}
