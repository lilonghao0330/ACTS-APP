import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollselectComponent } from './rollselect.component';

describe('RollselectComponent', () => {
  let component: RollselectComponent;
  let fixture: ComponentFixture<RollselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
