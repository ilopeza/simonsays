import { Injectable } from '@angular/core';

@Injectable()
export class NumberGeneratorService {

  constructor() { }

  generateNumbers(cant: number, max: number): number[]{
    const numbers = [];
    for (let i = 0; i < cant; i++) {
      const num = Math.floor((Math.random() * max));
      numbers.push(num);
    }
    return numbers;
  }

}
