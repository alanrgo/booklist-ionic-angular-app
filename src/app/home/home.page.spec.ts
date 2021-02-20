import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { BookFixture } from 'src/fixtures/books';
import { DataService } from '../services/data.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let dataService: jasmine.SpyObj<DataService>;
  let mockedBooks = BookFixture;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: DataService,
          useFactory: () => spyOnClass(DataService)
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    dataService.getBooks.and.returnValue(of(mockedBooks))
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the book list title', () => {
    let header = fixture.nativeElement.querySelector('[data-test="book-list-header"');
    expect(header.innerText).toEqual("My Book List");
  })

  it('should render the book list app name', () => {
    let navBar = fixture.nativeElement.querySelector('[data-test="book-list-nav"');
    expect(navBar.innerText).toEqual("iBook");
  })

  it('should display 3 books registered by the user', () => {
    let books = fixture.nativeElement.querySelectorAll('[data-test="book-item"]');
    expect(books.length).toEqual(3);
  })

  it('should display create button', () => {
    let button = fixture.nativeElement.querySelectorAll('[data-test="create-book-item-button"]');
    expect(button).toBeTruthy();
  })
});
