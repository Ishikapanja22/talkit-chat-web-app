import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ChatService {
  apiUrl = "http://localhost:5002/api/messages";
  constructor(private http: HttpClient) {}
  sendMessage(data: any) {
    return this.http.post(`${this.apiUrl}/send`, data);
  }
  getMessages(senderName: string, receiverName: string) {
    return this.http.get(`${this.apiUrl}/${senderName}/${receiverName}`);
  }
}
