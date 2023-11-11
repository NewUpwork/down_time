import { Sequelize } from "sequelize";

const db = new Sequelize("DOWNTIME", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
