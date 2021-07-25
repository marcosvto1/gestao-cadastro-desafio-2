import { Contract } from './../contracts/contract';


export abstract class Model {
  public id = '';

  constructor(
    private readonly formContract: Contract
  ) {

  }

  protected saveLS(key: string) {
    const isValid = this.formContract.isValid(this);
    if (!isValid) return this.formContract.errors;
    const entites = this.findLS(key);
    entites.push({...this, id: Math.fround(Math.random() * 100000).toFixed()});
    localStorage.setItem(key, JSON.stringify(entites));
  }

  protected findLS(key: string) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  protected updateLS(key: string) {
    const entites = this.findLS(key);
    entites.forEach((el: any, key: number) => {
      if (el.id === this.id) {
        const obj = {...this};
        entites[key] = obj;
      }
    });

    localStorage.setItem(key, JSON.stringify(entites));
    return this;
  }

  protected removeLS(key: string) {
    let entites = this.findLS(key);
    entites = entites.filter((item: any) => item.id !== this.id);
    localStorage.setItem(key, JSON.stringify(entites));
    return true;
  }
}