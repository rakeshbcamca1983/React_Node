import {Sequelize} from "sequelize";

const db = new Sequelize('user_data','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;