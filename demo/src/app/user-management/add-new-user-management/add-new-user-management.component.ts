import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user-management',
  templateUrl: './add-new-user-management.component.html',
})
export class AddNewUserManagementComponent {
  username = 'bimaakawach';
  lastLogin = new Date().toLocaleString();
  showSidebar = true;
  roles = ['Admin', 'Editor', 'Viewer'];
  sidebarItems = [
    {
      title: 'My Offline Data',
      subItems: [{ title: 'View All', action: () => {} }, { title: 'Add New', action: () => {} }],
    },
    { title: 'My Policy', subItems: [{ title: 'View All', action: () => {} }] },
    // Add other items here
  ];

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // Add file validation or upload logic here, if needed
    }
  }
  
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      // Add logic to handle form submission here
    } else {
      console.error('Form is invalid');
    }
  }
  
  onCancel(): void {
    console.log('Form submission cancelled');
    // Add logic to handle form reset or navigation
  }
  constructor(private router: Router) {}
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
      
}
