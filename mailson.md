enum Status {
    CREATE,
    UPDATE,
    DELETE
}

type Product = {
    name: string;
    status: Status
}

class ProductService {
    update(product: Product) {
        console.log('[UPDATE]', product);
    }

    delete(product: Product) {
        console.log('[UPDATE]', product)
    }

    create(product: Product) {
        console.log('[UPDATE]', product)
    }
}

const productService = new ProductService();

const operation = {
    [Status.CREATE]: (product: Product) => productService.create(product),
    [Status.UPDATE]: (product: Product) => productService.update(product),
    [Status.DELETE]: (product: Product) => productService.delete(product)
}

const product: Product = {
    name: 'test',
    status: Status.CREATE
}

operation[product.status](product);
