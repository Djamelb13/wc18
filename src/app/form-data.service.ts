import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) { }

  getDataForm(apiUrl: string) {
    return this.http.get(apiUrl);
  }

  postDataForm(apiUrl: string, data: any) {
    return this.http.post(apiUrl, data);
  }
}
