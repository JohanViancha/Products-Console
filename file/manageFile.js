const fs = require('fs');


const path = './cellar/inventory.json';


const  saveProduct =  async(product)=>{
    try{
        productsFile = await readFile();
        console.log()  
        productsFile.push(product);
        fs.writeFileSync(path,JSON.stringify(productsFile));
        return 'Producto guardado';
    }catch(error){
        return error;
    }
    
}

const readFile = async ()=>{
    const data = fs.readFileSync(path,{encoding:'utf-8'});
    console.log(data.length);
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
    const data = JSON.parse(fs.readFileSync(path,{encoding:'utf-8'}));
    console.log(data);
    const productFile = data.map(element=>{
        if(product.id == element.id){
            console.log('Entro');
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

}

module.exports = {saveProduct, readFile,updateFile}