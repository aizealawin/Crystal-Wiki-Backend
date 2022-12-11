'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInser('comments', [
      {
        userId: 1,
        articleId: 1,
        content: 'This is a comment by Kusal on the Map Article',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 2,
        content: 'This is a comment by Katrina on the God Article',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 3,
        content: 'This is a comment by Ben on the Lore Article',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 1,
        content: 'This is a comment by John on the Map Article',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 4,
        content: 'This is a comment by Katrina on the Character Article',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
}
