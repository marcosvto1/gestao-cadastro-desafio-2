import { Product } from './../models/product';
import { ValidatorBuilder } from '../shared/validator';
import { Contract } from './contract';
export class FormProductContract implements Contract {
  errors: any[];
  constructor() {
    this.errors = [];
  }

  isValid(formData: Product): boolean {
    const validator = new ValidatorBuilder();
    validator.isNotEmpty(formData.name, 'O campo nome não pode ser vazio');
    validator.isNotEmpty(formData.description, 'O campo description não pode ser vazio');
    validator.isNotEmpty(formData.stock, 'O campo stock não pode ser vazio');

    this.errors = validator.errors;
    return validator.valid();
  }

}