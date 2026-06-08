import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-health',
  templateUrl: './add-health.component.html',
})
export class AddHealthComponent {
showSidebar: any;
username: any;
policyHealthData: any[] = [];
clientData: any[] = [];
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
    constructor(private router: Router,private apiService: ApiService,private http: HttpClient) {}
    // ngOnInit() {
    //   this.getPolicyHealthData(); // Call the method on component initialization
    // }
  
    // getPolicyHealthData() {
    //   this.apiService.getPolicyHealth().subscribe({
    //     next: (data) => {
    //       this.getPolicyHealthData = data;
    //       console.log('Policy Health Data:', this.policyHealthData);
    //     },
    //     error: (error) => {
    //       console.error('Error fetching policy health data:', error);
    //     }
    //   });
    // }
    ngOnInit() {
      this.getClientData();  // Fetch client data
      this.getPolicyHealthData();  // Fetch health policy data
    }
  
    // Method to fetch policy health data
    getPolicyHealthData() {
      this.apiService.getPolicyHealth().subscribe({
        next: (data) => {
          this.policyHealthData = data;
          console.log('Policy Health Data:', this.policyHealthData);
        },
        error: (error) => {
          console.error('Error fetching policy health data:', error);
        }
      });
    }
  
    // Method to fetch client data
    getClientData() {
      this.apiService.getClients().subscribe({
        next: (data) => {
          this.clientData = data;  // Store the fetched client data
          console.log('Client Data:', this.clientData);
        },
        error: (error) => {
          console.error('Error fetching client data:', error);
        }
      });
    }
}
