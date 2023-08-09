import {promises as fs} from "fs"


export default class productManager {

    constructor () {
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addproduct = async (title, description, price, thumbnail, code, stock) => {

        productManager.id++

        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: productManager.id
        };

        this.products.push(newProduct)
 
      await fs.writeFile (this.patch,JSON.stringify (this.products));
    };


    readProducts = async () => {

        let verificar = await fs.readFile (this.patch,"utf-8")
        return JSON.parse (verificar)
    }

    getProducts = async () => {

        let respuesta = await this.readProducts ()

        return console.log (respuesta) 
    }

getProductsById = async (id) => {

    let respuesta2 = await this.readProducts ();
   if(!respuesta2.find (products => products.id === id)) {
    console.log ("Producto no encontrado")
   } else {
    console.log (respuesta2.find (products => products.id === id));
   }


};

deleteProductsById = async (id) => {
    let respuesta2 = await this.readProducts ();
    let productFilter = respuesta2.filter ((products) => products.id != id);
    await fs.writeFile (this.patch, JSON.stringify (productFilter));
    console.log ("producto Eliminado")
};

updateProducts = async ({id,...producto}) => {
await this.deleteProductsById (id);
let produtOld = await this.readProducts ();
let productModif = [{...producto, id }, ...produtOld];
    await fs.writeFile (this.patch,JSON.stringify (productModif));

};

}

// const productos = new productManager ();

// productos.getProducts();


// productos.addproduct ("titulo1", "description1",2000 , "sin imagen", "abc123", "20");
// productos.addproduct ("titulo2", "description2",2000 , "sin imagen", "abc124", "22");
// productos.addproduct ("titulo3", "description3",2000 , "sin imagen", "abc125", "23");
// productos.addproduct ("titulo4", "description3",2000 , "sin imagen", "abc126", "25");
// productos.addproduct ("titulo5", "description3",2000 , "sin imagen", "abc127", "26");
// productos.addproduct ("titulo6", "description3",2000 , "sin imagen", "abc128", "27");
// productos.addproduct ("titulo7", "description3",2000 , "sin imagen", "abc129", "28");
// productos.addproduct ("titulo8", "description3",2000 , "sin imagen", "abc121", "29");
// productos.addproduct ("titulo9", "description3",2000 , "sin imagen", "abc122", "21");
// productos.getProductsById (4);
// productos.deleteProductsById (3);
// productos.updateProducts ({
//     title: 'titulo1',
//     description: 'description1',
//     price: 8500,
//     thumbnail: 'sin imagen',
//     code: 'abc123',
//     stock: '20',
//     id: 3
// });