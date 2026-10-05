import {
  Component,
  computed,
  input
} from '@angular/core';

import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Article } from '../../../core/models/article';

@Component({
  selector: 'app-article-card',

  imports: [
    RouterLink,
    DatePipe
  ],

  templateUrl: './article-card.html',
  styleUrl: './article-card.css'
})
export class ArticleCard {

  article = input.required<Article>();


  isNewArticle = computed(() => {

    const createdDate =
      new Date(this.article().createdOn);

    const today =
      new Date();

    const difference =
      today.getTime() - createdDate.getTime();

    const days =
      difference / (1000 * 60 * 60 * 24);

    return days <= 7;

  });


  summary = computed(() => {

    const content =
      this.article().content ?? '';

    // Remove HTML tags
    const div =
      document.createElement('div');

    div.innerHTML = content;

    const plainText =
      (div.textContent ?? '')
        .replace(/\s+/g, ' ')
        .trim();

    return plainText.length > 150
      ? plainText.substring(0, 150).trim() + '...'
      : plainText;

  });


  coverClass = computed(() => {

    const title =
      this.article().title;

    let hash = 0;

    for (let i = 0; i < title.length; i++) {

      hash +=
        title.charCodeAt(i);

    }

    switch (hash % 3) {

      case 1:
        return 'cover two';

      case 2:
        return 'cover three';

      default:
        return 'cover';

    }

  });

}