import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

}
