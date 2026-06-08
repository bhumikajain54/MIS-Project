import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthServiceTsService } from '../../auth.service.ts.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
})
export class UserLayoutComponent implements OnInit {
  username: string = 'bimaakawach';
  pageTitle: string = 'Dashboard Overview';

  constructor(private router: Router, public authService: AuthServiceTsService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updatePageTitle(event.urlAfterRedirects);
    });
  }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.firstname) {
      this.username = currentUser.firstname;
    }
    this.updatePageTitle(this.router.url);
  }

  updatePageTitle(url: string) {
    if (url.includes('dashboard')) this.pageTitle = 'Dashboard Overview';
    else if (url.includes('offline-data')) this.pageTitle = 'Offline Data';
    else if (url.includes('my-policy-claim')) this.pageTitle = 'Policy Claims';
    else if (url.includes('my-policy')) this.pageTitle = 'My Policy';
    else if (url.includes('my-quotation')) this.pageTitle = 'My Quotation';
    else if (url.includes('my-renewals')) this.pageTitle = 'My Renewals';
    else if (url.includes('my-reports')) this.pageTitle = 'My Reports';
    else if (url.includes('my-saved-proposal')) this.pageTitle = 'Saved Proposals';
    else if (url.includes('product-ic-branch')) this.pageTitle = 'Product-IC Branch';
    else if (url.includes('user-management')) this.pageTitle = 'User Management';
    else if (url.includes('change-password')) this.pageTitle = 'Change Password';
    else this.pageTitle = 'Dashboard Overview';
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

