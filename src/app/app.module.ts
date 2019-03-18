import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add.customer/add.customer.component';
import { EditCustomerComponent } from './edit.customer/edit.customer.component';
import { ListCustomerComponent } from './list.customer/list.customer.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add.student/add.student.component';
import { ListStudentComponent } from './list.student/list.student.component';
import { EditStudentComponent } from './edit.student/edit.student.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, StudentComponent,
    AddStudentComponent,
    ListStudentComponent,
    EditStudentComponent, EditCustomerComponent, CustomerComponent, LoginComponent, ListCustomerComponent, AddCustomerComponent,],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
