import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalStateComponent } from './federalState.component';

describe('StateComponent', () => {
  let component: FederalStateComponent;
  let fixture: ComponentFixture<FederalStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
