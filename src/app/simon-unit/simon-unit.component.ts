import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simon-unit',
  templateUrl: './simon-unit.component.html',
  styleUrls: ['./simon-unit.component.css']
})
export class SimonUnitComponent implements OnInit {
  @Input() id: number;
  @Input() disabled: boolean;
  @Output() onPressed = new EventEmitter<number>();
  pressed: boolean;
  classInactive: string;

  constructor() {
  }

  ngOnInit() {
    this.pressed = false;
    switch (this.id) {
      case 0:
        this.classInactive = 'simon-red';
        break;
      case 1:
        this.classInactive = 'simon-green';
        break;
      case 2:
        this.classInactive = 'simon-blue';
        break;
      case 3:
        this.classInactive = 'simon-yellow';
        break;
    }
  }

  press() {
    if(this.disabled){
      alert('Los botones están deshabilitados. Empiece un juego nuevo presionando el Start.');
      return;
    }
    this.changeState(this.id);
    this.onPressed.emit(this.id);
  }

  changeState(pressedId: number): void {
    if (pressedId !== this.id) {
      return;
    }
    this.pressed = true;
    setTimeout(() => {
      this.pressed = false;
    }, 500);
  }

}
