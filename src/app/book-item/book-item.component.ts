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

  @Input() updateClick: Function;

  updateBookCallback: Function;

  isDisplayMode = true;

  constructor() { }

  ngOnInit() {
    this.updateBookCallback = this.updateBook.bind(this)
  }

  deleteBook() {
    this.deleteClick({id: this.book.id})
  }

  updateBook(args) {
    const bookParams = {...args, id: this.book.id}
    this.updateClick(bookParams)
    this.isDisplayMode = true;
  }

  switchToEditMode(){
    this.isDisplayMode = false;
  }

}
