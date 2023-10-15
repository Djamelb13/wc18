import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  articles: any[] = [
    {
      title: "Article 1",
      author: "Auteur 1",
      content: "Ceci est le contenu de l'article 1. Il peut contenir des informations intéressantes sur divers sujets."
    },
    {
      title: "Article 2",
      author: "Auteur 2",
      content: "Ceci est le contenu de l'article 2. Il peut contenir des informations intéressantes sur divers sujets."
    },
    {
      title: "Article 3",
      author: "Auteur 3",
      content: "Ceci est le contenu de l'article 3. Il peut contenir des informations intéressantes sur divers sujets."
    }
  ];

  constructor() { }
}
