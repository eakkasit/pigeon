import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';




export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
    // { path: 'home/order', component: Component }
    // { path: 'login', component: LoginComponent },
    // { path: 'admin', canActivate: [AuthGuard], component: AdminComponent }


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);