import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.less']
})
export class InfosComponent implements OnInit {

  @ViewChild("info") infoElem!:ElementRef;

  infos: any[] = [
    {
      title: "Anreise",
      info: "Deine Anreise ins Ferienparadies Aletsch Arena ist sowohl mit dem Auto, wie als auch mittels ÖV ungehindert möglich. Da deine Unterkunft auf dem autofreien Plateau Fiescheralp liegt, stehen dir im Tal Parkplätze zur Verfügung. Vom Bahnhof aus befindet sich die Luftseilbahn direkt in unmittelbarer nähe. Für die An- und Abreise empfiehlt es sich aufgrund der eingeschneiten Strassen auf höhe der Fiescheralp, den Gepäcktransport von der Bergstation zur Ferienunterkunft zu buchen.",
      icon: "trail-sign-outline",
    },
    {
      title: "Ortsinfo",
      info: "Von unserem Appartment aus sind eine vielzahl von Freizeitaktivitäten direkt zugänglich, darunter Restaurants, Skipisten und weitere Vergnügungsmöglichkeiten. Die meisten davon liegen in unmittelbarer Nähe, andere sind durch eine gemütliche Wanderung zu erreichen. Erfahren Sie mehr über mögliche Aktivitäten auf unserer Seite.",
      icon: "location-outline",
    }
    ,
    {
      title: "Hausregeln",
      info: "Das Rauchen im Haus ist untersagt, gerne können Sie für solcherlei Aktivitäten den Vorplatz benutzen. Auch Tiere sind aufgrund von möglichen Schäden nicht erwünscht. Die Nachtruhe beginnt ab 10Uhr Abends.",
      icon: "book-outline",
    },
  ];
  zoom = 10;
//  center: google.maps.LatLngLiteral = { lat: 46.40147919848464, lng: 8.131963355266702 };

  center: any = { lat: 46.40147919848464, lng: 8.131963355266702 };
  options: any = { // google.maps.MapOptions
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  markers: any[] = [];
  markerLinks:string[]=[
    "https://www.google.ch/maps/search/fiescheralp/@46.4051579,8.0710231,12.02z",
  ];
  openInd: number = -1;

  constructor(private navigationService:NavigationService,private router:Router) { }

  ngOnInit(): void {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng ,
      },
      //options: { animation: google.maps.Animation.BOUNCE },
    });
  }

  openMaps(ind:number):void{
    console.log("clicked");
    window.open(this.markerLinks[ind],"_blank");
  }

  openInfo(ind:number):void{
    this.openInd=ind;
    setTimeout(()=>{
      this.infoElem.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    },100);
  }

  goToActivities():void{
    this.router.navigate([this.navigationService.pages[3]]);
  }
getIsSafari():boolean{
  return this.navigationService.isSafari;
}
}
