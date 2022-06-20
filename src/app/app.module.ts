import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InformatiiComponent } from './informatii/informatii.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditareComponent } from './editare/editare.component';
import { AdaugareComponent } from './adaugare/adaugare.component';


@NgModule({
  declarations: [
    AppComponent,
    InformatiiComponent,
    HomepageComponent,
    EditareComponent,
    AdaugareComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
