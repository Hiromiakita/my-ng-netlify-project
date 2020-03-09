import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
