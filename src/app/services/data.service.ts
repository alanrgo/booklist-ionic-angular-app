import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient ) { }

  getBooks(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8000/api/books');
  }

  registerBook(args: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8000/api/books', args);
  }

  deleteBook(args: any): Observable<any> {
    return this.httpClient.put<any>('http://localhost:8000/api/books/delete', args)
  }

  updateBook(args: Book) {
    return this.httpClient.put<any>('http://localhost:8000/api/books', args);
  }
}
