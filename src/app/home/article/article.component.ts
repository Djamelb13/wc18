import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from 'src/app/article.service';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Article[] = []; 


  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    console.log('test1');
    this.articleService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
      console.log('test');
      console.log(this.articles);
      console.table(data);
    });
    
  }
}
