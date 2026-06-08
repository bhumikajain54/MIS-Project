import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRenewalsComponent } from './my-renewals.component';

describe('MyRenewalsComponent', () => {
  let component: MyRenewalsComponent;
  let fixture: ComponentFixture<MyRenewalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyRenewalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRenewalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
