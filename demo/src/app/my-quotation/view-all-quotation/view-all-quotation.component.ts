import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import * as XLSX from 'xlsx'; // Import the xlsx library for Excel files
import * as pdfjsLib from 'pdfjs-dist'; // Import pdf.js for PDF files
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-all-quotation',
  templateUrl: './view-all-quotation.component.html',
})
export class ViewAllQuotationComponent implements OnInit{
keyword: any;
fromDate: any;
toDate: any;
insuranceCompany: any;
// Data and variables
quotations: any[] = [];
policyCount: number = 0;
posts: any[] = [];
searchCriteria = {
  keyword: '',
  policyIssueFrom: '',
  policyIssueTo: '',
  insuranceCompany: '',
  issueBy: 'All Users',
  level2: '',
  level3: '',
  level4: '',
  level5: '',
  posp: '',
  policySource: ''
};
showSidebar = true;
username = 'bimaakawach';
lastLogin = '2025-01-06 23:30:33';
insuranceCompanies: string[] = [];
policies: any[] = []; // Holds the policies fetched from API
netPremium = 0;
grossPremium = 0;
searchKeyword = '';
policyIssueFrom = '';
policyIssueTo = '';
selectedInsuranceCompany = '';
issueBy = 'All Users';
level2 = '';
level3 = '';
level4 = '';
level5 = '';
posp = '';
policySource = '';
policyOptions: string[] = ['Policy Issue', 'Policy Start'];
productTypes: string[] = ['Health', 'Life', 'Vehicle', 'Property'];

selectedPolicyOption: string = this.policyOptions[0];
selectedProductType: string = this.productTypes[0];
selectedIssueType: any;
viewDetails(_t181: any) {
  console.log('Viewing details:', _t181);
  alert('View details functionality coming soon!');
}
results: any;
onReset() {
  this.resetForm();
}
formData: any;
onSearch() {
  this.searchPolicies();
}
  
  searchPolicies() {
    console.log('Search criteria:', this.searchCriteria);
  }

 

  resetForm() {
    this.searchCriteria = {
      keyword: '',
      policyIssueFrom: '',
      policyIssueTo: '',
      insuranceCompany: '',
      issueBy: 'All Users',
      level2: '',
      level3: '',
      level4: '',
      level5: '',
      posp: '',
      policySource: ''
    };
    console.log('Form reset');
  }

  viewPolicy(policy: any) {
    console.log('Viewing policy:', policy);
    // Add logic to view policy details
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
   constructor(private router: Router,private apiService: ApiService,private http: HttpClient) {}
   ngOnInit(): void {
    this.loadQuotations();
  }

  loadQuotations() {
    this.apiService.getQuotations().subscribe(
      (data) => {
        if (data && Array.isArray(data)) {
          this.quotations = data;
          this.policyCount = data.length;
        } else {
          console.error('Unexpected data format:', data);
          this.quotations = [];
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // To handle file upload (optional feature you can integrate later)
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.processFile(file);
    }
  }

  processFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    this.apiService.importPolicies(formData).subscribe(
      (response) => {
        // Handle file processing based on type (Excel, PDF, etc.)
      },
      (error) => {
        console.error('Error importing policies:', error);
      }
    );
  }

   // Export and download logic for policies (Excel, PDF, etc.)
   exportPolicies() {
    this.apiService.excelPoliciesWithoutId().subscribe(
      (response) => {
        this.downloadFile(response);
      },
      (error) => {
        console.error('Error exporting policies:', error);
      }
    );
  }

  downloadFile(response: Blob) {
    const blob = new Blob([response], { type: response.type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'quotations_export.xlsx'; // Set file name as needed
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

  
  
