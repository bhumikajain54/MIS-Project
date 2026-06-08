import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherOfflineComponent } from './add-other-offline.component';

describe('AddOtherOfflineComponent', () => {
  let component: AddOtherOfflineComponent;
  let fixture: ComponentFixture<AddOtherOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOtherOfflineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOtherOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
