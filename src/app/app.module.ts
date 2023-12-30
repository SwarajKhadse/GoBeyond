import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomebackcontComponent } from './components/homebackcont/homebackcont.component';
import { HomeBestPackagesComponent } from './components/home-best-packages/home-best-packages.component';
import { HomeBestPackageCardComponent } from './components/home-best-packages/home-best-package-card/home-best-package-card.component';
import { HomeStaysCardsComponent } from './components/home-stays-cards/home-stays-cards.component';
import { HomeStaysCardSingleComponent } from './components/home-stays-cards/home-stays-card-single/home-stays-card-single.component';
import { ExploreDivComponent } from './components/explore-div/explore-div.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewCardComponent } from './components/review/review-card/review-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomebackcontComponent,
    HomeBestPackagesComponent,
    HomeBestPackageCardComponent,
    HomeStaysCardsComponent,
    HomeStaysCardSingleComponent,
    ExploreDivComponent,
    ReviewComponent,
    ReviewCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
