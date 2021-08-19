const { saveProduct, readFile, updateFile,deleteFile  } = require('./file/manageFile');
const { selectOption, inputCreateProduct, listProductSave,confirm } = require('./inquirer/inquirerProductos');
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
                console.log(resSave);                
                break;         
            case '2':
                const productsFile = await readFile();
                products.listProduct(productsFile);
            break;

            case '3':
                const productsUpdateFile = await readFile();
                if(productsUpdateFile.length > 0)  {
                    const selectProduct = await listProductSave(productsUpdateFile);   
                    const inputProduct = await inputCreateProduct(false,selectProduct);         
                    const resUpdate = await updateFile(inputProduct);
                    if(resUpdate) console.log('Producto modificado'.green);
                    else console.log('Error al modificar el producto '.red);
                }else{
                    console.log('No existen datos'.yellow);
                }
              
            break;

            case '4':
                const productsDeleteFile = await readFile();
                if(productsDeleteFile.length > 0)  {
                    const selectDeleteProduct = await listProductSave(productsDeleteFile);   
                    const confirmDelete = await confirm();
                    if(confirmDelete){
                        const resDelete = await deleteFile(selectDeleteProduct);
                        if(resDelete) console.log('Producto eliminado'.green);
                        else console.log('Error al modificar el producto '.red);
                    }
                }else{
                    console.log('No existen datos'.yellow);
                }
            break;
        }
    }while(option!=0)
   

}

main();

