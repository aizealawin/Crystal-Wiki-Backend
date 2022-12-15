'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'name', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING
    })
    await queryInterface.removeColumn('users', 'email')
  }
}
