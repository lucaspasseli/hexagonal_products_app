interface IProduct {
  isValid(): boolean;
  enable(): void;
  disable(): void;
  getID(): string;
  getName(): string;
  getStatus(): string;
  getPrice(): number;
}

enum ProductStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

interface ProductConstructor {
  id: string;
  name: string;
  price: number;
  status: ProductStatus;
}

class Product implements IProduct {
  constructor(private product: ProductConstructor) {}

  isValid() {
    return true;
  }

  enable() {
    if (this.product.price > 0) {
      this.product.status = ProductStatus.ENABLED;
    }

    //should handle error
  }

  disable() {
    this.product.status = ProductStatus.DISABLED;
  }

  getID() {
    return this.product.id;
  }

  getName() {
    return this.product.name;
  }

  getStatus() {
    return this.product.status;
  }

  getPrice() {
    return this.product.price;
  }
}
