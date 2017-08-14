import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonUnitComponent } from './simon-unit.component';

describe('SimonUnitComponent', () => {
  let component: SimonUnitComponent;
  let fixture: ComponentFixture<SimonUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
