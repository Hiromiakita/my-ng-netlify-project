import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analisis-departamento',
  templateUrl: './analisis-departamento.component.html',
  styleUrls: ['./analisis-departamento.component.scss']
})
export class AnalisisDepartamentoComponent implements OnInit {

  @Input() title; 
  @Input()type;
  @Input() data;
  @Input() columnNames;
  @Input() options;
  @Input() width;
  @Input() height;
  @Input() tablaMayor;
  @Input() tablaMenor;

  constructor() { }

  ngOnInit(): void {
  }

}
