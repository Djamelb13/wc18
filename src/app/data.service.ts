import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


interface Joueur {
  id : number;
  nom: string;
  prenom : string;
}
interface Pays {
  nom : string;
  joueurs: Joueur [];
}
export interface Group {
  id : number;
  nom: string;
  pays : Pays [];
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonData$: Observable<any>;

  constructor(private http: HttpClient) {
    this.jsonData$ = this.getJSONData();
  }

  public getJSONData(): Observable<any> {
    const url = 'http://localhost:4200/assets/data-group.json';
    console.log('Fetching JSON data from URL:', url);

    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Error loading JSON data'));
  }

  getArticles(): Observable<any[]> {
    return this.jsonData$.pipe(
      map((data: any) => data.articles || [])
    );
  }

  //getJoueursByPays(payss: string): Observable<any[]> {
    //return this.jsonData$.pipe(
      //map((data: any) => (data.joueursByPays && data.joueursByPays[pays]) || [])
    //);
  //}

  getGroupesDePays(paysName: string): Observable<Pays | undefined> {
    return this.jsonData$.pipe(
      map((data: Pays[]) => {
        console.log('Données brutes :', data);
        const groupeTrouvé = data.find(p => p.nom === paysName);
        console.log('Groupe trouvé :', groupeTrouvé);
        return groupeTrouvé;
      })
    );
  }

  getPaysDetails(paysDetails: Pays): Observable<Pays | undefined> {
    return this.jsonData$.pipe(
      map((data: Group[]) => { // Notez le changement de type de données ici
        console.log(data);
        console.log('a', paysDetails);
        console.log('b', paysDetails.nom);
        
        const groupe = data.find(group => {
          const pays = group.pays.find(p => p.nom === paysDetails.nom);
          if (pays) {
            console.log('Pays trouvé dans le groupe :', pays);
            return true;
          }
          return false;
        });
  
        if (groupe) {
          return groupe.pays.find(p => p.nom === paysDetails.nom);
        } else {
          console.log('Pays non trouvé.');
          return undefined;
        }
      })
    );
  }
  
  
  
  
  

  getGroupDetails(groupId: number): Observable<any> {
    return this.jsonData$.pipe(
      map((data: Group []) => {
        console.log('Données reçues :', data);
        const groupFound = data.find(g => g.id === groupId);
        console.log('Groupe trouvé :', groupFound);
        return groupFound;
      })
    );
  }
  

  getGroupeById(id: number) {
    return this.jsonData$.pipe(
      map((data: any) => (data.groupesDePays || []).find((groupe: { id: number }) => groupe.id === id))
    );
  }
}
