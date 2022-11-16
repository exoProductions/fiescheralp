import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.less']
})
export class AppartmentComponent implements OnInit {
  imgs:string[]=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
