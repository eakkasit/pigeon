import { homeroutes } from './home.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { InfoComponent } from './info/info.component';
import { PriceComponent } from './price/price.component';
import { FormsModule } from '@angular/forms';
import { AgmDirectionModule } from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import { config } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    homeroutes,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: config.mapApiKey,
      libraries: ['places']
    }),
    AgmDirectionModule,
  ],
  declarations: [AboutComponent, OrderComponent, InfoComponent, PriceComponent]
})
export class HomeModule { }
