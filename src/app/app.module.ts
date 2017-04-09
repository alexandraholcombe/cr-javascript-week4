import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { MusicianListComponent } from './musician-list/musician-list.component';
import { MusicianTileComponent } from './musician-tile/musician-tile.component';
import { MusicianDetailComponent } from './musician-detail/musician-detail.component';
import { AdminComponent } from './admin/admin.component';
import { NewMusicianComponent } from './new-musician/new-musician.component';
import { EditMusicianComponent } from './edit-musician/edit-musician.component';
import { DeleteMusicianComponent } from './delete-musician/delete-musician.component';
import { SectionsPipe } from './sections.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    MusiciansComponent,
    MusicianListComponent,
    MusicianTileComponent,
    MusicianDetailComponent,
    AdminComponent,
    NewMusicianComponent,
    EditMusicianComponent,
    DeleteMusicianComponent,
    SectionsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
