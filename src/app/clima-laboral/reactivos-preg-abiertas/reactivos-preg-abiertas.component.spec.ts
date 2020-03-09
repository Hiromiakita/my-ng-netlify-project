import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivosPregAbiertasComponent } from './reactivos-preg-abiertas.component';

describe('ReactivosPregAbiertasComponent', () => {
  let component: ReactivosPregAbiertasComponent;
  let fixture: ComponentFixture<ReactivosPregAbiertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivosPregAbiertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivosPregAbiertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
