import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { NavigationService } from 'src/app/services/navigation.service';

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

  constructor(private globalVariableService:GlobalVariablesService,private navigationService:NavigationService) { }

  ngOnInit(): void {
  }

  navigateToPage(ind:number):void{
    window.open(this.globalVariableService.legalityLink+ind, "_blank");
  }

  getShowSmallFooter():boolean{
    if(this.navigationService.curPageInd==3){
      return true;
    }
    return false;
  }
}
