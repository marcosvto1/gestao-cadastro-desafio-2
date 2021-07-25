export interface Contract {
  errors: any[];
  isValid(data: any): boolean;
}