import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-user-management',
  templateUrl: './view-all-user-management.component.html',
})
export class ViewAllUserManagementComponent {
editUser(_t114: any) {
  console.log('Editing user:', _t114);
  alert('Edit User functionality is coming soon!');
}
users: any;
addUser() {
    this.router.navigateByUrl('/user-management/add-new-user-management');
}
resetFilters() {
  this.keyword = '';
  this.userRole = '';
  console.log('Filters reset');
}
exportUsers() {
  console.log('Exporting users...');
  alert('Exporting data...');
}
searchUsers() {
  console.log('Searching users with role:', this.userRole, 'and keyword:', this.keyword);
  alert('Search triggered');
}
showSidebar = true;
  username = 'bimaakawach';
  lastLogin = '2025-01-06 23:30:33';
userRole: any;
keyword: any;

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
    constructor(private router: Router) {}

}
