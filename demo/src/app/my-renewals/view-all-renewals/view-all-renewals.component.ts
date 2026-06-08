import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx'; // Import the xlsx library for Excel files
import * as pdfjsLib from 'pdfjs-dist'; // Import pdf.js for PDF files
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../api.service';
@Component({
  selector: 'app-view-all-renewals',
  templateUrl: './view-all-renewals.component.html',
})
export class ViewAllRenewalsComponent {
showSidebar = true;
  username = 'bimaakawach';
  lastLogin = '2025-01-06 23:30:33';
  renewalCriteria = {
    keyword: '',
    policyExpiryFromDate: '',
    policyExpiryToDate: '',
    productType: '',
    insuranceCompany: '',
    issueBy: 'All Users',
    level2: '',
    level3: '',
    level4: '',
    level5: '',
    posp: '',
    policySource: '',
    numberOfDays: '30'
  };
  renewalForm!: FormGroup<any>;
  posts: any[] = [];
  policyCount: number = 0;
  policyData: any;

  onSearchRenewal() {
    console.log('Renewal Search Criteria:', this.renewalCriteria);
    // Add logic to handle renewal search based on renewalCriteria
  }
  
  onResetRenewalForm() {
    this.renewalCriteria = {
      keyword: '',
      policyExpiryFromDate: '',
      policyExpiryToDate: '',
      productType: '',
      insuranceCompany: '',
      issueBy: 'All Users',
      level2: '',
      level3: '',
      level4: '',
      level5: '',
      posp: '',
      policySource: '',
      numberOfDays: '30'
    };
    console.log('Renewal form reset');
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
    onFileSelected(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          this.processFile(file);  // Call process file method once a file is selected
        }
      }
    
      // Method to process the selected file (Excel or PDF)
      processFile(file: File) {
        const formData = new FormData();
        formData.append('file', file);
    
        // Call API to upload and process the file
        this.apiService.importPolicies(formData).subscribe(
          (response) => {
            if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
              this.parseExcel(response);
            } else if (file.name.endsWith('.pdf')) {
              this.parsePDF(response);
            }
          },
          (error) => {
            console.error('Error importing policies:', error);
          }
        );
      }
    
      // Method to parse Excel file
      parseExcel(file: any) {
        const workbook = XLSX.read(file, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        this.updatePolicyData(jsonData);
      }
    
      // Method to parse PDF file
      parsePDF(file: any) {
        const loadingTask = pdfjsLib.getDocument(file);
        loadingTask.promise.then((pdf) => {
          const numPages = pdf.numPages;
          const pagesPromises = [];
    
          for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            pagesPromises.push(
              pdf.getPage(pageNum).then((page) => {
                return page.getTextContent();
              })
            );
          }
    
          Promise.all(pagesPromises).then((texts) => {
            const extractedData = this.extractDataFromPDF(texts);
            this.updatePolicyData(extractedData);
          });
        });
      }
    
      // Method to extract data from PDF
      extractDataFromPDF(texts: any[]) {
        const data: {
          policyNumber: string; // Example extracted value
          clientName: string; insuranceCompanies: string; policyStartDate: Date; policyExpiryDate: Date;
        }[] = [];
        texts.forEach((textContent) => {
          // Example data extraction from PDF content
          const extractedRow = {
            policyNumber: 'Sample Policy Number', // Example extracted value
            clientName: 'Sample Client Name',
            insuranceCompanies: 'Sample Insurance Company',
            policyStartDate: new Date(),
            policyExpiryDate: new Date(),
          };
          data.push(extractedRow);
        });
        return data;
      }
    
      ExcelUpdates() {
        this.http.get('http://localhost:8081/api/v1/excelupdates').subscribe(
          (response) => {
            console.log('Excel Updates Response:', response);
          },
          (error) => {
            console.error('Error updating Excel:', error);
          }
        );
      }
    
      ExportPolicies() {
        this.apiService.excelPoliciesWithoutId().subscribe(
          (response) => {
            console.log('Export Policies Response:', response);
            // If you want to trigger downloading the response as a file (e.g., PDF or Excel)
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
        a.download = 'policies_export'; // You can set a dynamic file name based on the response, if needed
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
      
      // Method to update policy data
      updatePolicyData(data: any[]) {
        this.posts = data;
        this.policyCount = data.length;
      }
    
      // Method to view policy details
      viewPolicyDetails(policy: any) {
        // Handle viewing policy details (e.g., show a modal with more information)
        console.log(policy);
      }
}
