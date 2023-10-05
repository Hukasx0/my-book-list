import { Injectable } from "@angular/core";
import { Book } from "../book";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor() {}

    private get_books_from_local_storage(): Book[] {
        const books_json = localStorage.getItem('books');
        return books_json ? JSON.parse(books_json) : [];
    }

    private save_books_to_local_storage(books: Book[]) {
        localStorage.setItem('books', JSON.stringify(books));
    }

    get_books(): Book[] {
        return this.get_books_from_local_storage();
    }

    get_book_by_id(id: number): Book {
        return this.get_books_from_local_storage()[id];
    }

    add_book(new_book: Book) {
        const books = this.get_books_from_local_storage();
        books.push(new_book);
        this.save_books_to_local_storage(books);
    }

    remove_book(id: number) {
        const books = this.get_books_from_local_storage();
        books.splice(id, 1);
        this.save_books_to_local_storage(books);
    }

    edit_book(id: number, edited_book: Book) {
        const books = this.get_books_from_local_storage();
        books[id] = edited_book;
        this.save_books_to_local_storage(books);
    }
}
