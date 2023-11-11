import {Sequelize} from 'Sequelize';
import db from '../config/dbconfig.js';

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    name: {
        type: DataType.STRING, 
        allowNull: false
    },

    email: {
        type: DataType.STRING, 
        allowNull: false,
        unique: true
    },
    password: {
        type: DataType.STRING,
        allowNull:false
    },
    refresh_token: {
        type: DataType.TEXT
    },{freezeTableName: true}
});
(async()=>{
    await db.sync();
})();

export default Users;