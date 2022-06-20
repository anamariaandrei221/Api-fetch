import { EditareComponent } from './editare/editare.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformatiiComponent } from './informatii/informatii.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdaugareComponent } from './adaugare/adaugare.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Informatii', component: InformatiiComponent},
  { path: 'Editare', component: EditareComponent},
  { path: 'Adaugare', component: AdaugareComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);