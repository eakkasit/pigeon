
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { OrderComponent } from './order/order.component';

const homesRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'home',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path: 'home',
        //         component: HomeComponent
        //     },
        //     {
        //         path: 'info',
        //         // redirectTo: 'info',
        //         component: HomeComponent
        //     },
        //     {
        //         path: 'order',
        //         component: OrderComponent
        //     },
        //     {
        //         path: 'price',
        //         component: PriceComponent
        //     },
        //     {
        //         path: 'about',
        //         component: AboutComponent
        //     },
        // ]
    },
    {
        path: 'home/info',
        component: InfoComponent
    },
    {
        path: 'home/order',
        component: OrderComponent
    },
    {
        path: 'home/price',
        component: PriceComponent
    },
    {
        path: 'home/about',
        component: AboutComponent
    },
];
export const homeroutes = RouterModule.forChild(homesRoutes);
