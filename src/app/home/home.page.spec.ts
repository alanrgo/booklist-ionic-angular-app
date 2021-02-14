import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the book list title', () => {
    let header = fixture.nativeElement.querySelector('[data-test="book-list-header"');
    expect(header.innerText).toEqual("Book List");
  })

  it('should render the book list app name', () => {
    let navBar = fixture.nativeElement.querySelector('[data-test="book-list-nav"');
    expect(navBar.innerText).toEqual("iBook");
  })

  it('should display 3 books registered by the user', () => {
    let books = fixture.nativeElement.querySelectorAll('[data-test="book-item"]');
    expect(books.length).toEqual(3);
  })

  it('should render the title of the book', () => {
    let firstBook = fixture.nativeElement.querySelector('[data-test="book-item"]');
    expect(firstBook.querySelector('[data-test="book-item-title"]').innerText).toEqual("book 1");
  })

  it('should render a description of the book', () => {
    let firstBook = fixture.nativeElement.querySelector('[data-test="book-item"]');
    expect(firstBook.querySelector('[data-test="book-item-description"]').innerText).toEqual("book 1 description");
  })
});
