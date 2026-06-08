import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserManagementComponent } from './add-new-user-management.component';

describe('AddNewUserManagementComponent', () => {
  let component: AddNewUserManagementComponent;
  let fixture: ComponentFixture<AddNewUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewUserManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
