import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { MusiciansComponent} from './musicians/musicians.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'musicians',
    component: MusiciansComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
