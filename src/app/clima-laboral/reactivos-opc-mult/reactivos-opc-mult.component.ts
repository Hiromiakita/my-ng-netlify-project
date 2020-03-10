import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactivos-opc-mult',
  templateUrl: './reactivos-opc-mult.component.html',
  styleUrls: ['./reactivos-opc-mult.component.scss']
})
export class ReactivosOpcMultComponent implements OnInit {
  @Input () reactivo: FormGroup;
  @Input () limiteInf: number;
  @Input () limiteSup: number;

  constructor(
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

  newSelected($event, reactivo) {
    console.log($event);
    console.log(reactivo);
  }

}

