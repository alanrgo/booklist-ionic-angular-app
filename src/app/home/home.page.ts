import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.registerBooksCallback = this.registerBooks.bind(this);
    this.deleteBookCallback = this.deleteBook.bind(this);
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
    this.dataService.deleteBook(args).subscribe(res => {
      this.books = this.books.filter( book => book.id != args.id);
      console.log(this.books)
    })
  }

}
