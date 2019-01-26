import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionGraphComponent } from './election-graph.component';

describe('ElectionGraphComponent', () => {
  let component: ElectionGraphComponent;
  let fixture: ComponentFixture<ElectionGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
