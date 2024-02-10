import Product, { ProductStatus } from './product';

describe('Product', () => {
  it('should enable Product', () => {
    const product = new Product('1', 'Test', 10, ProductStatus.DISABLED);

    product.enable();

    expect(product.status).toBe(ProductStatus.ENABLED);
  });

  it('should throw an error when enable a Product with price equals 0', () => {
    const product = new Product('1', 'Test', 0, ProductStatus.DISABLED);

    expect(() => product.enable()).toThrow(
      TypeError('Price must be greater than zero to enable the product.')
    );
    expect(product.status).toBe(ProductStatus.DISABLED);
  });

  it('should disable Product', () => {
    const product = new Product('1', 'Test', 0, ProductStatus.ENABLED);

    product.disable();

    expect(product.status).toBe(ProductStatus.DISABLED);
  });

  it('should throw an error when disable a Product with price greater 0', () => {
    const product = new Product('1', 'Test', 10, ProductStatus.ENABLED);

    expect(() => product.disable()).toThrow(
      TypeError('Price must zero to disable the product.')
    );
    expect(product.status).toBe(ProductStatus.ENABLED);
  });

  it('should valid Product', () => {
    const product = new Product('1', 'Test', 10, ProductStatus.ENABLED);

    const isProductValid = product.isValid();

    expect(isProductValid).toEqual(true);
    expect(product.status).toBe(ProductStatus.ENABLED);
  });

  it('should throw and error due to an invalid Product', () => {
    const productWithoutId = new Product(
      '',
      'Test',
      10,
      ProductStatus.DISABLED
    );

    expect(() => productWithoutId.isValid()).toThrow(
      TypeError('Product has id, name or price invalid.')
    );
    expect(productWithoutId.status).toBe(ProductStatus.DISABLED);

    const productWithoutName = new Product('1', '', 10, ProductStatus.DISABLED);

    expect(() => productWithoutName.isValid()).toThrow(
      TypeError('Product has id, name or price invalid.')
    );
    expect(productWithoutName.status).toBe(ProductStatus.DISABLED);

    const productWithoutPrice = new Product(
      '1',
      'Test',
      -2,
      ProductStatus.DISABLED
    );

    expect(() => productWithoutPrice.isValid()).toThrow(
      TypeError('Product has id, name or price invalid.')
    );
    expect(productWithoutPrice.status).toBe(ProductStatus.DISABLED);
  });

  it('should disable an invalid Product', () => {
    const product = new Product('', 'Test', 10, ProductStatus.ENABLED);

    expect(() => product.isValid()).toThrow(
      TypeError('Product has id, name or price invalid.')
    );
    expect(product.status).toBe(ProductStatus.DISABLED);
  });
});
