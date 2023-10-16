import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { ListeDePaysComponent } from './liste-de-pays/liste-de-pays.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'team', component:TeamComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'group', component:GroupComponent},
  { path: 'liste-de-pays/:groupe', component: ListeDePaysComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
