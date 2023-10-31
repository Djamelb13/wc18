import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


export interface Articles {
  articles: Article[];
}

export interface Article {
  id: number;
  title: string;
  image: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
    
    this.jsonData2$ = this.getJSONData();
  }
  private jsonData2$: Observable<any>;

  public getJSONData(): Observable<any> {
    const url = 'http://localhost:4200/assets/data-article.json';
    console.log('Fetching JSON data from URL:', url);

    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Error loading JSON data'));
  }


  getArticles(): Observable<Article[]> {
    return this.jsonData2$.pipe(
      map((data: Article[]) => {
        console.log('Data from service:', data);
        return data;
      })
    );
  }
  
  
  

  
  
  
  
  
}
