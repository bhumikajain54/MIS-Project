import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPolicyClaimComponent } from './add-new-policy-claim.component';

describe('AddNewPolicyClaimComponent', () => {
  let component: AddNewPolicyClaimComponent;
  let fixture: ComponentFixture<AddNewPolicyClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewPolicyClaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewPolicyClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
