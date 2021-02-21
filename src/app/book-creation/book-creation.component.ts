import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-creation',
  templateUrl: './book-creation.component.html',
  styleUrls: ['./book-creation.component.scss'],
})
export class BookCreationComponent implements OnInit {

  bookCreationForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  public registerClick: Function;

  @Input()
  public book: Book;

  public validated: boolean;

  ngOnInit() {
    this.initializeForm();
  }

  registerBook() {
    let title = this.bookCreationForm.controls['title'].value;
    let description = this.bookCreationForm.controls['description'].value;
    this.registerClick({title, description});
    this.initializeForm();
  }

  initializeForm(): void {

    this.bookCreationForm = this.formBuilder.group({
      title: this.book ? this.book.title : "",
      description: this.book ? this.book.description : "",
    });
    this.validated = false;
  }

  inputChange() : void {
    let title = this.bookCreationForm.controls['title'].value;
    let description = this.bookCreationForm.controls['description'].value;
    this.validated = title != "" && description != ""
  }
}
