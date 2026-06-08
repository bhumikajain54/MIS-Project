import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSPActivationReportComponent } from './posp-activation-report.component';

describe('POSPActivationReportComponent', () => {
  let component: POSPActivationReportComponent;
  let fixture: ComponentFixture<POSPActivationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [POSPActivationReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(POSPActivationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
