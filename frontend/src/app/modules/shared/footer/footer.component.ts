import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

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

  constructor(private globalVariableService:GlobalVariablesService) { }

  ngOnInit(): void {
  }

  navigateToPage(ind:number):void{
    window.open(this.globalVariableService.legalityLink+ind, "_blank");
  }

}
