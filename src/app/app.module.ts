import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Angular2CsvModule } from 'angular2-csv';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { RedirectComponent } from './dashboard/redirect/redirect.component';
import { FooterComponent } from './footer/footer.component';
// import { ReactiveFormsModule }   from '@angular/forms';
import { StafDashboardComponent } from './dashboard/staf-dashboard/staf-dashboard.component';
import { NewPurchaseComponent } from './dashboard/purchase/new-purchase/new-purchase.component';
import { PoMaintenanceComponent } from './dashboard/purchase/po-maintenance/po-maintenance.component';
import { InventoryComponent } from './dashboard/purchase/inventory/inventory.component';
import { InvoiceComponent } from './dashboard/invoice/invoice.component';
import { PurchaseInvoiceComponent } from './dashboard/invoice/purchase-invoice/purchase-invoice.component';
import { CulturalProgramInvoiceComponent } from './dashboard/invoice/cultural-program-invoice/cultural-program-invoice.component';
import { InvoicePaymentTrackerComponent } from './dashboard/invoice/invoice-payment-tracker/invoice-payment-tracker.component';
import { OtherPaymentComponent } from './dashboard/invoice/other-payment/other-payment.component';
import { ReservationComponent } from './dashboard/reservation/reservation.component';
import { PfReservationComponent } from './dashboard/reservation/pf-reservation/pf-reservation.component';
import { PfBookingTrackerComponent } from './dashboard/reservation/pf-booking-tracker/pf-booking-tracker.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { ApplyLeaveComponent } from './dashboard/employee/apply-leave/apply-leave.component';
import { LeaveTrackerComponent } from './dashboard/employee/leave-tracker/leave-tracker.component';
import { AdministrationComponent } from './dashboard/administration/administration.component';
import { LeaveRuleSetupComponent } from './dashboard/administration/leave-rule-setup/leave-rule-setup.component';
import { StafAdministrationComponent } from './dashboard/administration/staf-administration/staf-administration.component';
import { VendorManagementComponent } from './dashboard/administration/vendor-management/vendor-management.component';
import { TrackingDashboardComponent } from './dashboard/tracking-dashboard/tracking-dashboard.component';
import { PoTrackerComponent } from './dashboard/tracking-dashboard/po-tracker/po-tracker.component';
import { PfbTrackerComponent } from './dashboard/tracking-dashboard/pfb-tracker/pfb-tracker.component';
import { IpTrackerComponent } from './dashboard/tracking-dashboard/ip-tracker/ip-tracker.component';
import { LeaveDashboardTrackerComponent } from './dashboard/tracking-dashboard/leave-dashboard-tracker/leave-dashboard-tracker.component';
import { AddVenderComponent } from './dashboard/administration/vendor-management/add-vender/add-vender.component';
import { ModifyVenderComponent } from './dashboard/administration/vendor-management/modify-vender/modify-vender.component';
import { BlockVenderComponent } from './dashboard/administration/vendor-management/block-vender/block-vender.component';
import { DeleteVenderComponent } from './dashboard/administration/vendor-management/delete-vender/delete-vender.component';
import { AddEmployeeComponent } from './dashboard/administration/staf-administration/add-employee/add-employee.component';
import { ModifyEmployeeComponent } from './dashboard/administration/staf-administration/modify-employee/modify-employee.component';
import { BlockEmployeeComponent } from './dashboard/administration/staf-administration/block-employee/block-employee.component';
import { DeleteEmployeeComponent } from './dashboard/administration/staf-administration/delete-employee/delete-employee.component';
import { PriestReservationComponent } from './dashboard/priest-reservation/priest-reservation.component';
import { TempleScheduleComponent } from './dashboard/temple-schedule/temple-schedule.component';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InvoiceNoComponent } from './dashboard/invoice-no/invoice-no.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './services/auth.guard';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HttpResponseInterceptor } from './services/interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    PurchaseComponent,
    HeaderComponent,
    RedirectComponent,
    FooterComponent,
    StafDashboardComponent,
    NewPurchaseComponent,
    PoMaintenanceComponent,
    InventoryComponent,
    InvoiceComponent,
    PurchaseInvoiceComponent,
    CulturalProgramInvoiceComponent,
    InvoicePaymentTrackerComponent,
    OtherPaymentComponent,
    ReservationComponent,
    PfReservationComponent,
    PfBookingTrackerComponent,
    EmployeeComponent,
    ApplyLeaveComponent,
    LeaveTrackerComponent,
    AdministrationComponent,
    LeaveRuleSetupComponent,
    StafAdministrationComponent,
    VendorManagementComponent,
    TrackingDashboardComponent,
    PoTrackerComponent,
    PfbTrackerComponent,
    IpTrackerComponent,
    LeaveDashboardTrackerComponent,
    AddVenderComponent,
    ModifyVenderComponent,
    BlockVenderComponent,
    DeleteVenderComponent,
    AddEmployeeComponent,
    ModifyEmployeeComponent,
    BlockEmployeeComponent,
    DeleteEmployeeComponent,
    PriestReservationComponent,
    TempleScheduleComponent,
    InvoiceNoComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatTableModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatProgressBarModule,
    HttpClientModule,
    NgxPaginationModule,
    LoadingBarModule,
    Angular2CsvModule
  ],
  providers: [CookieService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
