import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemoGameComponent } from './memo-game/memo-game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    title: 'Game',
    path: 'memo-game',
    component: MemoGameComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
