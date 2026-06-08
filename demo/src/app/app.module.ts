import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FactsComponent } from './facts/facts.component';
import { FeatureComponent } from './feature/feature.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewAllComponent } from './offline-data/view-all/view-all.component';
import { AddNewComponent } from './offline-data/add-new/add-new.component';
import { AddHealthComponent } from './offline-data/add-health/add-health.component';
import { AddOtherOfflineComponent } from './offline-data/add-other-offline/add-other-offline.component';
import { OfflineDataComponent } from './offline-data/offline-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';
import { ViewAllPolicyComponent } from './my-policy/view-all-policy/view-all-policy.component';
import { MyQuotationComponent } from './my-quotation/my-quotation.component';
import { ViewAllQuotationComponent } from './my-quotation/view-all-quotation/view-all-quotation.component';
import { MyRenewalsComponent } from './my-renewals/my-renewals.component';
import { ViewAllRenewalsComponent } from './my-renewals/view-all-renewals/view-all-renewals.component';
import { MyReportsComponent } from './my-reports/my-reports.component';
import { POSPActivationReportComponent } from './my-reports/posp-activation-report/posp-activation-report.component';
import { MySavedProposalComponent } from './my-saved-proposal/my-saved-proposal.component';
import { ViewAllSavedProposalComponent } from './my-saved-proposal/view-all-saved-proposal/view-all-saved-proposal.component';
import { MyPolicyClaimComponent } from './my-policy-claim/my-policy-claim.component';
import { ViewAllPolicyClaimComponent } from './my-policy-claim/view-all-policy-claim/view-all-policy-claim.component';
import { AddNewPolicyClaimComponent } from './my-policy-claim/add-new-policy-claim/add-new-policy-claim.component';
import { ProductIcBranchComponent } from './product-ic-branch/product-ic-branch.component';
import { ViewAllProductIcBranchComponent } from './product-ic-branch/view-all-product-ic-branch/view-all-product-ic-branch.component';
import { ViewAllUserManagementComponent } from './user-management/view-all-user-management/view-all-user-management.component';
import { AddNewUserManagementComponent } from './user-management/add-new-user-management/add-new-user-management.component';
import { POSPComponent } from './user-management/posp/posp.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthServiceTsService } from './auth.service.ts.service';
import { RoleGuardService } from './role.guard.service';
import { authInterceptor } from './my-policy/view-all-policy/view-all-policy.component.spec';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuoteComponent } from './quote/quote.component';
import { RegisterComponent } from './register/register.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FactsComponent,
    FeatureComponent,
    AppointmentComponent,
    TeamComponent,
    TestimonialComponent,
    FooterComponent,
    DashboardComponent,
    ViewAllComponent,
    AddNewComponent,
    AddHealthComponent,
    AddOtherOfflineComponent,
    OfflineDataComponent,
    ChangePasswordComponent,
    MyPolicyComponent,
    ViewAllPolicyComponent,
    MyQuotationComponent,
    ViewAllQuotationComponent,
    MyRenewalsComponent,
    ViewAllRenewalsComponent,
    MyReportsComponent,
    POSPActivationReportComponent,
    MySavedProposalComponent,
    ViewAllSavedProposalComponent,
    MyPolicyClaimComponent,
    ViewAllPolicyClaimComponent,
    AddNewPolicyClaimComponent,
    ProductIcBranchComponent,
    ViewAllProductIcBranchComponent,
    ViewAllUserManagementComponent,
    AddNewUserManagementComponent,
    POSPComponent,
    LoginComponent,
    PageNotFoundComponent,
    QuoteComponent,
    RegisterComponent,
    PublicLayoutComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Add this here
    FormsModule, // Add FormsModule here
    HttpClientModule
  ],
  providers: [
    AuthServiceTsService,
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
