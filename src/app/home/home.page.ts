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

  registerBooks() : void {
    this.books.push({
      id: 4,
      title: "book 4",
      description: "book 4 description"
    })
  }

}
