import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Jurry } from "src/app/models/Jurry";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JurryServiceService {
  private baseUrl = 'http://localhost:9090/api/jurry';

  constructor(private http: HttpClient) { }
  getJurrysList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteEmployee(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  createJurry(jurry:Object):Observable<object>{
    return this.http.post(`${this.baseUrl}`, jurry);
  }
  getJurry(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateJurry(id: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  

}
