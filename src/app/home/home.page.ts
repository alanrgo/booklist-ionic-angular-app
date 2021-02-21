import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Book } from '../models/book';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public books;
  public registerBooksCallback: Function;
  public deleteBookCallback: Function;
  public updateBookCallback: Function;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.registerBooksCallback = this.registerBooks.bind(this);
    this.deleteBookCallback = this.deleteBook.bind(this);
    this.updateBookCallback = this.updateBook.bind(this);
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  registerBooks(args: any) : void {
    this.dataService.registerBook(args).subscribe(addedBook => {
      this.books.push(addedBook)
    })
  }

  deleteBook(args: {id: number}) : void {
    this.dataService.deleteBook(args).subscribe(() => {
      this.books = this.books.filter( book => book.id != args.id);
    })
  }

  updateBook(args: Book): void {
    this.dataService.updateBook(args).subscribe(() => {
      const index = this.books.findIndex( (book, _ ) => {
        if(book.id == args.id) return true;
      });
      this.books[index] = args;
    })
  }

}
