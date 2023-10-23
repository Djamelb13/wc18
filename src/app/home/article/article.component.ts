import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service'; // Remplacez par le chemin correct

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: any[] = []; // Déclarez le type approprié pour vos articles

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getArticles().subscribe((data: any[]) => {
      this.articles = data;
    });
  }
}
