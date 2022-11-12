import { Component, INJECTOR, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.less']
})
export class SvgIconsComponent implements OnInit {

  @Input() name: string = "home-outline";
  @Input() strokeColor: string = "#ffffff";
  @Input() strokeWidth: number = 16;
  @Input() sizeInd: number = 2;
  sizes: number[] = [8, 14, 16, 20, 26, 40, 50, 100, 150]
  size: number = 0;
  constructor() {

  }

  ngOnInit(): void {
    this.size = this.sizes[this.sizeInd];
    console.log(this.sizeInd);
  }

}
