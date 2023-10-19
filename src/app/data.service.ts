import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private titreDuGroupeOuPaysSource = new BehaviorSubject<string>('');
    titreDuGroupeOuPays$ = this.titreDuGroupeOuPaysSource.asObservable();
  
    updateTitreDuGroupeOuPays(titre: string) {
      this.titreDuGroupeOuPaysSource.next(titre);
    }
  getGroupesDePays() {
    return [
      {
        nom: 'Groupe A',
        pays: ['France', 'Belgique', 'Espagne', 'Italie']
      },
      {
        nom: 'Groupe B',
        pays: ['Allemagne', 'Pays-Bas', 'Portugal', 'Maroc']
      },
      {
        nom: 'Groupe C',
        pays: ['Angleterre', 'Écosse', 'Irlande']
      }
    ];
  }
  getArticles() {
    return [
      {
        title: "Article 1",
        author: "Auteur 1",
        image : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/4e46ea37-e552-4c44-ba20-549d1b86d414/ballon-de-football-club-elite-CJW4dG.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Article 2",
        author: "Auteur 2",
        image : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/4e46ea37-e552-4c44-ba20-549d1b86d414/ballon-de-football-club-elite-CJW4dG.png",

        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Article 3",
        author: "Auteur 3",
        image : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/4e46ea37-e552-4c44-ba20-549d1b86d414/ballon-de-football-club-elite-CJW4dG.png",
        content: "Ceci est le contenu de l'article 3. Il peut contenir des informations intéressantes sur divers sujets."
      }
    ];
  }

  getJoueursByPays(pays: string): any[] {
    if (pays === 'France') {
        return [
            { nom: 'Kylian Mbappé', prenom: 'Kylian', poste: 'Attaquant', championnat: 'Ligue 1' },
            { nom: 'Antoine Griezmann', prenom: 'Antoine', poste: 'Attaquant', championnat: 'La Liga' },
            { nom: 'N\'Golo Kanté', prenom: 'N\'Golo', poste: 'Milieu de terrain', championnat: 'Premier League' },
            { nom: 'Raphael Varane', prenom: 'Raphael', poste: 'Défenseur', championnat: 'Premier League' },
            { nom: 'Hugo Lloris', prenom: 'Hugo', poste: 'Gardien de but', championnat: 'Premier League' }
        ];
    } else if (pays === 'Belgique') {
        return [
            { nom: 'Eden Hazard', prenom: 'Eden', poste: 'Attaquant', championnat: 'La Liga' },
            { nom: 'Kevin De Bruyne', prenom: 'Kevin', poste: 'Milieu de terrain', championnat: 'Premier League' },
            { nom: 'Thibaut Courtois', prenom: 'Thibaut', poste: 'Gardien de but', championnat: 'La Liga' },
            { nom: 'Romelu Lukaku', prenom: 'Romelu', poste: 'Attaquant', championnat: 'Serie A' },
            { nom: 'Axel Witsel', prenom: 'Axel', poste: 'Milieu de terrain', championnat: 'Bundesliga' }
        ];
    } else if (pays === 'Espagne') {
        return [
            { nom: 'Sergio Ramos', prenom: 'Sergio', poste: 'Défenseur', championnat: 'Ligue 1' },
            { nom: 'Sergio Busquets', prenom: 'Sergio', poste: 'Milieu de terrain', championnat: 'La Liga' },
            { nom: 'Gerard Piqué', prenom: 'Gerard', poste: 'Défenseur', championnat: 'La Liga' },
            { nom: 'Jordi Alba', prenom: 'Jordi', poste: 'Défenseur', championnat: 'La Liga' },
            { nom: 'Isco', prenom: 'Isco', poste: 'Milieu de terrain', championnat: 'Serie A' }
        ];
    } else if (pays === 'Italie') {
        return [
            { nom: 'Giorgio Chiellini', prenom: 'Giorgio', poste: 'Défenseur', championnat: 'Serie A' },
            { nom: 'Leonardo Bonucci', prenom: 'Leonardo', poste: 'Défenseur', championnat: 'Serie A' },
            { nom: 'Marco Verratti', prenom: 'Marco', poste: 'Milieu de terrain', championnat: 'Ligue 1' },
            { nom: 'Ciro Immobile', prenom: 'Ciro', poste: 'Attaquant', championnat: 'Serie A' },
            { nom: 'Gianluigi Donnarumma', prenom: 'Gianluigi', poste: 'Gardien de but', championnat: 'Serie A' }
        ];
    } else if (pays === 'Allemagne') {
        return [
            { nom: 'Toni Kroos', prenom: 'Toni', poste: 'Milieu de terrain', championnat: 'La Liga' },
            { nom: 'Joshua Kimmich', prenom: 'Joshua', poste: 'Milieu de terrain', championnat: 'Bundesliga' },
            { nom: 'Manuel Neuer', prenom: 'Manuel', poste: 'Gardien de but', championnat: 'Bundesliga' },
            { nom: 'Leroy Sané', prenom: 'Leroy', poste: 'Attaquant', championnat: 'Bundesliga' },
            { nom: 'Mats Hummels', prenom: 'Mats', poste: 'Défenseur', championnat: 'Bundesliga' }
        ];
    } else if (pays === 'Pays-Bas') {
        return [
            { nom: 'Virgil van Dijk', prenom: 'Virgil', poste: 'Défenseur', championnat: 'Premier League' },
            { nom: 'Frenkie de Jong', prenom: 'Frenkie', poste: 'Milieu de terrain', championnat: 'La Liga' },
            { nom: 'Memphis Depay', prenom: 'Memphis', poste: 'Attaquant', championnat: 'La Liga' },
            { nom: 'Georginio Wijnaldum', prenom: 'Georginio', poste: 'Milieu de terrain', championnat: 'Ligue 1' },
            { nom: 'Donyell Malen', prenom: 'Donyell', poste: 'Attaquant', championnat: 'Bundesliga' }
        ];
    } else if (pays === 'Portugal') {
        return [
            { nom: 'Cristiano Ronaldo', prenom: 'Cristiano', poste: 'Attaquant', championnat: 'Premier League' },
            { nom: 'Bruno Fernandes', prenom: 'Bruno', poste: 'Milieu de terrain', championnat: 'Premier League' },
            { nom: 'Diogo Jota', prenom: 'Diogo', poste: 'Attaquant', championnat: 'Premier League' },
            { nom: 'Ruben Dias', prenom: 'Ruben', poste: 'Défenseur', championnat: 'Premier League' },
            { nom: 'Bernardo Silva', prenom: 'Bernardo', poste: 'Milieu de terrain', championnat: 'Premier League' }
        ];
    } else if (pays === 'Maroc') {
        return [
            { nom: 'Achraf Hakimi', prenom: 'Achraf', poste: 'Défenseur', championnat: 'Ligue 1' },
            { nom: 'Hakim Ziyech', prenom: 'Hakim', poste: 'Milieu de terrain', championnat: 'Premier League' },
            { nom: 'Romain Saïss', prenom: 'Romain', poste: 'Défenseur', championnat: 'Premier League' },
            { nom: 'Yassine Bounou', prenom: 'Yassine', poste: 'Gardien de but', championnat: 'La Liga' },
            { nom: 'Noussair Mazraoui', prenom: 'Noussair', poste: 'Défenseur', championnat: 'Bundesliga' }
        ];
    } else if (pays === 'Angleterre') {
        return [
            { nom: 'Harry Kane', prenom: 'Harry', poste: 'Attaquant', championnat: 'Premier League' },
            { nom: 'Jordan Henderson', prenom: 'Jordan', poste: 'Milieu de terrain', championnat: 'Premier League' },
            { nom: 'John Stones', prenom: 'John', poste: 'Défenseur', championnat: 'Premier League' },
            { nom: 'Raheem Sterling', prenom: 'Raheem', poste: 'Attaquant', championnat: 'Premier League' },
            { nom: 'Dean Henderson', prenom: 'Dean', poste: 'Gardien de but', championnat: 'Premier League' }
        ];
    } else if (pays === 'Ecosse') {
        return [
            { nom: 'Andrew Robertson', prenom: 'Andrew', poste: 'Défenseur', championnat: 'Premier League' },
            { nom: 'Kieran Tierney', prenom: 'Kieran', poste: 'Défenseur', championnat: 'Premier League' },
            { nom: 'John McGinn', prenom: 'John', poste: 'Milieu de terrain', championnat: 'Premier League' },
            { nom: 'Lyndon Dykes', prenom: 'Lyndon', poste: 'Attaquant', championnat: 'Championship' },
            { nom: 'David Marshall', prenom: 'David', poste: 'Gardien de but', championnat: 'Championship' }
        ];
    } else if (pays === 'Irlande') {
        return [
            { nom: 'Shane Duffy', prenom: 'Shane', poste: 'Défenseur', championnat: 'Championship' },
            { nom: 'Callum Robinson', prenom: 'Callum', poste: 'Attaquant', championnat: 'Premier League' },
            { nom: 'Enda Stevens', prenom: 'Enda', poste: 'Défenseur', championnat: 'Championship' },
            { nom: 'Conor Hourihane', prenom: 'Conor', poste: 'Milieu de terrain', championnat: 'Championship' },
            { nom: 'Mark Travers', prenom: 'Mark', poste: 'Gardien de but', championnat: 'Championship' }
        ];
    } else {
        return [];
    }
}

}
