import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceTsService } from '../auth.service.ts.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  username: string = 'bimaakawach';

  // Metrics
  totalPolicies: number = 0;
  totalUsers: number = 0;
  totalClients: number = 0;
  totalQuotations: number = 0;
  activePosp: number = 0;

  constructor(
    private router: Router, 
    public authService: AuthServiceTsService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.firstname) {
      this.username = currentUser.firstname;
    }
    this.loadMetrics();
  }

  loadMetrics() {
    if (this.hasRole(['ADMIN', 'VP', 'AVP', 'SRR', 'CHECKER'])) {
      this.apiService.getUsers().subscribe({ next: (data: any) => this.totalUsers = data?.length || 0, error: () => console.log('Error loading users') });
      this.apiService.getPolicies().subscribe({ next: (data: any) => this.totalPolicies = data?.length || 0, error: () => console.log('Error loading policies') });
      this.apiService.getClients().subscribe({ next: (data: any) => this.totalClients = data?.length || 0, error: () => console.log('Error loading clients') });
      this.apiService.getAgentPos().subscribe({ next: (data: any) => this.activePosp = data?.length || 0, error: () => console.log('Error loading posp') });
    }
    
    if (this.hasRole(['USER'])) {
      this.apiService.getPolicies().subscribe({ next: (data: any) => this.totalPolicies = data?.length || 0, error: () => console.log('Error loading policies') });
      this.apiService.getQuotations().subscribe({ next: (data: any) => this.totalQuotations = data?.length || 0, error: () => console.log('Error loading quotations') });
    }

    if (this.hasRole(['ACCOUNT_MANAGER', 'MAKE_ENTRY'])) {
      this.apiService.getClients().subscribe({ next: (data: any) => this.totalClients = data?.length || 0, error: () => console.log('Error loading clients') });
      this.apiService.getQuotations().subscribe({ next: (data: any) => this.totalQuotations = data?.length || 0, error: () => console.log('Error loading quotations') });
    }
  }

  hasRole(roles: string[]): boolean {
    return this.authService.hasRole(roles);
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
}
