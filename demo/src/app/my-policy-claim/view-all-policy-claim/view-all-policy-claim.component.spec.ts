import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPolicyClaimComponent } from './view-all-policy-claim.component';

describe('ViewAllPolicyClaimComponent', () => {
  let component: ViewAllPolicyClaimComponent;
  let fixture: ComponentFixture<ViewAllPolicyClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllPolicyClaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllPolicyClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
