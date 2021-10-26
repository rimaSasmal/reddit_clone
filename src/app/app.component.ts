import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit-clone';
  articles:Article[];

  constructor(){
    this.articles=[new Article("https://java.com",1,"java"),
                  new Article("https://spring.io",2,"spring boot"),
                  new Article("https://angular.io",3,"angular")
      ];
      
  }

  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    this.articles.push(new Article(link.value,0,title.value));
    console.log(`${title.value} and ${link.value}`);
    return false;
  }
  sortArticles():Article[]{
    return this.articles.sort((a: Article,b :Article) => b.votes-a.votes); 
  }
}
