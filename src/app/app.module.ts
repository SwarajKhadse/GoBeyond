import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomebackcontComponent } from './components/homebackcont/homebackcont.component';
import { HomeBestPackagesComponent } from './components/home-best-packages/home-best-packages.component';
import { HomeBestPackageCardComponent } from './components/home-best-packages/home-best-package-card/home-best-package-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomebackcontComponent,
    HomeBestPackagesComponent,
    HomeBestPackageCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
