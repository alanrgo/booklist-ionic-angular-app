import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      title: "",
      description: ""
    });
  }
}
