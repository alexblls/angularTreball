import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavegacioComponent } from './component/navegacio/navegacio.component';
import { DispositiuComponent } from './dispositiu/dispositiu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacioComponent,
    DispositiuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
