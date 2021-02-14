import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  books$;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.books$ = this.dataService.getBooks$();
  }

}
