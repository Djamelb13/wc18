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
import { ListeDePaysComponent } from './liste-de-pays/liste-de-pays.component';
import { DataService } from './data.service';
import { JoueursComponent } from './joueurs/joueurs.component';
import { CustomTitleStrategy } from './custom-title-strategy';
import { TitleComponent } from './header/title/title.component';


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
    ListeDePaysComponent,
    JoueursComponent,
    TitleComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule
  ],
  providers: [DataService, CustomTitleStrategy],
  bootstrap: [AppComponent],
})
export class AppModule { }
