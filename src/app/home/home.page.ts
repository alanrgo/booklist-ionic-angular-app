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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.registerBooksCallback = this.registerBooks.bind(this);
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  registerBooks(args: any) : void {
    this.dataService.registerBook(args).subscribe(addedBook => {
      this.books.push(addedBook)
    })
  }

}
