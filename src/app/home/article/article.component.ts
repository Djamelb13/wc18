import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  articles: any[];

  constructor(private dataService: DataService) {
    this.articles = this.dataService.getArticles();
  }
}
