import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CollectionComponent } from './collection/collection.component';
import { OfferComponent } from './offer/offer.component';
import { HeaderComponent } from './header/header.component';
import { FineartsComponent } from './collection/finearts/finearts.component';
import { ScalptureComponent } from './collection/scalpture/scalpture.component';
import { ModernartsComponent } from './collection/modernarts/modernarts.component';
import { PaintingComponent } from './collection/painting/painting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    AboutComponent,
    WhishlistComponent,
    CollectionComponent,
    OfferComponent,
    HeaderComponent,
    FineartsComponent,
    ScalptureComponent,
    ModernartsComponent,
    PaintingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
