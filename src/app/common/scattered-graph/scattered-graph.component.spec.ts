import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatteredGraphComponent } from './scattered-graph.component';

describe('ScatteredGraphComponent', () => {
  let component: ScatteredGraphComponent;
  let fixture: ComponentFixture<ScatteredGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatteredGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatteredGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
