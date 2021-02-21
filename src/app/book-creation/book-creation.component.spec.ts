import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookFixture } from 'src/fixtures/books';

import { BookCreationComponent } from './book-creation.component';

describe('BookCreationComponent', () => {
  let component: BookCreationComponent;
  let fixture: ComponentFixture<BookCreationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCreationComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BookCreationComponent);
    component = fixture.componentInstance;
    component.book = BookFixture[0];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register function when clicking in button', () => {
    spyOn(component, "registerBook");
    let button = fixture.debugElement.nativeElement.querySelector("[data-test='create-book-item-button']")
    button.click();
    expect(component.registerBook).toHaveBeenCalledTimes(1);
  })

  it('it should render book content when passing one as input', () => {
    let titleInput = fixture.debugElement.nativeElement.querySelector("[data-test='book-title-input']")
    let descriptionInput = fixture.debugElement.nativeElement.querySelector("[data-test='book-description-input']")
    expect(titleInput.value).toEqual(BookFixture[0].title);
    expect(descriptionInput.value).toEqual(BookFixture[0].description);
  })
});
