import { Component, OnInit } from '@angular/core';
import { BookService } from './book-service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private book_service: BookService) {}

  ngOnInit(): void {
    if (!localStorage.getItem('books')) {
      this.book_service.add_book(
        {
          title: 'The King in Yellow',
          author: 'Robert W. Chambers',
          description: 'The King in Yellow is a book of short stories by the American writer Robert W. Chambers, first published by F. Tennyson Neely in 1895. The book is named for the fictional play with the same title which recurs as a motif through some of the stories. The first half of the book features highly esteemed horror stories, and the book has been described by critics such as E. F. Bleiler and T. E. D. Klein as a classic in the field of the supernatural. Lin Carter called it \"an absolute masterpiece, probably the single greatest book of weird fantasy written in this country between the death of Poe and the rise of Lovecraft\".\nThere are 10 stories, the first four of which (\"The Repairer of Reputations\", \"The Mask\", \"In the Court of the Dragon\", and \"The Yellow Sign\") mention The King in Yellow, a forbidden play which induces despair or madness in those who read it.\ndescription source:\thttps://en.wikipedia.org/wiki/The_King_in_Yellow',
          image_url: 'https://m.media-amazon.com/images/I/81vOTbYBiWL._AC_UF1000,1000_QL80_.jpg'
        }
      );
    }
  }
}
