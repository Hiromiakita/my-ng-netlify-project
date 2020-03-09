import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoNavBarComponent } from './contact-info-nav-bar.component';

describe('ContactInfoNavBarComponent', () => {
  let component: ContactInfoNavBarComponent;
  let fixture: ComponentFixture<ContactInfoNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInfoNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
