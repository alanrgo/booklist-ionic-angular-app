import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient ) { }

  getBooks(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/books`);
  }

  registerBook(args: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/books`, args);
  }

  deleteBook(args: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/books/delete`, args)
  }

  updateBook(args: Book) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/books`, args);
  }
}
