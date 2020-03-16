import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisGeneralComponent } from './analisis-general.component';

describe('AnalisisGeneralComponent', () => {
  let component: AnalisisGeneralComponent;
  let fixture: ComponentFixture<AnalisisGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
