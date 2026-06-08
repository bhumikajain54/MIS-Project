import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-other-offline',
  templateUrl: './add-other-offline.component.html',
})
export class AddOtherOfflineComponent {
showSidebar: any;
username: any;
  policyNonMotorData: any[] = [];
  policyLifeData: any[] = [];
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
      ngOnInit() {
        this.getAllPolicyData(); // Call both APIs on component initialization
        this.getClientData();  // Fetch client data
      }
    
      getAllPolicyData() {
        forkJoin({
          health: this.apiService.getPolicyHealth(),
          nonMotor: this.apiService.getPolicyNonMotor(),
          life: this.apiService.getPolicyLife()
        }).subscribe({
          next: (results) => {
            this.policyNonMotorData = results.nonMotor;
            this.policyLifeData = results.life;
            console.log('Policy Non-Motor Data:', this.policyNonMotorData);
            console.log('Policy Life Data:', this.policyLifeData);
          },
          error: (error) => {
            console.error('Error fetching policy data:', error);
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
