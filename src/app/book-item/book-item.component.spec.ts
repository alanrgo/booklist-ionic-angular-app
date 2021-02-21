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

  it('should render edit button', () => {
    let editButton = fixture.nativeElement.querySelector('[data-test="book-item-edit"]');
    expect(editButton).toBeTruthy();
    expect(editButton.querySelector('[data-test="book-item-edit-icon"]')).toBeTruthy();
  })

  it('should call switchToEditMode when clicking in edit button', () => {
    spyOn(component, 'switchToEditMode')
    let editButton = fixture.nativeElement.querySelector('[data-test="book-item-edit"]');
    editButton.click()
    expect(component.switchToEditMode).toHaveBeenCalledTimes(1)
  })

  it('should render book creation component when clicking in edit button', () => {
    let editButton = fixture.nativeElement.querySelector('[data-test="book-item-edit"]');
    editButton.click()
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('[data-test="update-book-component"]')).toBeTruthy();
  })

  it('should render delete button', () => {
    let deleteButton = fixture.nativeElement.querySelector('[data-test="book-item-remove"]');
    expect(deleteButton).toBeTruthy();
    expect(deleteButton.querySelector('[data-test="book-item-remove-icon"]')).toBeTruthy();
  })

  it('should call delete callback when clicking in delete button', () => {
    spyOn(component, 'deleteBook')
    let deleteButton = fixture.nativeElement.querySelector('[data-test="book-item-remove"]');
    deleteButton.click()
    expect(component.deleteBook).toHaveBeenCalledTimes(1)
  })

});
