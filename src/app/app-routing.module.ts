import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add.customer/add.customer.component';
import { ListCustomerComponent } from './list.customer/list.customer.component';
import { EditCustomerComponent } from './edit.customer/edit.customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add.student/add.student.component';
import { ListStudentComponent } from './list.student/list.student.component';
import { EditStudentComponent } from './edit.student/edit.student.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path:'login', component:LoginComponent},
  { path:'add-customer', component:AddCustomerComponent},
  { path:'list-customer', component:ListCustomerComponent},
  { path:'edit-customer/:id1', component:EditCustomerComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'customer', component:CustomerComponent},
  {path: 'student', component:StudentComponent},
  {path: 'list-student', component:ListStudentComponent},
  {path: 'add-student', component:AddStudentComponent},
  {path: 'edit-student/:id1', component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
