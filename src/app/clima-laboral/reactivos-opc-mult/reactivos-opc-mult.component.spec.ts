import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivosOpcMultComponent } from './reactivos-opc-mult.component';

describe('ReactivosOpcMultComponent', () => {
  let component: ReactivosOpcMultComponent;
  let fixture: ComponentFixture<ReactivosOpcMultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivosOpcMultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivosOpcMultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
