import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasvuruFormService {
  private baseUrl: string  // Doğru URL yazın

  constructor(private http: HttpClient) { }

  // HttpClient'i döndüren fonksiyon (genellikle ihtiyaç duyulmaz)
  getHttp(): HttpClient {
    return this.http;
  }

  // Temel URL'yi döndüren fonksiyon
  getBaseUrl(): string {
    return this.baseUrl ='http://localhost:8080/';
  }

  // Varlık adını döndüren fonksiyon
  getEntityName(): string {
    return 'basvuru';
  }

  // Tüm verileri almak için HTTP GET isteği
  getAll() {
    return this.http.get<any>(this.getBaseUrl() + this.getEntityName() + '/getAll');
  }

  updateStatus(id: number,durum: Durumlar ) {
    let request = {
      id: id,
      durum: durum
    };
    return this.http.put(this.getBaseUrl() + this.getEntityName() + '/updateStatus', request);
  }


}
