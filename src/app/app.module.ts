import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { MusicianListComponent } from './musician-list/musician-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    MusiciansComponent,
    MusicianListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
