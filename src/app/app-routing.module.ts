import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { ListeDePaysComponent } from './liste-de-pays/liste-de-pays.component';
import { InfosComponent } from './infos/infos.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AddCountryComponent } from './formulaire/add-country/add-country.component';
import { AddGroupeComponent } from './formulaire/add-groupe/add-groupe.component';
import { AddPlayerComponent } from './formulaire/add-player/add-player.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'group/:id', component: GroupComponent }, 
  { path: 'joueurs/:pays', component: JoueursComponent },
  {path : 'liste-de-pays/:id', component: ListeDePaysComponent},
  {path: 'infos', component: InfosComponent},
  {
    path: 'formulaire',
    component: FormulaireComponent,
    children: [
      { path: 'groupe', component: AddGroupeComponent},
      { path: 'pays', component: AddCountryComponent },
      { path: 'joueur', component: AddPlayerComponent}
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
