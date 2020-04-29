import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Mark } from "src/app/models/Mark";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarkService {
  private baseUrl = 'http://localhost:9090/api/mark';

  constructor(private http: HttpClient) { }
  getMarkList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteMark(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
  getMark(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
}
