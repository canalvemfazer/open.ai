import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn("Users", "transferMessage"),
      queryInterface.removeColumn("Users", "greetingMessage"),
    ]);
  },

  down: (queryInterface: QueryInterface) => {
  }
};
