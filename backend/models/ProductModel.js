import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('products',{
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
},{
    freezeTableName: true
});
 
export default Product;