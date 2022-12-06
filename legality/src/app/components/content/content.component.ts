import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ALL_TEXTS } from 'src/app/models/allTexts';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  switchIsTrue: boolean = true;
  curTabId:number=0;
  title = 'legality';
  currentTab = "privacy";
  language = "DE";
  private routeSub!: Subscription;



  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {

      this.curTabId = params['id'];
      
      if (this.curTabId == 0) {
        this.currentTab = "privacy"
      }
      if (this.curTabId == 1) {
        this.currentTab = "impressum"
      }
      if (this.curTabId == 2) {
        this.currentTab = "AGB"
      }
    });
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }




  setCurrentTab(tab: string): void {
    this.currentTab = tab;
  }

  getCurrentTab(): string {
    return this.currentTab;
  }

  getArticle(): Article[] {
    switch (this.getCurrentTab()) {
      case "privacy": {
        return ALL_TEXTS.legalityPrivacyArticle;
      }
      case "impressum": {
        return ALL_TEXTS.legalityImpressumArticle;
      }
      case "AGB": {
        return ALL_TEXTS.legalityAGBArticle;
      }
      default: {
        return ALL_TEXTS.legalityImpressumArticle;
      }
    }
  }

}
