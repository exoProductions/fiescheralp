import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  websiteName:string="Fiescheralp"
  websiteNameShort:string="Fiescheralp";
  isWiderThan800:boolean=true;
  legalityLink:string="https://www.legality.exo-productions.ch/";
  eMail:string="benigerber@livenet.ch";
  
  constructor() { }

  onSizeChange(windowSize:number):void{
    this.isWiderThan800=windowSize>1200;
  }
}
