import { Component } from '@angular/core';
import { BookService } from '../book-service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = this.book_service.get_books();

  constructor(private book_service: BookService) {}

  remove_book(id: number) {
    this.book_service.remove_book(id);
  }
}
