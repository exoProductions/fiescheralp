import { Component, OnInit } from '@angular/core';

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
      text:"öalsdfj asdjf alsdjf asdf laksjdf kajsdf jasdöfk jaösdkfjaöskdfj asödfj asdfasdk fjöasdfjasdfas dölkfjasödfjasdfadsf adsfjöaksdfasdf asdf asdf asdfadsf asdf  ",
    },
    {
      firstLetter:"V",
      titleOne:"or Ort",
      titleTwo:"Vorhanden",
      text:"öalsdfj asdjf alsdjf asdf laksjdf kajsdf jasdöfk jaösdkfjaöskdfj asödfj asdfasdk fjöasdfjasdfas dölkfjasödfjasdfadsf adsfjöaksdfasdf asdf asdf asdfadsf asdf  ",
    },
    {
      firstLetter:"I",
      titleOne:"hre",
      titleTwo:"Gastgeber",
      text:"öalsdfj asdjf alsdjf asdf laksjdf kajsdf jasdöfk jaösdkfjaöskdfj asödfj asdfasdk fjöasdfjasdfas dölkfjasödfjasdfadsf adsfjöaksdfasdf asdf asdf asdfadsf asdf  ",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
