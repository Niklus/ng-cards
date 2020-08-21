import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Niklus/ng-cards@master/src/assets/tree.jpeg',
      username: 'nature',
      content: 'Check out this awesome tree I saw today.'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Niklus/ng-cards@master/src/assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Niklus/ng-cards@master/src/assets/biking.jpeg',
      username: 'Biking1222',
      content: 'I did some biking today!'
    }
  ]
}
