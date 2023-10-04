import { Component } from '@angular/core';
import { BookService } from '../book-service/book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  books = this.book_service.get_books();
  new_book: Book = {
    title: '',
    author: '',
    description: '',
    image_url: '',
  };

  constructor(private book_service: BookService, private router: Router) {}

  add_new_book() {
    this.book_service.add_book(this.new_book);
    this.router.navigate(['/']);
  }
}
