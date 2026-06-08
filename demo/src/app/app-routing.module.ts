import { RoleGuardService } from './role.guard.service';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuoteComponent } from './quote/quote.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureComponent } from './feature/feature.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ViewAllComponent } from './offline-data/view-all/view-all.component';
import { AddHealthComponent } from './offline-data/add-health/add-health.component';
import { AddNewComponent } from './offline-data/add-new/add-new.component';
import { AddOtherOfflineComponent } from './offline-data/add-other-offline/add-other-offline.component';
import { AddNewUserManagementComponent } from './user-management/add-new-user-management/add-new-user-management.component';
import { ViewAllUserManagementComponent } from './user-management/view-all-user-management/view-all-user-management.component';
import { ViewAllPolicyComponent } from './my-policy/view-all-policy/view-all-policy.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { POSPComponent } from './user-management/posp/posp.component';
import { ViewAllQuotationComponent } from './my-quotation/view-all-quotation/view-all-quotation.component';
import { ViewAllRenewalsComponent } from './my-renewals/view-all-renewals/view-all-renewals.component';
import { ViewAllSavedProposalComponent } from './my-saved-proposal/view-all-saved-proposal/view-all-saved-proposal.component';
import { ViewAllProductIcBranchComponent } from './product-ic-branch/view-all-product-ic-branch/view-all-product-ic-branch.component';
import { ViewAllPolicyClaimComponent } from './my-policy-claim/view-all-policy-claim/view-all-policy-claim.component';
import { AddNewPolicyClaimComponent } from './my-policy-claim/add-new-policy-claim/add-new-policy-claim.component';
import { LoginComponent } from './login/login.component';
import { POSPActivationReportComponent } from './my-reports/posp-activation-report/posp-activation-report.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'feature', component: FeatureComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'team', component: TeamComponent },
      { path: 'testimonial', component: TestimonialComponent },
      { path: 'quote', component: QuoteComponent },
      { path: '404', component: PageNotFoundComponent },
    ]
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [RoleGuardService],
        data: { roles: ['ADMIN', 'USER', 'VP', 'AVP','SRR', 'CHECKER','MAKE_ENTRY','ACCOUNT_MANAGER'] },
      },
      { path: 'offline-data', children:[
        { path: 'view-all', component: ViewAllComponent },
        { path: 'add-new', component: AddNewComponent },
        { path: 'add-health', component: AddHealthComponent },
        { path: 'add-other-offline', component: AddOtherOfflineComponent } 
      ]},
      {path: 'my-policy', children:[    
        { path: 'view-all-policy', component: ViewAllPolicyComponent}
      ]},
      {path: 'my-quotation', children:[    
        { path: 'view-all-quotation', component: ViewAllQuotationComponent}
      ]},
      {path: 'my-renewals', children:[    
        { path: 'view-all-renewals', component: ViewAllRenewalsComponent}
      ]},
      {path: 'my-reports',  children:[    
        { path: 'posp-activation-report', component: POSPActivationReportComponent}
      ]},
      {path: 'my-saved-proposal', children:[    
        { path: 'view-all-saved-proposal', component: ViewAllSavedProposalComponent}
      ]},
      {path: 'product-ic-branch', children:[    
        { path: 'view-all-product-ic-branch', component: ViewAllProductIcBranchComponent}
      ]},
      {path: 'my-policy-claim', children:[    
        { path: 'view-all-policy-claim', component: ViewAllPolicyClaimComponent},
        { path: 'add-new-policy-claim', component:AddNewPolicyClaimComponent}
      ]},
      {path: 'user-management',children:[    
        { path: 'view-all-user-management', component: ViewAllUserManagementComponent},
        { path: 'add-new-user-management', component: AddNewUserManagementComponent},
        { path: 'posp', component: POSPComponent},
      ]},
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
