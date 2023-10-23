import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  private jsonData: any;

  constructor(private http: HttpClient) {
    // Chargez les données JSON depuis le fichier 'data-group.json' lors de l'initialisation du service
    this.getJSONData().subscribe((data) => {
      this.jsonData = data;
      console.log('Données JSON chargées :', this.jsonData);
    });
  }

  // Cette méthode récupère les données depuis le fichier JSON dans le dossier 'assets'

  getJSONData(): Observable<any> {
    const url = './assets/data-group.json'; // Spécifiez le chemin vers le fichier JSON local
  
    return this.http.get(url).pipe(
      tap(data => console.log('Données JSON chargées :', data)),
      catchError(this.handleError)
    );
  }

  // Ajout d'une méthode pour gérer les erreurs
  private handleError(error: any): Observable<any> {
    console.error('Une erreur s\'est produite :', error);
    return throwError('Erreur lors du chargement des données JSON');
  }

  getArticles(): Observable<any[]> {
    // Vous devriez implémenter la logique pour obtenir les articles ici à partir de jsonData
    return this.jsonData ? this.jsonData.articles : [];
  }

  getJoueursByPays(pays: string): Observable<any[]> {
    // Vous devriez implémenter la logique pour obtenir les joueurs par pays à partir de jsonData
    const joueurs = this.jsonData && this.jsonData.joueursByPays ? this.jsonData.joueursByPays[pays] : [];
    return joueurs ? joueurs : [];
  }

  getGroupesDePays(): Observable<any[]> {
    // Vous devriez implémenter la logique pour obtenir les groupes de pays à partir de jsonData
    return this.jsonData ? this.jsonData.groupesDePays : [];
  }

  getGroupDetails(groupId: string): Observable<any> {
    console.log('ID du groupe recherché :', groupId);
    if (this.jsonData && this.jsonData.groupesDePays) {
      const group = this.jsonData.groupesDePays.find((groupe: any) => groupe.id === +groupId);
      console.log('Groupe trouvé :', group);
      return group ? of(group) : throwError('Groupe non trouvé');
    } else {
      return throwError('Données JSON non chargées');
    }
  }

  getGroupeById(id: number) {
    // Recherche du groupe par son ID
    return this.jsonData && this.jsonData.groupesDePays ? this.jsonData.groupesDePays.find((groupe: { id: number; }) => groupe.id === id) : null;
  }
  
}
