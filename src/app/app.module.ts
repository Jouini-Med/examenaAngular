import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListeDesLivresComponent } from './liste-des-livres/liste-des-livres.component';
import { ListeDesAuteursComponent } from './liste-des-auteurs/liste-des-auteurs.component';
import { EmprunterComponent } from './emprunter/emprunter.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListeDesLivresComponent,
    ListeDesAuteursComponent,
    EmprunterComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
