import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authentication/auth.guard';

const routes: Routes = [
  {path:'', loadChildren: ()=>import('./dashboard/dashboard.module').then((mod)=>mod.DashboardModule), canActivate: [AuthGuard]},
  {path:'', loadChildren: ()=>import('./Authentication/authentication.module').then((mod)=>mod.AuthenticationModule),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
