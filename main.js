class productManager {
constructor () {
    this.products = []
}

static id = 0

addproduct(title, description, price, thumbnail, code, stock) {

    for (let i = 0; i < this.products.length; i++) {

        if(this.products[i].code === code) {
            console.log ( `el codigo ${code} esta repetido`);
            break;
        }

    }

    const newProduct ={
        title, description, price, thumbnail, code, stock

    }

    if (!Object.values(newProduct).includes (undefined)) {

        productManager.id++
        this.products.push({...newProduct,
            id:productManager.id,    
        });
    } else {
        console.log ("todos los campos son requeridos")
    }

}

getProduct () {
    return this.products;
}

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }


getProductById (id) {
   !this.existe (id) ? console.log ("Not found") : console.log (this.existe (id));
    }

}
const productos = new productManager

console.log (productos.getProduct ());

productos.addproduct ('titulo1', 'description1',2000 , 'sin imagen', 'abc123', '20');
productos.addproduct ('titulo2', 'description2',2000 , 'sin imagen', 'abc124', );

console.log (productos.getProduct ());

productos.addproduct ('titulo3', 'description3',2000 , 'sin imagen', 'abc124', '21');

productos.getProductById (2);

productos.getProductById (3);