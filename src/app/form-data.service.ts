import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Teams  {
  id: string;
  name:string;
  flag:string;
}

export interface Groups {
  id:string;
  name:string;
}

export interface Players {
  id:string;
  firstname: string;
  lastname:string;
  championship:string;
  position:string;
}

@Injectable({
  providedIn: 'root'
})


export class FormDataService {

  constructor(private http: HttpClient) { }



  getDataGroup(apiUrl: string): Observable<Groups[]> {
    return this.http.get<Groups[]>(apiUrl);
  }
  getDataTeams(apiUrl:string):Observable<Teams[]> {
    return this.http.get<Teams[]>(apiUrl);
  }

  postDataForm(apiUrl: string, data: any) {
    return this.http.post(apiUrl, data);
  }
}
