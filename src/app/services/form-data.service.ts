
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private apiUrl = 'http://localhost:8080/api/'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Create
  createFormData(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  // Read (Get all form data)
  getFormData(): Observable<FormData[]> {
    return this.http.get<FormData[]>(this.apiUrl);
  }

  // Read (Get form data by ID)
  getFormDataById(id: number): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<FormData>(url);
  }

  // Update
  updateFormData(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  // Delete
  deleteFormData(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
