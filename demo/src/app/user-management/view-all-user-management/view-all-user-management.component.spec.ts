import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUserManagementComponent } from './view-all-user-management.component';

describe('ViewAllUserManagementComponent', () => {
  let component: ViewAllUserManagementComponent;
  let fixture: ComponentFixture<ViewAllUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllUserManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
