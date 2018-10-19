import { Routes } from '@angular/router';

import { HomeOrganismComponent } from './shared/organisms/home-organism/home-organism.component';
import { NotFoundOrganismComponent } from './shared/organisms/not-found-organism/not-found-organism.component';

export const routes: Routes = [{
    path: '',
    component: HomeOrganismComponent,
    data: [{
      pageName: 'Home Page',
    }]
  },
  {
    path: 'not-found',
    component: NotFoundOrganismComponent,
    pathMatch: 'full',
    data: [{
      pageName: 'Not Found',
    }]
  },
  {
    path: '**',
    redirectTo: 'not-found',
    data: [{
      pageName: 'Not Found',
    }]
  }];
