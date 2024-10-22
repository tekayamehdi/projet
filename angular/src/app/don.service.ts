import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonService {

  private baseUrl = 'http://localhost:8080/api/test/dons';

  constructor(private http: HttpClient) { }

  getDon(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDon(don: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, don);
  }
  deletedon(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  getDonsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
