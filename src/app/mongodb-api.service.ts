import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongodbApiService {
  private apiEndpoint = 'url';

  constructor(private http: HttpClient) {}

  fetchDataFromMongoDB(): Observable<any> {
    const data = {
      collection: 'listingsAndReviews',
      database: 'sample_airbnb',
      dataSource: 'Cluster0',
      projection: {
        _id: 1
      }
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': 'NfwPdEkd1YWUtBDcCwojCxFVZYzznKY0fYmchM69iSjslLEk3lxhun2zJxIsNxwg'
      })
    };

    return this.http.post(this.apiEndpoint, data, httpOptions);
  }
}
