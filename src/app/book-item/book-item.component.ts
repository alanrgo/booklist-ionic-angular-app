import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;

  @Input() deleteClick: Function;

  constructor() { }

  ngOnInit() {}

  deleteBook() {
    this.deleteClick({id: this.book.id})
  }

}
