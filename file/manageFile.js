const fs = require('fs');
const { encode } = require('punycode');


const path = './cellar/inventory.json';


const saveProduct =  async(product)=>{
    try{
        const productsFile = await readFile();
        console.log(product);
        productsFile.push(product);    
        console.log(productsFile);
            /*
        console.log(productsFile);
        fs.writeFileSync(path,productsFile);*/
        return 'Producto guardado';
    }catch(error){
        return error;
    }
    
}

const readFile = async ()=>{
    const products = fs.readFileSync(path,{encoding:'utf8', flag:'r'});
    return JSON.parse(products);
}

module.exports = {saveProduct, readFile}