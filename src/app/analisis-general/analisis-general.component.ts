import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analisis-general',
  templateUrl: './analisis-general.component.html',
  styleUrls: ['./analisis-general.component.scss']
})
export class AnalisisGeneralComponent implements OnInit {
@Input() tablaMayor;
@Input() tablaMenor;

  constructor() { }

  ngOnInit(): void {
  }

}
