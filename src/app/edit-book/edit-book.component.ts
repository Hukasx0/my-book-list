import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book-service/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  edited_book: Book | null = null;
  book_id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private book_service: BookService) {}

  ngOnInit(): void {
      const id_str: string | null = this.route.snapshot.paramMap.get('id');
      const id = id_str ? parseInt(id_str, 10) : 0;
      this.book_id = id;
      this.edited_book = this.book_service.get_book_by_id(id);
  }

  edit_book() {
    if (this.edited_book) {
      this.book_service.edit_book(this.book_id, this.edited_book);
      this.router.navigate(['/']);
    }
  }
}
