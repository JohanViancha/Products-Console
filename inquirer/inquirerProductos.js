const inquirer = require('inquirer');
const { v4: uuidv4 } = require('uuid');


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

const inputCreateProduct = async (newAction, productSelect = [])=>{
    console.clear();

    console.log(productSelect);
    console.log('Ingrese la información del producto');
    const create = {
        type:'input',
        name:'create',
        message:'Ingrese los datos del producto'
    };
    const inputName = {
        type:'input',
        name:'inputName',
        message:'Ingrese el nombre',
        default: productSelect.name
    };

    const inputCategory = {
        type:'input',
        name:'inputCategory',
        message:'Ingrese la categoria',
        default:productSelect.category
    };

    const inputQuality = {
        type:'number',
        name:'inputQuality',
        message:'Ingrese la cantidad',
        default:productSelect.quality
    };

    const inputPrice = {
        type:'number',
        name:'inputPrice',
        message:'Ingrese el precio',
        default:productSelect.price
    };
  
    const name = await inquirer.prompt(inputName);
    const category = await inquirer.prompt(inputCategory);
    const quality = await inquirer.prompt(inputQuality);
    const price = await inquirer.prompt(inputPrice);
  
    let id = '';
    if(newAction){
        id = uuidv4();
    }else{
        id = productSelect.id;
       
    }
    const product ={
        id: id,
        name:name.inputName,
        category:category.inputCategory,
        quality:quality.inputQuality,
        price:price.inputPrice
    }
    return product;
  
}


const listProductSave = async (products = [])=>{
    const listProduct = products.map((product)=>{
        return {
            value: product.id,
            name:product.name
        };
    })

    console.log(listProduct);
    const questionSave = {
        type:'list',
        name:'option',
        message:'Selecciona una opción',
        choices:listProduct
    }

    const {option} = await inquirer.prompt(questionSave);
    const productSelect = await products.find(({id}) => id === option);   
    return productSelect;
}


module.exports = {
    selectOption,
    inputCreateProduct,
    listProductSave
}