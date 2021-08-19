require('colors');

class Products{

    listProduct(products=[]){
        if(products.length > 0){
            console.log('/**** Lista de productos ****/'.blue);
            products.forEach(product => {
                console.log(`
    Nombre: ${product.name}
    Categoria: ${product.category} 
    Cantidad: ${product.quality}
    Precio: ${product.price}
    `.blue)
            console.log('-------------------------------');
            });
        }else{
            console.log('No existe productos registrados'.yellow);
        }
       
    }
}

module.exports = Products