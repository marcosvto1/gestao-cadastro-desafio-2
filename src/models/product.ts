import { FormProductContract } from './../contracts/form-product.contract';
import { Model } from "./model";

export class Product extends Model {
  constructor(
    public name?: string,
    public description?: string,
    public stock?: number,
    public imgUrl?: string,
    public price?: number
  ) {
    super(new FormProductContract());
  }

  save() {
    return this.saveLS('products');
  }

  update() {
    return this.updateLS('products');
  }

  find() {
    return this.findLS('products');
  }

  remove() {
    return this.removeLS('products');
  }
}