import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.component';
import { dashboardComponent } from './dashboard-component';

@NgModule({
  declarations: [dashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
