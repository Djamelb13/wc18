// app.module.ts
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './home/article/article.component';
import { HeaderComponent } from './header/header.component';
import { GroupComponent } from './group/group.component';
import { TeamComponent } from './team/team.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoUserComponent } from './profile/info-user/info-user.component';
import { PassionComponent } from './profile/passion/passion.component';
import { CoreModule } from './core/core.module';


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
    PassionComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
