import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UichangeComponent } from './uichange/uichange.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ui', component: UichangeComponent },
  { path: '', redirectTo: '/ui', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
