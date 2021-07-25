export class ValidatorBuilder {
  errors: any[] = [];

  isNotEmpty(value: any, msg: string): ValidatorBuilder {
    if (value === '' || value === undefined) {
      this.errors.push(msg);
    }
    return this;
  }

  maxLen(value: any, max: number, msg: string) {
    if (value.length > max) {
      this.errors.push(msg);
    }

    return this;
  }

  minLen(value: any, max: number, msg: string) {
    if (value.length < max) {
      this.errors.push(msg);
    }

    return this;
  }


  valid() {
    return this.errors.length === 0;
  }

}