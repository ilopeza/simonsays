import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simon-unit',
  templateUrl: './simon-unit.component.html',
  styleUrls: ['./simon-unit.component.css']
})
export class SimonUnitComponent implements OnInit {
  @Input() id: number;
  pressed: boolean;
  classInactive: string;
  classPressed: string;

  constructor() {
  }

  ngOnInit() {
    this.pressed = false;
    switch (this.id) {
      case 1:
        this.classInactive = 'simon-red';
        this.classPressed = 'simon-red-pressed';
        break;
      case 2:
        this.classInactive = 'simon-green';
        this.classPressed = 'simon-green-pressed';
        break;
      case 3:
        this.classInactive = 'simon-blue';
        this.classPressed = 'simon-blue-pressed';
        break;
      case 4:
        this.classInactive = 'simon-yellow';
        this.classPressed = 'simon-yellow-pressed';
        break;
    }
  }

  press(): void {
    setTimeout(() => {
      this.pressed = true;
    }, 500);
    this.pressed = false;
  }

}
