import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonexportComponent } from './buttonexport.component';

describe('ButtonexportComponent', () => {
  let component: ButtonexportComponent;
  let fixture: ComponentFixture<ButtonexportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonexportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
