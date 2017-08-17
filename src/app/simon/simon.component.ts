import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {NumberGeneratorService} from '../number-generator.service';
import {SimonUnitComponent} from '../simon-unit/simon-unit.component';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css'],
  providers: [NumberGeneratorService]
})
export class SimonComponent implements OnInit {
  @ViewChildren(SimonUnitComponent)
  private cuadrados: QueryList<SimonUnitComponent>;
  disabled: boolean;
  randomNumbers: number[];
  squares: number[];
  message: string;
  level: number;
  index: number;

  constructor(private numberGeneratorService: NumberGeneratorService) { }

  ngOnInit() {
    this.index = 0;
    this.level = 4;
    this.squares = [];
    this.disabled = true;
    this.message = 'Para comenzar un nuevo juego presione el botón Start.';

    for (let i = 0; i < 4; i++){
      this.squares.push(i);
    }
  }

  start(): void {
    this.disabled = false;
    this.index = 0;
    this.randomNumbers = this.numberGeneratorService.generateNumbers(this.level,
      this.squares.length);
    this.message = 'Siga la secuencia de Simón';
    let sec = 1000;

    for (let i = 0; i < this.randomNumbers.length; i++) {
      setTimeout(() => {
        const pressedId = this.randomNumbers[i];
        this.cuadrados.forEach(alertInstance => alertInstance.changeState(pressedId));
        console.log(pressedId);
      }, sec);
      sec += 1000;
    }
  }

  onSquarePressed(pressedId: number) {
    if (this.index > this.randomNumbers.length - 1) {
      console.log('Error!');
      this.message = 'El index no puede ser mayor a la cantidad de números generados.';
      return;
    }
    const randomNumber = this.randomNumbers[this.index];
    if (pressedId !== randomNumber) {
      console.log('Error! No es el número que seguía. Se estaba esperando ' + randomNumber);
      this.message = 'Error! No es el número que seguía. Se estaba esperando ' + randomNumber;
      this.disabled = true;
      return;
    }
    if (this.index === this.randomNumbers.length - 1) {
      console.log('Ganó el juego');
      this.message = 'Felicitaciones! Ganó el juego!';
      this.disabled = true;
      this.level++;
      return;
    }
    this.index++;
  }
}
