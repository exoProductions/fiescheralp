import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent implements OnInit {

  numbers: number[] = [
    4,
    36,
    15,
  ];
  subtitles: string[] = [
    "Vermietungen im Sommer",
    "Vermietungen im Winter",
    "Wiederkehrende Gäste"
  ];


  quotes: any[] = [
    {
      quote: "Was für ein Panorama, die Fiescheralp hat mich definitiv nicht das letzte mal gesehen!",
      person: "Stefanie Fessler",
      date: "17.03.2023",
      stars: "111110",
    },
    {
      quote: "Wer einmal die überwältigende grösse eines Gletschers gespührt hat, der fühlt sich der Unendlichkeit ein gutes Stück näher.",
      person: "Dominic Gut",
      date: "19.03.2023",
      stars: "111110",
    },
    {
      quote: "Alles Reibungslos verlaufen, gerne wieder",
      person: "Micha Scherer",
      date: "01.06.2021",
      stars: "111100"
    },
    {
      quote: "Ein Paradies für Skifahrer und Wanderer. Die Wohnung hat gehalten was Sie versprochen hat.",
      person: "Riccardo Cicchetti",
      date: "24.01.2022",
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
