const { saveProduct, readFile } = require('./file/manageFile');
const { selectOption, inputCreateProduct, listProductSave } = require('./inquirer/inquirerProductos');
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
                const resUpdate = await products.updateProduct(selectProduct);
                console.log(resUpdate);
            break;
        }

    }while(option!==0)
   

}

main();

