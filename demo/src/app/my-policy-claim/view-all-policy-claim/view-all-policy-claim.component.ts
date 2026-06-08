import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-policy-claim',
  templateUrl: './view-all-policy-claim.component.html',
})
export class ViewAllPolicyClaimComponent {

    showSidebar = true;
    username = 'bimaakawach';
    lastLogin = '2025-01-06 23:30:33';
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
      
      policyClaimForm: FormGroup;
      productTypes = ['Health', 'Motor', 'Life'];
      insuranceCompanies = ['Company A', 'Company B', 'Company C'];
      levels = ['Level 2', 'Level 3', 'Level 4', 'Level 5'];
      levelOptions = ['Option 1', 'Option 2', 'Option 3'];
      pospList = ['POSP 1', 'POSP 2', 'POSP 3'];
      records: any[] = []; // Replace with actual data
    
      constructor(private router: Router,private fb: FormBuilder) {
        this.policyClaimForm = this.fb.group({
          policyNumber: [''],
          fromDate: [''],
          toDate: [''],
          productType: [''],
          insuranceCompany: [''],
          level1: [''],
          level2: [''],
          level3: [''],
          level4: [''],
          posp: ['']
        });
      }
    
      onSubmit() {
        console.log('Form Data:', this.policyClaimForm.value);
        // Fetch data based on form inputs
      }
    
      onExport() {
        console.log('Exporting data...');
        // Implement export logic
      }
    
      onReset() {
        this.policyClaimForm.reset();
      }
}
