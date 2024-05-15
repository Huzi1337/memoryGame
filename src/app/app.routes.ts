import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemoGameComponent } from './memo-game/memo-game.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'memo-game',
    component: MemoGameComponent,
  },
];
