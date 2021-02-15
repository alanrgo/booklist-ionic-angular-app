import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BookFixture } from 'src/fixtures/books';
import { Book } from '../models/book';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    component.book = BookFixture[0] as Book
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title of the book', () => {
    let title = fixture.nativeElement.querySelector('[data-test="book-item-title"]');
    expect(title.innerText).toEqual("book 1");
  })

  it('should render a description of the book', () => {
    let description = fixture.nativeElement.querySelector('[data-test="book-item-description"]');
    expect(description.innerText).toEqual("book 1 description");
  })

  it('should render the book id', () => {
    let id = fixture.nativeElement.querySelector('[data-test="book-item-id"]');
    expect(id.innerText).toEqual("BookID: 1");
  })

});
