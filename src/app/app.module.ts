import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar/navbar.component';
import { HomeImageScreenComponent } from './modules/dashboard/components/home-image-screen/home-image-screen.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';
import { dashboardLayoutComponent } from './layouts/dashboard/dashboard-layout.component';
import { contactMeLayoutComponent } from './layouts/contactMe/contactMe-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeImageScreenComponent,
    FooterComponent,
    dashboardLayoutComponent,
    contactMeLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
