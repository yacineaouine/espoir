import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspoirComponent } from './espoir.component';

describe('EspoirComponent', () => {
  let component: EspoirComponent;
  let fixture: ComponentFixture<EspoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
