import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DispositiuComponent } from './dispositiu/dispositiu.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dispositiu', component: DispositiuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
