import { ValidatorBuilder } from './../shared/validator';
import { Client } from './../models/client';
import { Contract } from './contract';
export class FormClientContract  implements Contract {
  errors: any[];
  constructor() {
    this.errors = [];
  }

  isValid(formData: Client): boolean {
    const validator = new ValidatorBuilder();
    validator.isNotEmpty(formData.name, 'O campo nome não pode ser vazio');
    validator.isNotEmpty(formData.email, 'O campo email não pode ser vazio');
    validator.isNotEmpty(formData.cep, 'O campo cep não pode ser vazio');

    this.errors = validator.errors;
    return validator.valid();
  }

}