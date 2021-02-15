import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient ) { }

  getBooks$(): any {
    return this.httpClient.get<any>('http://localhost:8000/api/books');
  }

}
