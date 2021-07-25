import { FormClientContract } from "../contracts/form-client.contract";
import { Model } from "./model";

export class Client extends Model {

  entity = 'clients';

  constructor(
    public name?: string,
    public email?: string,
    public cep?: string,
    public end?: string,
    public city?: string,
    public phone?: string,
  ) {
    super(new FormClientContract());
  }

  save() {
   return this.saveLS('clients');
  }

  update(){
    return this.updateLS('clients');
  }

  find() {
    return this.findLS('clients');
  }

  remove() {
    return this.removeLS('clients');
  }
}