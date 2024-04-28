import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalformclientComponent } from './modalformclient.component';

describe('ModalformclientComponent', () => {
  let component: ModalformclientComponent;
  let fixture: ComponentFixture<ModalformclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalformclientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalformclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
