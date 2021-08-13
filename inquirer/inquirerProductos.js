const inquirer = require('inquirer');

const Product = require('../model/Product');

const selectOption = async()=>{

    //Se establece la estructura de la pregunta
    const question = {
        type:'list',
        name:'option',
        message:'Selecciona una opción',
        choices:[
            {
                value:"1",
                name:'Crear un producto'
            },
            {
                value:"2",
                name:'Listar productos'
            },
            {
                value:"3",
                name:"Modificar producto"
            },
            {
                value:"4",
                name:"Eliminar producto"
            },

            {
                value:"0",
                name:"Salir"
            }
        ]
    }

   const {option}  = await inquirer.prompt(question);
   return option;
}

const inputCreateProduct = async ()=>{
    console.clear();
    console.log('Ingrese la información del producto');
    const create = {
        type:'input',
        name:'create',
        message:'Ingrese los datos del producto'
    };
    const inputName = {
        type:'input',
        name:'inputName',
        message:'Ingrese el nombre'
    };

    const inputCategory = {
        type:'input',
        name:'inputCategory',
        message:'Ingrese la categoria'
    };

    const inputQuality = {
        type:'number',
        name:'inputQuality',
        message:'Ingrese la cantidad'
    };

    const inputPrice = {
        type:'number',
        name:'inputPrice',
        message:'Ingrese el precio'
    };
  
    const name = await inquirer.prompt(inputName);
    const category = await inquirer.prompt(inputCategory);
    const quality = await inquirer.prompt(inputQuality);
    const price = await inquirer.prompt(inputPrice);
  
    const product ={
        name:name.inputName,
        category:category.inputCategory,
        quality:quality.inputQuality,
        price:price.inputPrice
    }
    return product;
  
}


module.exports = {
    selectOption,
    inputCreateProduct
}