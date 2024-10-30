import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from '../models/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private apiUrl = 'http://localhost:8080/api/applicants';

  constructor(private http: HttpClient) {}

  getApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.apiUrl);
  }

  createApplicant(formData: FormData): Observable<Applicant> {
    return this.http.post<Applicant>(this.apiUrl, formData);
  }
}
