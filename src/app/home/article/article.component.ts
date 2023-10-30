import { Component, OnInit } from '@angular/core';
import { ArticleService, Articles } from 'src/app/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Articles[] = []; 

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    console.log('test1');
  this.articleService.getArticles().subscribe((data: Articles[]) => {
      this.articles = data;
      console.log('test');
      console.log(this.articles);
      console.table(data)
    });
  }
}
