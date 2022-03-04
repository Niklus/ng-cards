import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl:
        'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg',
      username: 'nature',
      content: 'Check out this awesome tree I saw today.',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'https://images.unsplash.com/photo-1515412512744-6e4adc8b5e55',
      username: 'Biking1222',
      content: 'I did some biking today!',
    },
  ];
}

// images from unsplash
