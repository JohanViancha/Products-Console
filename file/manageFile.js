const fs = require('fs');
require('colors');

const path = './cellar/inventory.json';


const  saveProduct =  async(product)=>{
    try{
        productsFile = await readFile();
        productsFile.push(product);
        fs.writeFileSync(path,JSON.stringify(productsFile));
        return 'Producto guardado'.green;
    }catch(error){
        return error;
    }
    
}

const readFile = async ()=>{
    const data = fs.readFileSync(path,{encoding:'utf-8'});
    if(data.length>0){
        const products = JSON.parse(data);
        let listProducts = [];
        if(products){
            products.forEach(element => {
                listProducts.push(element);
            });
            return listProducts;
        }
    }
    return new Array();
}

const updateFile = async(product)=>{
    try{
        const data = JSON.parse(fs.readFileSync(path,{encoding:'utf-8'}));
        const productFile = data.map(element=>{
            if(product.id == element.id){
                return {
                    id:product.id,
                    name:product.name,
                    category:product.category,
                    quality:product.quality,
                    price:product.price
        
                }
            }else{
                return element;
            }
            
        
        });
        await fs.writeFileSync(path,JSON.stringify(''));
        fs.writeFileSync(path,JSON.stringify(productFile));

        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}


    const deleteFile = async(product)=>{
        try{
            const data = JSON.parse(fs.readFileSync(path,{encoding:'utf-8'}));
            const indexDelete = data.findIndex(element=>product.id === element.id);
            data.splice(indexDelete, 1);
            await fs.writeFileSync(path,JSON.stringify(''));
            fs.writeFileSync(path,JSON.stringify(data));
            return true;
        }catch(error){
            console.log(error);
            return false;
        }

}

module.exports = {saveProduct, readFile,updateFile,deleteFile}