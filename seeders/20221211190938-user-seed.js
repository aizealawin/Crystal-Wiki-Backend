'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Kusal',
        password: '123',
        userType: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Katrina',
        password: '1234',
        userType: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ben',
        password: '12345',
        userType: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John',
        password: '123456',
        userType: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
