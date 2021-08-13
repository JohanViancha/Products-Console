class Products{

    listProduct(products){

        console.log('/**** Lista de productos ****/');
        products.forEach(product => {
            console.log(`
Nombre: ${product.name}
Categoria: ${product.category} 
Cantidad: ${product.quality}
Precio: ${product.price}
`)
        console.log('-------------------------------');
        });
    }
}

module.exports = Products