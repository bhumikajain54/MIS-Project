import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPolicyClaimComponent } from './my-policy-claim.component';

describe('MyPolicyClaimComponent', () => {
  let component: MyPolicyClaimComponent;
  let fixture: ComponentFixture<MyPolicyClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPolicyClaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPolicyClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
