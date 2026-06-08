import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRenewalsComponent } from './view-all-renewals.component';

describe('ViewAllRenewalsComponent', () => {
  let component: ViewAllRenewalsComponent;
  let fixture: ComponentFixture<ViewAllRenewalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllRenewalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllRenewalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
