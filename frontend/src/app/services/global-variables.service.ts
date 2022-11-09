import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  websiteName:string="Fiescheralp"
  websiteNameShort:string="Fiescheralp";
  isWiderThan800:boolean=true;

  constructor() { }

  onSizeChange(windowSize:number):void{
    this.isWiderThan800=windowSize>1200;
  }
}
