import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSavedProposalComponent } from './view-all-saved-proposal.component';

describe('ViewAllSavedProposalComponent', () => {
  let component: ViewAllSavedProposalComponent;
  let fixture: ComponentFixture<ViewAllSavedProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllSavedProposalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllSavedProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
