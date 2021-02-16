import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

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
});
