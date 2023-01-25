import Product from "../models/ProductModel.js"
 
    export const getProducts = async (req, res) => {
        try {
            const products = await Product.findAll({
                attributes:['id','title','price']
            });
            
            res.json(products);
            console.log("datalist", products);
        } catch (error) {
            res.json({ message: error.message });
        }  
    }
 
export const getProductById = async (req, res) => {
    try {
        const product = await Product.find({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}