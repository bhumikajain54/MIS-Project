import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIcBranchComponent } from './product-ic-branch.component';

describe('ProductIcBranchComponent', () => {
  let component: ProductIcBranchComponent;
  let fixture: ComponentFixture<ProductIcBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductIcBranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductIcBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
