import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './home/article/article.component';
import { HeaderComponent } from './home/header/header.component';
import { GroupComponent } from './group/group.component';
import { TeamComponent } from './team/team.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoUserComponent } from './profile/info-user/info-user.component';
import { PassionComponent } from './profile/passion/passion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ArticleComponent,
    HeaderComponent,
    GroupComponent,
    TeamComponent,
    ProfileComponent,
    InfoUserComponent,
    PassionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
