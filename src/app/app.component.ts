import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  };

  post = {
    title: "Title",
    isFavourite: true
  };

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  onFavoriteChange( newArgs: FavoriteChangedEventArgs ) {
    console.log("Favorite changed: ", newArgs);
  }

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
