import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor(private http: HttpClient) { }
  apiUrl = "http://localhost:5000";

  generateQrCode(content: string) {
    const formData = new FormData();
    formData.append('content', content);
    return this.http.post<any>(`${this.apiUrl}/gerar_qrcode`, formData);
  }

  getQrCodeUrl(filename: string): string {
    return `${this.apiUrl}/obter_qrcode/${filename}`;
  }
}
