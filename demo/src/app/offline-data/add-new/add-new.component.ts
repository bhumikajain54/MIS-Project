import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
})
export class AddNewComponent {
  showSidebar: any;
username: any;
clientData: any;
clients: any[] = [];

policyMotors: any[] = [];  // New property to store policy data
 
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
      ngOnInit(): void { 
        this.getClientData();  // Fetch client data
        this.getPolicyMotorsData();  // Fetch policy motors data
      }
      
      // Method to fetch client data
      getClientData() {
        this.apiService.getClients().subscribe({
          next: (data) => {
            if (data && Array.isArray(data)) {
              this.clients = data;
            } else {
              console.error('Unexpected data format for clients:', data);
              this.clients = [];
            }
            console.log('Client Data:', this.clients);
          },
          error: (error) => {
            console.error('Error fetching clients data:', error);
          }
        });
      }
      
      // Method to fetch policy motors data
      getPolicyMotorsData() {
        this.apiService.getPolicyMotors().subscribe({
          next: (data) => {
            if (data && Array.isArray(data)) {
              this.policyMotors = data;
            } else {
              console.error('Unexpected data format for policy motors:', data);
              this.policyMotors = [];
            }
            console.log('Policy Motors Data:', this.policyMotors);
          },
          error: (error) => {
            console.error('Error fetching policy motors data:', error);
          }
        });
      }      
}
