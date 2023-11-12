import { Sequelize } from "sequelize";
 
const db = new Sequelize('down_time', 'root', 'Am-21820101', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;