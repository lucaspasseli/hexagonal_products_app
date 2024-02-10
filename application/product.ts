interface IProduct {
  isValid(): boolean;
  enable(): void;
  disable(): void;
  getID(): string;
  getName(): string;
  getStatus(): string;
  getPrice(): number;

  id: string;
  name: string;
  price: number;
  status: ProductStatus;
}

export enum ProductStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

class Product implements IProduct {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public status: ProductStatus
  ) {}

  isValid() {
    if (this.status === undefined) {
      this.status = ProductStatus.DISABLED;
    }

    if (!this.id || !this.name || this.price < 0) {
      this.status = ProductStatus.DISABLED;
      throw new TypeError('Product has id, name or price invalid.');
    }

    return true;
  }

  enable() {
    if (this.price <= 0) {
      throw new TypeError(
        'Price must be greater than zero to enable the product.'
      );
    }

    this.status = ProductStatus.ENABLED;
  }

  disable() {
    if (this.price > 0) {
      throw new TypeError('Price must zero to disable the product.');
    }

    this.status = ProductStatus.DISABLED;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getStatus() {
    return this.status;
  }

  getPrice() {
    return this.price;
  }
}

export default Product;
