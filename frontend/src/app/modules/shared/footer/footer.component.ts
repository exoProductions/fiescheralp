import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  sectionTitles:string[]=[
    "FAQ",
    "AGB",
    "Datenschutz",
    "Impressum"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateToPage(ind:number):void{
    window.open("https://www.legality.exo-productions.ch/"+ind, "_blank");
  }

}
