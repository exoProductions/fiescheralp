import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appartment-infos',
  templateUrl: './appartment-infos.component.html',
  styleUrls: ['./appartment-infos.component.less']
})
export class AppartmentInfosComponent implements OnInit {

  contents:any[]=[
    {
      firstLetter:"E",
      titleOne:"ine",
      titleTwo:"Kurze Übersicht",
      text:"Das nahe der Aletscharena gelegene Appartment Fiescheralp bietet Ihnen nebst heimeliger ausstattung auch den nahen Zugang zu etlichen Skipisten Restaurants und weitläufigen Wanderwegen.",
    },
    {
      firstLetter:"V",
      titleOne:"or Ort",
      titleTwo:"Vorhanden",
      text:"Nebst grosszügiger Küche und Wohnraum finden Sie auch vor dem Haus Platz für Ihren privaten Apres-Ski Plausch und geniesserisch ausschweifende Nachmittage",
    },
    {
      firstLetter:"I",
      titleOne:"hre",
      titleTwo:"Gastgeber",
      text:"Ihre Gastgeber, Fritz und Irene Gerber aus dem schönen Hohenrain im Kanton Luzern, sind sehr bemüht, Ihnen einen reibungsfreien und Erinnerungsreichen Urlaub zu ermöglichen",
    }
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToReservation():void{
    this.router.navigate(["Reservation"]);
  }

}
