import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './core/components/menu-bar/menu-bar.component';
import { MenuNewsComponent } from './core/components/menu-news/menu-news.component';
import { CardNewsComponent } from './core/components/card-news/card-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuNewsComponent,
    CardNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
