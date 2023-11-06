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
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './article.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { InfosComponent } from './infos/infos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AddGroupeComponent } from './formulaire/add-groupe/add-groupe.component';
import { AddCountryComponent } from './formulaire/add-country/add-country.component';
import { AddPlayerComponent } from './formulaire/add-player/add-player.component';

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
    InfosComponent,
    FormulaireComponent,
    AddGroupeComponent,
    AddCountryComponent,
    AddPlayerComponent,
  ],
  imports: [MatIconModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [DataService, ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule { }
