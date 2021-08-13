const { saveProduct, readFile } = require('./file/manageFile');
const { selectOption, inputCreateProduct } = require('./inquirer/inquirerProductos');
const Products = require('./model/Products');

require('colors');

let products = new Products();

const main = async ()=>{
    let option = '';
    do{
        option = await selectOption();
        switch(option){
            case '1':
                const product = await inputCreateProduct();
                const response = await saveProduct(`${product}`);
                console.log(response)
                
                break;
           
            case '2':
                const productsFile = await readFile();
                products.listProduct(productsFile);
            break;
        }

    }while(option!==0)
   

}

main();

