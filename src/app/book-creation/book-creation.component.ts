import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-creation',
  templateUrl: './book-creation.component.html',
  styleUrls: ['./book-creation.component.scss'],
})
export class BookCreationComponent implements OnInit {

  constructor() { }

  @Input()
  public registerClick: Function;

  ngOnInit() {}

  registerBook() {
    this.registerClick();
  }

}
