import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  login(value: any) {
    console.log('Login functionality triggered:', value);
    alert('Login not fully implemented in API service');
  }

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { 
    }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No auth token found');
    }
    
    return new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    });
}

  
  // POST APIs (without ID)
  authenticate(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/authenticate`, data,{ headers: this.getAuthHeaders() });
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/register`, data, { headers: this.getAuthHeaders() });
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/forgot-password`, data);
  }

  resetPasswordWithOtp(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/reset-password-otp`, data);
  }

  createClient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}client`, data, { headers: this.getAuthHeaders() });
}



  createAccountManager(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}account-managers`, data,{ headers: this.getAuthHeaders() });
  }

  createAgentPos(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}agentpos`, data, { headers: this.getAuthHeaders() });
  }

  createAttachment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}attachments`, data, { headers: this.getAuthHeaders() });
  }

  createInsuranceCompany(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}insurance-companies`, data, { headers: this.getAuthHeaders() });
  }

  createInsurer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}insurers`, data, { headers: this.getAuthHeaders() });
  }

  createPolicyHealth(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}policyHealth`, data, { headers: this.getAuthHeaders() });
  }

  createPolicy(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}policies`, data, { headers: this.getAuthHeaders() });
  }

  createPolicyNonMotor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}policyNonMotor`, data, { headers: this.getAuthHeaders() });
  }

  createPolicyLife(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}policy-life`, data, { headers: this.getAuthHeaders() });
  }

  createPolicyMotors(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}policy-motors`, data, { headers: this.getAuthHeaders() });
  }

  createPremium(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}premiums`, data, { headers: this.getAuthHeaders() });
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users`, data, { headers: this.getAuthHeaders() });
  }
  createQuotation(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}quotations`, data, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => {
        console.error('Error creating quotation:', error);
        return throwError(() => new Error('Failed to create quotation. Please try again.'));
      })
    );
  }

  sendPolicyEmail(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}send-policy-email`, data, { headers: this.getAuthHeaders() });
  }

  importPolicies(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}import-policies`, data, { headers: this.getAuthHeaders() });
  }

  ocrData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}ocrdata`, data, { headers: this.getAuthHeaders() });
  }

  excelUpdates(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}excelupdates`, data, { headers: this.getAuthHeaders() });
  }

  // GET APIs (without ID)
  getClients(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}clients`, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
          console.error('Error in API call:', error);
          return throwError(() => new Error('API error occurred'));
      })
  );
  }
  // Example of using it in your API call
//   getClients(): Observable<any[]> { 

//     return this.http.get<any[]>(`${this.baseUrl}client`, { headers: this.getAuthHeaders() }).pipe(
//         catchError((error) => {
//             console.error('Error fetching clients:', error.message);
//             return throwError(() => new Error('Failed to fetch clients. Please try again later.'));
//         })
//     );
// }

  
  getAccountManagers(): Observable<any> {
    return this.http.get(`${this.baseUrl}account-managers`, { headers: this.getAuthHeaders() });
  }

  getAgentPos(): Observable<any> {
    return this.http.get(`${this.baseUrl}agentpos`, { headers: this.getAuthHeaders() });
  }

  getAttachments(): Observable<any> {
    return this.http.get(`${this.baseUrl}attachments`, { headers: this.getAuthHeaders() });
  }

  getInsuranceCompanies(): Observable<any> {
    return this.http.get(`${this.baseUrl}insurance-companies`, { headers: this.getAuthHeaders() });
  }

  getInsurers(): Observable<any> {
    return this.http.get(`${this.baseUrl}insurers`, { headers: this.getAuthHeaders() });
  }

  getPolicyHealth(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}policyHealth`, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
          console.error('Error in API call:', error);
          return throwError(() => new Error('API error occurred'));
      })
  );
  }

  getPolicies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}policies`, { headers: this.getAuthHeaders() }).pipe(
        catchError((error) => {
            console.error('Error in API call:', error);
            return throwError(() => new Error('API error occurred'));
        })
    );
}


  getPolicyNonMotor(): Observable<any> {
    // return this.http.get(`${this.baseUrl}policyNonMotor`, { headers: this.getAuthHeaders() });
    return this.http.get<any[]>(`${this.baseUrl}policyNonMotor`, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
          console.error('Error in API call:', error);
          return throwError(() => new Error('API error occurred'));
      })
  );
  }

  getPolicyLife(): Observable<any> {
    // return this.http.get(`${this.baseUrl}policy-life`, { headers: this.getAuthHeaders() });
    return this.http.get<any[]>(`${this.baseUrl}policy-life`, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
          console.error('Error in API call:', error);
          return throwError(() => new Error('API error occurred'));
      })
  );
  }

  getPolicyMotors(): Observable<any> {
    // return this.http.get(`${this.baseUrl}policy-motors`, { headers: this.getAuthHeaders() });
    return this.http.get<any[]>(`${this.baseUrl}policy-motors`, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
          console.error('Error in API call:', error);
          return throwError(() => new Error('API error occurred'));
      })
  );
  }
  getQuotations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}quotations`, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
          console.error('Error in API call:', error);
          return throwError(() => new Error('API error occurred'));
      })
  );
  }
  getPremiums(): Observable<any> {
    return this.http.get(`${this.baseUrl}premiums`, { headers: this.getAuthHeaders() });
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}users`, { headers: this.getAuthHeaders() });
  }

  sendPolicyEmailWithoutId(): Observable<any> {
    return this.http.get(`${this.baseUrl}send-policy-email`, { headers: this.getAuthHeaders() });
  }


  ocrDataWithoutId(): Observable<any> {
    return this.http.get(`${this.baseUrl}ocrdata`, { headers: this.getAuthHeaders() });
  }

  excelUpdatesWithoutId(): Observable<any> {
    return this.http.get(`${this.baseUrl}excelupdates`, { headers: this.getAuthHeaders() });
  }
  excelPoliciesWithoutId(): Observable<any> {
    return this.http.get(`${this.baseUrl}export-policies`, { headers: this.getAuthHeaders() });
  }

  // GET and PUT APIs (with ID)
  getClientById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}client/${id}`, { headers: this.getAuthHeaders() });
  }
  
   getQuotationById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}quotations/${id}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => {
        console.error(`Error fetching quotation with ID ${id}:`, error);
        return throwError(() => new Error('Failed to fetch quotation.'));
      })
    );
  }
  getAccountManagerById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}account-managers/${id}`, { headers: this.getAuthHeaders() });
  }

  getAgentPosById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}agentpos/${id}`, { headers: this.getAuthHeaders() });
  }

  getAttachmentById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}attachments/${id}`, { headers: this.getAuthHeaders() });
  }

  getInsuranceCompanyById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}insurance-companies/${id}`, { headers: this.getAuthHeaders() });
  }

  getInsurerById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}insurers/${id}`, { headers: this.getAuthHeaders() });
  }

  getPolicyHealthById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}policyHealth/${id}`, { headers: this.getAuthHeaders() });
  }

  getPolicyById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}policies/${id}`, { headers: this.getAuthHeaders() });
  }
 
  getPolicyNonMotorById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}policyNonMotor/${id}`, { headers: this.getAuthHeaders() });
  }

  getPolicyLifeById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}policy-life/${id}`, { headers: this.getAuthHeaders() });
  }

  getPolicyMotorsById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}policy-motors/${id}`, { headers: this.getAuthHeaders() });
  }

  getPremiumById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}premiums/${id}`, { headers: this.getAuthHeaders() });
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${id}`, { headers: this.getAuthHeaders() });
  }

  sendPolicyEmailById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}send-policy-email/${id}`, { headers: this.getAuthHeaders() });
  }


  ocrDataById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}ocrdata/${id}`, { headers: this.getAuthHeaders() });
  }

  excelUpdatesById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}excelupdates/${id}`, { headers: this.getAuthHeaders() });
  }
  excelPoliciesById(): Observable<any> {
    return this.http.get(`${this.baseUrl}export-policies`, { headers: this.getAuthHeaders() });
  }
  // PUT APIs (with ID)
  updateClient(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}client/${id}`, data, { headers: this.getAuthHeaders() });
  }
  
  updateAccountManager(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}account-managers/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateAgentPos(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}agentpos/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateAttachment(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}attachments/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateInsuranceCompany(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}insurance-companies/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateInsurer(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}insurers/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updatePolicyHealth(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}policyHealth/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updatePolicy(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}policies/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updatePolicyNonMotor(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}policyNonMotor/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updatePolicyLife(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}policy-life/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updatePolicyMotors(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}policy-motors/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updatePremium(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}premiums/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}users/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateSendPolicyEmail(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}send-policy-email/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateImportPolicies(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}import-policies/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateOcrData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}ocrdata/${id}`, data, { headers: this.getAuthHeaders() });
  }

  updateExcelUpdates(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}excelupdates/${id}`, data);
  }
  updateQuotation(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}quotations/${id}`, data, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => {
        console.error(`Error updating quotation with ID ${id}:`, error);
        return throwError(() => new Error('Failed to update quotation.'));
      })
    );
  }
}
function setAuthHeader(arg0: { firstname: string; lastname: string; email: string; password: string; role: string; }) {
  console.log('Setting auth header for:', arg0);
}
