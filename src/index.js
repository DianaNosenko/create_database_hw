const {Category, Product} = require("./db/models");
// createCategory, getCategoryById, deleteCategory 
/*const createCategory = async data => {
    try{
        const newCategory = await Category.create(data);
        return newCategory;
    } catch(e){
        throw e;
    }
}
//const data = {name:'SMARTPHONE'};
//const data = {name:'TV'};
//const data = {name:'LAPTOP'};
//createCategory(data).then(console.log).catch(console.err);

const getCategoryById = async id => {
    try{
        const foundCategory = await Category.findByPk(id);
        return foundCategory;
    } catch(e){
        throw e;
    }
}
//getCategoryById(2).then(console.log).catch(console.err);


const deleteCategory = async id => {
    try{
        const foundCategory = await Category.destroy({
            where: {
                id: id
            }
        });
        return foundCategory;
    } catch(e){
        throw e;
    }
}

/* CRUD:  createProduct, getProductById, updateProduct, deletProduct */

const createProduct= async data => {
    try{
        const newProduct = await Product.create(data);
        return newProduct;
    } catch(e){
        throw e;
    }
}
const prod1 = {
    CategoryId: 1,
    name:'redmi 10',
    price: 150,
    
};
// ошибка при создании, скриншоты => src/Errors
//createProduct(prod1).then(console.log).catch(console.err);
