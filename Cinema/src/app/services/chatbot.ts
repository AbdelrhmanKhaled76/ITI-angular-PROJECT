import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../core/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private http = inject(HttpClient);
  private apiUrl = `${API_BASE_URL}/chatbot`;

  sendMessage(userMessage: string): Observable<any> {
    return this.http.post(this.apiUrl, { message: userMessage });
  }
}