import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  books$;

  constructor() {}

  ngOnInit(): void {
    this.books$ = of([
      {
        title: "book 1",
        description: "book 1 description"
      },
      {
        title: "book 2",
        description: "book 2 description"
      },
      {
        title: "book 3",
        description: "book 3 description"
      },
    ])
  }

}
