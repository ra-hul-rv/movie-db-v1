import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  {path:'dashboard',component :HomepageComponent},
  {path:'favorite',component :FavoriteComponent},
  {path:'watch-list',component :WatchListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
