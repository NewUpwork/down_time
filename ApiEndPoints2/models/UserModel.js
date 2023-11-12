import { DataTypes } from "sequelize";
import db from "../config/Database.js";


const Users = db.define('users',{
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false
    },

    username: {
        type: DataTypes.STRING,
        primaryKey: true, 
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull:false
    },
    first_name:{
        type: DataTypes.STRING, 
        allowNull: false,

    },
    last_name:{

        type: DataTypes.STRING, 
        allowNull: false,
    },
    profile_picture_url:{
        type: DataTypes.STRING
    },
    accout_status:{
        type: DataTypes.STRING
    },
    role_permissions:{
        type: DataTypes.JSON
    },

    refresh_token: {
        type: DataTypes.TEXT
    }
},{freezeTableName:true, timestamps: false });

//temp should magrate later to production env

(async () => {
    await db.sync();
})();

     
export default Users;