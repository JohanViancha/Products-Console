const { saveProduct, readFile, updateFile,  } = require('./file/manageFile');
const { selectOption, inputCreateProduct, listProductSave } = require('./inquirer/inquirerProductos');
const Product = require('./model/Product');
const Products = require('./model/Products');

require('colors');

let products = new Products();

const main = async ()=>{
    let option = '';
    do{
        option = await selectOption();
        switch(option){
            case '1':
                const product = await inputCreateProduct(true,new Product('','','','',''));
                const resSave = await saveProduct(product);
                console.log(resSave)
                
                break;         
            case '2':
                const productsFile = await readFile();
                products.listProduct(productsFile);
            break;

            case '3':
                const productsUpdateFile = await readFile();
                const selectProduct = await listProductSave(productsUpdateFile);   
                const inputProduct = await inputCreateProduct(false,selectProduct);         
                const resUpdate = await updateFile(inputProduct);
            break;
        }

    }while(option!==0)
   

}

main();

