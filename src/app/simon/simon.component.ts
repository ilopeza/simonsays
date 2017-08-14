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
  }

  start(): void {
    this.randomNumbers = this.numberGeneratorService.generateNumbers(this.level);
    this.pressedId = window.setInterval(() => {
    }, 1000);
  }



}
