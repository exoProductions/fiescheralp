import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent implements OnInit {

  numbers: number[] = [
    5,
    5,
    4,
  ];
  subtitles: string[] = [
    "Vermietungen im Sommer",
    "Vermietungen im Winter",
    "Positive Rückmeldungen"
  ];


  quotes: any[] = [
    {
      quote: "Ich fühle mich viel wohler, seit ich weiss, dass ich etwas für die Umwelt getan habe.",
      person: "Alexander Schoch",
      date: "15.03.2017",
      stars: "111100",
    },
    {
      quote: "Eine Wohltat für Körper und Geist. Mens sana in corpore sano",
      person: "Micha Scherer",
      date: "23.10.2019",
      stars: "111110",
    },
    {
      quote: "Ich selbst habe bereits hunderte Bäume gefällt - einen fällen zu lassen ist ein ganz neues Gefühl",
      person: "Franz Gut",
      date: "01.06.2021",
      stars: "111100"
    },
    {
      quote: "Ich kam, sah und siegte! Der Baum ist gefallen - Daumen hoch",
      person: "Riccardo Cicchetti",
      date: "24.12.2022",
      stars: "111111",
    }
  ];
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.gotoTop();
  }

  getIsSafari(): boolean {
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
