'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('comments', 'userId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'articles',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('comments', 'userId', {
      type: Sequelize.INTEGER
    })
  }
}
