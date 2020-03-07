import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { RedirectComponent } from './dashboard/redirect/redirect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StafDashboardComponent } from './dashboard/staf-dashboard/staf-dashboard.component';
import { NewPurchaseComponent } from './dashboard/purchase/new-purchase/new-purchase.component';
import { PoMaintenanceComponent } from './dashboard/purchase/po-maintenance/po-maintenance.component';
import { InventoryComponent } from './dashboard/purchase/inventory/inventory.component';
import { InvoiceComponent } from './dashboard/invoice/invoice.component';
import { PurchaseInvoiceComponent } from './dashboard/invoice/purchase-invoice/purchase-invoice.component';
import { CulturalProgramInvoiceComponent } from './dashboard/invoice/cultural-program-invoice/cultural-program-invoice.component';
import { OtherPaymentComponent } from './dashboard/invoice/other-payment/other-payment.component';
import { InvoicePaymentTrackerComponent } from './dashboard/invoice/invoice-payment-tracker/invoice-payment-tracker.component';
import { PfBookingTrackerComponent } from './dashboard/reservation/pf-booking-tracker/pf-booking-tracker.component';
import { PfReservationComponent } from './dashboard/reservation/pf-reservation/pf-reservation.component';
import { ReservationComponent } from './dashboard/reservation/reservation.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { LeaveTrackerComponent } from './dashboard/employee/leave-tracker/leave-tracker.component';
import { ApplyLeaveComponent } from './dashboard/employee/apply-leave/apply-leave.component';
import { AdministrationComponent } from './dashboard/administration/administration.component';
import { LeaveRuleSetupComponent } from './dashboard/administration/leave-rule-setup/leave-rule-setup.component';
import { StafAdministrationComponent } from './dashboard/administration/staf-administration/staf-administration.component';
import { VendorManagementComponent } from './dashboard/administration/vendor-management/vendor-management.component';
import { TrackingDashboardComponent } from './dashboard/tracking-dashboard/tracking-dashboard.component';
import { PfbTrackerComponent } from './dashboard/tracking-dashboard/pfb-tracker/pfb-tracker.component';
import { PoTrackerComponent } from './dashboard/tracking-dashboard/po-tracker/po-tracker.component';
import { LeaveDashboardTrackerComponent } from './dashboard/tracking-dashboard/leave-dashboard-tracker/leave-dashboard-tracker.component';
import { IpTrackerComponent } from './dashboard/tracking-dashboard/ip-tracker/ip-tracker.component';
import { AddEmployeeComponent } from './dashboard/administration/staf-administration/add-employee/add-employee.component';
import { BlockEmployeeComponent } from './dashboard/administration/staf-administration/block-employee/block-employee.component';
import { DeleteEmployeeComponent } from './dashboard/administration/staf-administration/delete-employee/delete-employee.component';
import { ModifyEmployeeComponent } from './dashboard/administration/staf-administration/modify-employee/modify-employee.component';
import { AddVenderComponent } from './dashboard/administration/vendor-management/add-vender/add-vender.component';
import { BlockVenderComponent } from './dashboard/administration/vendor-management/block-vender/block-vender.component';
import { DeleteVenderComponent } from './dashboard/administration/vendor-management/delete-vender/delete-vender.component';
import { ModifyVenderComponent } from './dashboard/administration/vendor-management/modify-vender/modify-vender.component';
import { TempleScheduleComponent } from './dashboard/temple-schedule/temple-schedule.component';
import { PriestReservationComponent } from './dashboard/priest-reservation/priest-reservation.component';
import { InvoiceNoComponent } from './dashboard/invoice-no/invoice-no.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
    { path:'', redirectTo :'login',pathMatch:'full', canActivate: []},
    { path: 'login', component: LoginComponent,pathMatch:'full', canActivate: [] },
    { path: 'signup', component: SignUpComponent },
    { path: 'reset_password', component: ResetPasswordComponent },
    { path: 'login/forgot_password', component: ForgotPasswordComponent },
    {path:'',  component:DashboardComponent, canActivate: [AuthGuard] ,
      children: [
        { path:'', redirectTo :'dashboard',pathMatch:'full', canActivate: [AuthGuard]},
        {path:'dashboard', component:StafDashboardComponent},
        {path:'purchase', component:PurchaseComponent,
          // children: [
          //   {path:'new', component: NewPurchaseComponent},
          //   {path:'po_maintenance', component: PoMaintenanceComponent},
          //   {path:'inventory', component: InventoryComponent}
          // ]
        },
        {path:'purchase/new', component: NewPurchaseComponent},
        // {path:'purchase/:id', component: NewPurchaseComponent},
        {path:'purchase/po_maintenance', component: PoMaintenanceComponent},
        {path:'purchase/inventory', component: InventoryComponent},
        {path:'invoice', component: InvoiceComponent},
        {path:'invoice/purchase_invoice', component: PurchaseInvoiceComponent},
        {path:'invoice/cp_invoice', component: CulturalProgramInvoiceComponent},
        {path:'invoice/other_payment', component: OtherPaymentComponent},
        {path:'invoice/ip_tracker', component: InvoicePaymentTrackerComponent},
        {path:'resrvation', component: ReservationComponent},
        {path:'resrvation/pf_reservation', component: PfReservationComponent},
        {path:'resrvation/pf_booking_tracker', component: PfBookingTrackerComponent},
        {path:'employee', component: EmployeeComponent},
        {path:'employee/apply_leave', component: ApplyLeaveComponent},
        {path:'employee/leave_tracker', component: LeaveTrackerComponent},
        {path:'administration', component: AdministrationComponent},
        {path:'administration/leave_rule_setup', component: LeaveRuleSetupComponent},
        {path:'administration/staf_administration', component: StafAdministrationComponent},
        {path:'administration/staf_administration/add_employee', component: AddEmployeeComponent},
        {path:'administration/staf_administration/delete_employee', component: DeleteEmployeeComponent},
        {path:'administration/staf_administration/modify_employee', component: ModifyEmployeeComponent},
        {path:'administration/staf_administration/block_employee' , component: BlockEmployeeComponent},
        {path:'administration/vender_management', component: VendorManagementComponent},
        {path:'administration/vender_management/add_vender', component: AddVenderComponent},
        {path:'administration/vender_management/delete_vender', component: DeleteVenderComponent},
        {path:'administration/vender_management/modify_vender', component: ModifyVenderComponent},
        {path:'administration/vender_management/block_vender' , component: BlockVenderComponent},
        {path:'tracking_dashboard', component:TrackingDashboardComponent },
        {path:'tracking_dashboard/ip_tracker', component:IpTrackerComponent },
        {path:'tracking_dashboard/pfb_tracker', component:PfbTrackerComponent },
        {path:'tracking_dashboard/po_tracker', component:PoTrackerComponent },
        {path:'tracking_dashboard/leave_tracking', component:LeaveDashboardTrackerComponent },
        {path:'priest_reservation', component:PriestReservationComponent},
        {path:'temple_schedule' , component: TempleScheduleComponent},
        {path:'invoice_no/:po_no' , component: InvoiceNoComponent},
        {path:'purchase/:id', component: NewPurchaseComponent},
      ]
    },
    
    { path: '**', component: RedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
