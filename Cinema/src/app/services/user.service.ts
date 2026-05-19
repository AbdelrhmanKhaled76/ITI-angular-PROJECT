import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../core/api.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = `${API_BASE_URL}/users`;

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
