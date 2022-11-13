import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.less']
})
export class InfosComponent implements OnInit {

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
  zoom = 1;
  center: google.maps.LatLngLiteral = { lat: 46.40147919848464, lng: 8.131963355266702 };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  markers: any[] = [];

  openInd: number = -1;

  constructor() { }

  ngOnInit(): void {
    /*navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });*/
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      /*label: {
        color: 'red',
        text: 'Fiescheralp ',
      },
      title: 'Marker title ' + (this.markers.length + 1),*/
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }

}
