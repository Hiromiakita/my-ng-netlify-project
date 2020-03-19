import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  @Input () analisisGral: boolean;
  @Input () analisisDeptos: boolean;
  @Input () reporteGral: boolean;
  @Input() resumenPregAbiertasr: boolean;

  /**
   * Output to tell parent component which tab is selected
   */
  @Output() emitSelection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
