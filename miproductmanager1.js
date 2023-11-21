class ProductManager {
    products;
    constructor() {
        this.products = [];
    }
    static correlativoId = 0;
    addProduct(title, description, price, thumbnail, code, stock) {

        if (
        title == undefined ||
        description == undefined ||
        price == undefined ||
        thumbnail == undefined ||
        code == undefined ||
        stock == undefined
        ) {
        throw new Error("Todos los campos son obligatorios");
    }
    let codeExists = this.products.some((dato) => dato.code == code);
    
    if (codeExists) {
        throw new Error("El codigo ya existe por favor verifique");
    } else {
        ProductManager.correlativoId++;
        const newProduct = {
            id: ProductManager.correlativoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(newProduct);
    }
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        let product = this.products.find((dato) => dato.id === id);

        if (product !== undefined) {
        return product;
    } else {
        return "producto solicitado no existente";
    }
    }
}

myFirstPRoducts.addProduct(
    "Auriculares Hyperex",
    "Este un auricular",
    25000,
    "sin imagen",
    "Cod-1",
    10
    );

    myFirstPRoducts.addProduct(
    "Auriculares Hyperex",
    "Este un auricular",
    25000,
    "sin imagen",
    "Cod-1",
    10
    );

    myFirstPRoducts.addProduct(
    "Reloj Samsung Pro5",
    "Este es un Reloj Samsung",
    358000,
    "sin imagen",
    "Cod-sp5",
    15
    );
    console.log("desde getProducts", myFirstPRoducts.getProducts());
    console.log("desde getProducts", myFirstPRoducts.getProducts(1));

  //console.log("mi producto filtrado  por id", myFirstPRoducts.getProductById(2)); // ok
  //console.log("mi producto filtrado  por id", myFirstPRoducts.getProductById(5)); // error
