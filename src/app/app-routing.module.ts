import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDesLivresComponent } from './liste-des-livres/liste-des-livres.component';
import { ListeDesAuteursComponent } from './liste-des-auteurs/liste-des-auteurs.component';
import { HomeComponent } from './home/home.component';
import { EmprunterComponent } from './emprunter/emprunter.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'liste-des-livres', component: ListeDesLivresComponent },
  { path: 'liste-des-auteurs', component: ListeDesAuteursComponent },
  { path: 'emprunter', component: EmprunterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
