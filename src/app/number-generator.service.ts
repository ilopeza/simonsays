import { Injectable } from '@angular/core';

@Injectable()
export class NumberGeneratorService {

  constructor() { }

  generateNumbers(cant: number): number[]{
    const numbers = [];
    for (let i = 0; i < cant; i++) {
      const num = Math.floor((Math.random() * cant) + 1);
      numbers.push(num);
    }
    return numbers;
  }

}
