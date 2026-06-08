import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-view-all-product-ic-branch',
  templateUrl: './view-all-product-ic-branch.component.html',
})
export class ViewAllProductIcBranchComponent implements OnInit{
  username: string = 'bimaakawach';
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
    this.router.navigateByUrl('/my-report/posp-activation-report')
    console.log("hello");
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
    constructor(private router: Router, private apiService: ApiService) {}
    showSidebar = true; // Sidebar visibility toggle
    insuranceData: any[] = [];
    
    ngOnInit(): void {
      this.fetchInsuranceCompanies();
    }

    fetchInsuranceCompanies() {
      this.apiService.getInsuranceCompanies().subscribe({
        next: (data) => {
          this.insuranceData = data;
        },
        error: (error) => {
          console.error('Error fetching insurance companies:', error);
        }
      });
    }
// Add similar methods for other navigation options

viewDetails(insurance: any): void {
  alert(`Viewing details for: ${insurance.name}`);
}
}
