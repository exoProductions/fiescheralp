import { Userdata } from "./userdata.model";

export class ReservationData {
    days:number[]=[];
    months:number[]=[];
    years:number[]=[];
    firstname:string="";
    lastname:string="";
    eMail:string="";
    adminEMail:string="";
    acceptedAGB:boolean=false;
}
