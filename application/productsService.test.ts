import Product, { ProductStatus } from './product';
import ProductService from './productsService';

const productTest1 = new Product('1', 'Test1', 10, ProductStatus.ENABLED);

const productTest2 = new Product('2', 'Test2', 0, ProductStatus.DISABLED);

const MOCKED_PERSISTENCE_DATA = [productTest1, productTest2];

const PERSISTENCE_MOCK = {
  get: (id: string) => {
    const ProductIndex = MOCKED_PERSISTENCE_DATA.findIndex(
      (product) => product.id === id
    );

    return MOCKED_PERSISTENCE_DATA[ProductIndex];
  },
  save: (product: Product) => {
    MOCKED_PERSISTENCE_DATA.push(product);
    return product;
  },
};

describe('Products Service', () => {
  it('Should get a Product by Id', () => {
    const productService = new ProductService(PERSISTENCE_MOCK);

    const product = productService.get('1');

    expect(product).toEqual(productTest1);
  });

  it('Should throw an error when gets a Product with wrong ID', () => {
    const productService = new ProductService(PERSISTENCE_MOCK);

    const wrongId = '0';

    expect(() => productService.get(wrongId)).toThrow(
      TypeError(`Could'nt get Product with id: ${wrongId}`)
    );
  });
});
