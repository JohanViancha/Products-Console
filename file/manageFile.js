const fs = require('fs');


const path = './cellar/inventory.json';


const  saveProduct =  async(product)=>{
    let productsFile = [];
    try{
        productsFile = await readFile();  
        productsFile.push(product);
        fs.writeFileSync(path,JSON.stringify(productsFile));
        return 'Producto guardado';
    }catch(error){
        return error;
    }
    
}

const readFile = async ()=>{
    const products = JSON.parse(fs.readFileSync(path,{encoding:'utf-8'}));
    let listProducts = [];
    if(products){
        products.forEach(element => {
            listProducts.push(element);
        });
        return listProducts;
    }else{
        return new Array();
    }
}

module.exports = {saveProduct, readFile}