import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeImageScreenComponent } from '../components/home-image-screen/home-image-screen.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: HomeImageScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class DashboardRoutingModule {}
