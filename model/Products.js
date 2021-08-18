class Products{

    listProduct(products=[]){
        if(products.length > 0){
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
        }else{
            console.log('No existe productos registrados');
        }
       
    }


    async updateProduct(product){
       // console.log(product);
    }
}

module.exports = Products