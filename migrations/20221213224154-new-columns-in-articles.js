'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('articles', 'domains', {
        type: Sequelize.STRING
      })
      await queryInterface.addColumn('articles', 'pantheon', {
        type: Sequelize.STRING
      })
      await queryInterface.addColumn('articles', 'symbol', {
        type: Sequelize.STRING
      })
      await queryInterface.addColumn('articles', 'symbolImage', {
        type: Sequelize.STRING
      })
      await queryInterface.addColumn('articles', 'depiction', {
        type: Sequelize.TEXT
      })
      await queryInterface.addColumn('articles', 'enemies', {
        type: Sequelize.TEXT
      })
      await queryInterface.addColumn('articles', 'commandments', {
        type: Sequelize.TEXT
      })
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('articles', 'domains')
      await queryInterface.removeColumn('articles', 'pantheon')
      await queryInterface.removeColumn('articles', 'symbol')
      await queryInterface.removeColumn('articles', 'symbolImage')
      await queryInterface.removeColumn('articles', 'depiction')
      await queryInterface.removeColumn('articles', 'enemies')
      await queryInterface.removeColumn('articles', 'commandments')
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
