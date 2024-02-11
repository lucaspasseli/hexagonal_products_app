import { IProduct } from './product';

interface IProductService {
  get(id: string): IProduct;
  create(name: string, price: number): IProduct;
  enable(product: IProduct): IProduct;
  disabled(product: IProduct): IProduct;
}

interface IProductReader {
  get(id: string): IProduct;
}

interface IProductWritter {
  save(product: IProduct): IProduct;
}

interface IProductPersistence extends IProductReader, IProductWritter {}

class ProductService implements IProductService {
  constructor(private persistence: IProductPersistence) {}

  get(id: string): IProduct {
    const product = this.persistence.get(id);

    if (!product) {
      throw new TypeError(`Could'nt get Product with id: ${id}`);
    }

    return product;
  }

  create(name: string, price: number): IProduct {
    return {} as IProduct;
  }

  enable(product: IProduct): IProduct {
    return {} as IProduct;
  }

  disabled(product: IProduct): IProduct {
    return {} as IProduct;
  }
}

export default ProductService;
