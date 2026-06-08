import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-policy-claim',
  templateUrl: './add-new-policy-claim.component.html',
})
export class AddNewPolicyClaimComponent {
  claimForm: FormGroup;
  showSidebar: boolean = true; // Toggle sidebar visibility
  username = 'bimaakawach';
  constructor(private fb: FormBuilder, private router: Router) {
    this.claimForm = this.fb.group({
      policyNumber: ['', Validators.required],
      selectInsurer: ['', Validators.required],
      productType: ['', Validators.required],
      sumInsured: ['', Validators.required],
      policyStartDate: ['', Validators.required],
      policyEndDate: ['', Validators.required],
      claimantName: ['', Validators.required],
      claimLorryNumber: [''],
      typeOfClaim: ['', Validators.required],
      claimAccidentDate: ['', Validators.required],
      claimAmount: ['', Validators.required],
      surveyorAppointmentDate: [''],
      reportSubmittedDate: [''],
      surveyorName: [''],
      approvedSettledDate: ['', Validators.required],
      admissionIntimationDate: ['', Validators.required],
      dateOfDischarge: [''],
      approvedClaimAmount: ['', Validators.required],
      claimSubmittedOn: ['', Validators.required],
      remark: ['', Validators.required],
      level2: [''],
      level3: [''],
      level4: [''],
      level5: [''],
      posp: [''],
      status: ['', Validators.required],
      claimDocument: [null]
    });
  }

  onSubmit() {
    if (this.claimForm.valid) {
      console.log(this.claimForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

  redirectToProductICBranchViewAll() {
      this.router.navigateByUrl('/product-ic-branch/view-all-product-ic-branch')
    }
    redirectToMySavedProposalViewAll() {
      this.router.navigateByUrl('/my-saved-proposal/view-all-saved-proposal')
    }
    redirectToUserManagementPOSP() {
      this.router.navigateByUrl('/user-management/posp')
    }
    redirectToUserManagementViewAll() {
      this.router.navigateByUrl('/user-management/view-all-user-management')
    }
    redirectToUserManagementAddNew() {
      this.router.navigateByUrl('/user-management/add-new-user-management')
    }
    redirectToMyPolicyClaimViewAll() {
      this.router.navigateByUrl('/my-policy-claim/view-all-policy-claim')
    }
    redirectToMyPolicyClaimAddNew() {
      this.router.navigateByUrl('/my-policy-claim/add-new-policy-claim')
    }
    redirectToMyReportsViewAll() {
      this.router.navigateByUrl('/my-reports/posp-activation-report')
    }
    redirectToMyRenewalsViewAll() {
      this.router.navigateByUrl('/my-renewals/view-all-renewals')
    }
    redirectToMyQuotationViewAll() {
      this.router.navigateByUrl('/my-quotation/view-all-quotation')
    }
    redirectToMyPolicyViewAll() {
      this.router.navigateByUrl('/my-policy/view-all-policy')
    }
    redirectToAddOtherOffline() {
      this.router.navigateByUrl('/offline-data/add-other-offline')
    }
    redirectToAddHealth() {
      this.router.navigateByUrl('/offline-data/add-health')
    }
    redirectToAddNew() {
      this.router.navigateByUrl('/offline-data/add-new')
    }
    redirectToViewAll() {
      this.router.navigateByUrl('/offline-data/view-all')
    }
    addDocument() {
      console.log('Add more document logic can be implemented here.');
    }
  
    removeDocument() {
      console.log('Remove last document logic can be implemented here.');
    }
}
