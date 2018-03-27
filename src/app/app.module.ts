import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { StaffComponent } from './components/staff/staff.component';
import { DriverComponent } from './components/driver/driver.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { HomeModule } from './components/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    StaffComponent,
    DriverComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
