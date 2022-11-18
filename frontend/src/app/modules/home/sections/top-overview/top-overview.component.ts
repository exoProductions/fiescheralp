import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-top-overview',
  templateUrl: './top-overview.component.html',
  styleUrls: ['./top-overview.component.less']
})
export class TopOverviewComponent implements OnInit {



  cardContents: any[] = [];

  constructor(private navigationService: NavigationService, private router: Router) {
    this.cardContents = [
      {
        introSentence: "Für alle die mehr wollen",
        title: "Wandern & Skifahren",
        outroSentence: "Berauschen Sie sich an der schönheit der alpinen Landschaft",
        icon: "accessibility-outline",
        route: navigationService.pages[3] + "/0",
      },
      {
        introSentence: "Unendliche Bergwelten",
        title: "Impressionen",
        outroSentence: "Machen Sie sich selbst ein Bild",
        icon: "image-outline",
        route: navigationService.pages[2],
      },
      {
        introSentence: "Ein gemütliches Dinner, oder darf es etwas wilder sein?",
        title: "Nachtleben",
        outroSentence: "Erleben sie die Fiescheralp bei Nacht",
        icon: "restaurant-outline",
        route: navigationService.pages[3] + "/1",
      },
      {
        introSentence: "Buchen Sie noch heute",
        title: "Reservation",
        outroSentence: "Nur eine Entscheidung stehen zwischen Ihnen und Ihrem Urlaub",
        icon: "bookmarks-outline",
        route: navigationService.pages[1],
      }
    ]
  }


  ngOnInit(): void {
  }

  routeToPage(ind: number): void {
    this.router.navigate([this.cardContents[ind].route]);
  }

}
