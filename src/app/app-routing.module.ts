import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardLayoutComponent } from './layouts/dashboard/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: dashboardLayoutComponent,
    children: [
      {
        path: 'Home',
        loadChildren: () =>
          import('./modules/dashboard/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
