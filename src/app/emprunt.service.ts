import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emprunt } from './models/emprunt.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  private apiUrl = 'http://localhost:3000/emprunts';

  constructor(private http: HttpClient) { }

  getEmprunts(): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(this.apiUrl);
  }

  addEmprunt(emprunt: Emprunt): Observable<Emprunt> {
    return this.http.post<Emprunt>(this.apiUrl, emprunt, { observe: 'body' });
  }

  updateEmprunt(id: string, emprunt: Partial<Emprunt>): Observable<Emprunt> {
    return this.http.patch<Emprunt>(this.apiUrl + '/' + id, emprunt, { observe: 'body' });
  }
}
