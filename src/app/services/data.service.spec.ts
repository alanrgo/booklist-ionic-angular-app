import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookFixture } from 'src/fixtures/books';

import { DataService } from './data.service';
import { of } from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
  });

  it('should return a list of books after calling proper endpoint', () => {
    httpClient = TestBed.inject(HttpClient);
    const booksMock = BookFixture;
    spyOn(httpClient, 'get').and.returnValue(of(booksMock))

    service = TestBed.inject(DataService);
    const spy = jasmine.createSpy('spy')

    service.getBooks().subscribe(spy);

    expect(spy).toHaveBeenCalledWith(booksMock);
  });

  it('should call add book by calling proper endpoint', () => {
    httpClient = TestBed.inject(HttpClient);
    const booksMock = BookFixture;
    spyOn(httpClient, 'post').and.returnValue(of(booksMock))

    service = TestBed.inject(DataService);
    const spy = jasmine.createSpy('spy')

    service.registerBook({title: "title", description: "description"}).subscribe(spy);

    expect(spy).toHaveBeenCalledWith(booksMock);
  });

  it('should call delete book by calling proper endpoint', () => {
    httpClient = TestBed.inject(HttpClient);
    const args = {id: 1};
    spyOn(httpClient, 'put').and.returnValue(of({}))

    service = TestBed.inject(DataService);
    const spy = jasmine.createSpy('spy');

    service.deleteBook(args).subscribe(spy);

    expect(spy).toHaveBeenCalledWith({});
    expect(httpClient.put).toHaveBeenCalledWith(jasmine.any(String), args)
  });

  it('should call update book by calling proper endpoint', () => {
    httpClient = TestBed.inject(HttpClient);
    const args = BookFixture[0];
    spyOn(httpClient, 'put').and.returnValue(of({}))

    service = TestBed.inject(DataService);
    const spy = jasmine.createSpy('spy');

    service.updateBook(args).subscribe(spy);

    expect(spy).toHaveBeenCalledWith({});
    expect(httpClient.put).toHaveBeenCalledWith(jasmine.any(String), args)
  });
});
