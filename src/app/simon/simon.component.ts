import { Component, OnInit } from '@angular/core';
import {NumberGeneratorService} from '../number-generator.service';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css'],
  providers: [NumberGeneratorService]
})
export class SimonComponent implements OnInit {
  randomNumbers: number[];
  pressedNumbers: number[];
  message: string;
  level: number;
  pressedId: number;

  constructor(private numberGeneratorService: NumberGeneratorService) { }

  ngOnInit() {
    this.level = 4;
  }

  start(): void {
    this.randomNumbers = [];
    this.randomNumbers = this.numberGeneratorService.generateNumbers(this.level);
    for (let i = 0; i < this.randomNumbers.length; i++) {
      // this.pressedId = this.randomNumbers[i];
      // setTimeout(1000);
      setTimeout(() => {
        this.pressedId = this.randomNumbers[i];
      }, 1000);
    }
  }



}
