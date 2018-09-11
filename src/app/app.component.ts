import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: true
  }

  onFavoriteChange( newArgs: FavoriteChangedEventArgs ) {
    console.log("Favorite changed: ", newArgs);
  }
}
