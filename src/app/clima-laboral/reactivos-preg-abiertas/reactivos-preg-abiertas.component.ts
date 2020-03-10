import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactivos-preg-abiertas',
  templateUrl: './reactivos-preg-abiertas.component.html',
  styleUrls: ['./reactivos-preg-abiertas.component.scss']
})
export class ReactivosPregAbiertasComponent implements OnInit {
  @Input () reactivo: FormGroup;
  @Input () limiteInf: number;
  @Input () limiteSup: number;
  pregAbiertas: FormArray;
  reactivos: { grupoDeMedicion: string, numGrupo: number, numPreg: number, reactivo: string, }[] = [];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
