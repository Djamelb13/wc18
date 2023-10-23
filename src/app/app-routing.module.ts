import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { MyDataResolver } from './my-data.resolver';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'group/:nom', component: GroupComponent , resolve: { resolvedData: MyDataResolver }},
  { path: 'joueurs/:pays', component: JoueursComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
