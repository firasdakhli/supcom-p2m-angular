import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Formulaire } from "src/app/models/Formulaire";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  private baseUrl = 'http://localhost:9090/api/formulaire';

  constructor(private http: HttpClient) { }
  getFormulaireList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteFormulaire(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  createFormulaire(form:Object):Observable<object>{
    return this.http.post(`${this.baseUrl}`, form);
  }
  getFormulaire(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 updateFormulaire(id: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
