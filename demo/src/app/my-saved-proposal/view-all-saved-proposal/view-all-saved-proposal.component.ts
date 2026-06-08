import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-saved-proposal',
  templateUrl: './view-all-saved-proposal.component.html',
})
export class ViewAllSavedProposalComponent implements OnInit{
agentpos: any;
quotations: any;
viewDetails(_t204: any) {
  console.log('Viewing details:', _t204);
  alert('View details coming soon!');
}
onSearch() {
  console.log('Search triggered with criteria:', this.searchCriteria);
  this.searchPolicies();
}
  showSidebar = true;
  username = 'bimaakawach';
  lastLogin = '2025-01-06 23:30:33';
  policySearchForm!: FormGroup;

  // Include fromDate and toDate in searchCriteria
  searchCriteria = {
    keyword: '',
    policyIssueFrom: '',
    policyIssueTo: '',
    productType: '',
    insuranceCompany: '',
    issueBy: 'All Users',
    level2: '',
    level3: '',
    level4: '',
    level5: '',
    posp: '',
    policySource: '',
    fromDate: '',  // Added
    toDate: ''     // Added
  };

  // Sample policy data
  policies: any[] = [];

  // Filtered policies after search
  filteredPolicies = [...this.policies];
records: any;
onReset: any;
pospList: any;
levelOptions: any;
levels: any;
users: any;
insuranceCompanies: any;
productTypes: any;


  // Search function to filter policies
  searchPolicies() {
    this.filteredPolicies = this.policies.filter(policy => {
      return (
        (this.searchCriteria.keyword ? policy.customerName.includes(this.searchCriteria.keyword) : true) &&
        (this.searchCriteria.fromDate && this.searchCriteria.toDate
          ? new Date(policy.createdOn) >= new Date(this.searchCriteria.fromDate) && new Date(policy.createdOn) <= new Date(this.searchCriteria.toDate)
          : true) &&
        (this.searchCriteria.productType ? policy.productType === this.searchCriteria.productType : true) &&
        (this.searchCriteria.insuranceCompany ? policy.insuranceCompany === this.searchCriteria.insuranceCompany : true) &&
        this.searchCriteria.issueBy ? policy.createdBy === this.searchCriteria.issueBy : true) 
        // &&
        // (this.searchCriteria.level2 ? policy.level2 === this.searchCriteria.level2 : true) &&
        // (this.searchCriteria.level3 ? policy.level3 === this.searchCriteria.level3 : true) &&
        // (this.searchCriteria.level4 ? policy.level4 === this.searchCriteria.level4 : true) &&
        // (this.searchCriteria.level5 ? policy.level5 === this.searchCriteria.level5 : true) &&
        // (this.searchCriteria.posp ? policy.posp === this.searchCriteria.posp : true));
      
    });
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
    constructor(private router: Router,private fb: FormBuilder,private apiService: ApiService,private http: HttpClient) {}
  ngOnInit(): void {
    this.policySearchForm = this.fb.group({
      keyword: [''],
      policyIssueFrom: [''],
      policyIssueTo: [''],
      productType: [''],
      insuranceCompany: [''],
      issueBy: ['All Users'],
      level2: [''],
      level3: [''],
      level4: [''],
      level5: [''],
      fromDate: [''],
      toDate: [''],
      posp: ['']  // âœ… Added 'posp' control
    });
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
