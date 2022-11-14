import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
      info: "Für die Anreise stehen Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      icon: "trail-sign-outline",
    },
    {
      title: "Hausregeln",
      info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      icon: "book-outline",
    },
    {
      title: "Ortsinfo",
      info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      icon: "location-outline",
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

  constructor(private router:Router) { }

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

}
