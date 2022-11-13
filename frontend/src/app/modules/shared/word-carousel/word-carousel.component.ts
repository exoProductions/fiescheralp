import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-carousel',
  templateUrl: './word-carousel.component.html',
  styleUrls: ['./word-carousel.component.less']
})
export class WordCarouselComponent implements OnInit {

  @Input() word1:string="Ausspannen";
  @Input() word2:string="Geniessen";
  @Input() word3:string="Fiescheralp";

  constructor() { }

  ngOnInit(): void {
  }

}
