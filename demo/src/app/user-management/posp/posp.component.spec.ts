import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSPComponent } from './posp.component';

describe('POSPComponent', () => {
  let component: POSPComponent;
  let fixture: ComponentFixture<POSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [POSPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(POSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
