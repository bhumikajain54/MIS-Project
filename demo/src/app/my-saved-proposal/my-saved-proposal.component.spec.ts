import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySavedProposalComponent } from './my-saved-proposal.component';

describe('MySavedProposalComponent', () => {
  let component: MySavedProposalComponent;
  let fixture: ComponentFixture<MySavedProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySavedProposalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySavedProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
