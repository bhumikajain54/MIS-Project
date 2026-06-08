import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductIcBranchComponent } from './view-all-product-ic-branch.component';

describe('ViewAllProductIcBranchComponent', () => {
  let component: ViewAllProductIcBranchComponent;
  let fixture: ComponentFixture<ViewAllProductIcBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllProductIcBranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllProductIcBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
