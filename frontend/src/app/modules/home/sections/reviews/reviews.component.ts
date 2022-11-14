import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent implements OnInit {

  numbers:number[]=[
    5,
    5,
    4,
  ];
  subtitles:string[]=[
    "Vermietungen im Sommer",
    "Vermietungen im Winter",
    "Positive Rückmeldungen"
  ];
  texts:string[]=[
    "","",""
    // "Die Anzahl verkaufter T-Shirts als harter Fakt.",
    // "Direkt gekoppelt zur Anzahl verkaufter T-Shirts: Die Anzahl gefällter Bäume",
    // "So viele Kunden haben uns ein hocherfreutes feedback gegeben"
  ];

  quotes:string[]=[
    "Ich fühle mich viel wohler, seit ich weiss, dass ich etwas für die Umwelt getan habe.",
    "Eine Wohltat für Körper und Geist. Mens sana in corpore sano",
    "Ich selbst habe bereits hunderte Bäume gefällt - einen fällen zu lassen ist ein ganz neues Gefühl",
    "Ich kam, sah und siegte! Der Baum ist gefallen - Daumen hoch",
  ];
  quotesPerson:string[]=[
    "Alexander Schoch",
    "Micha Scherer",
    "Franz Gut",
    "Riccardo Cicchetti"
  ];
  quotesPersonDate:string[]=[
    "15.03.2017",
    "23.10.2019",
    "01.06.2021",
    "24.12.2022",
  ]

  constructor(private navigationService:NavigationService) { }

  ngOnInit(): void {
    this.gotoTop();
  }

  getIsSafari():boolean{
    return this.navigationService.isSafari;
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
