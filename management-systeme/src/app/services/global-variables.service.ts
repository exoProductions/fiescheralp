import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  adminNickname:string="fritzgerber";
  adminPassword:string="appartment-fiescheralp";
  constructor() { }
}
