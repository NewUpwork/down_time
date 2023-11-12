import { DataTypes } from "sequelize";
import db from "../config/Database.js";


const Users = db.define('users',{
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true 
    },

    username: {
        type: DataTypes.STRING,
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

    role_permissions:{
        type: DataTypes.TEXT,
    },
    account_status:{
        type: DataTypes.ENUM('active', 'suspended', 'closed'),
        allowNull: false,
        defaultValue: 'active'
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