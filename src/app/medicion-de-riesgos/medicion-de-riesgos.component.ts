import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-medicion-de-riesgos',
  templateUrl: './medicion-de-riesgos.component.html',
  styleUrls: ['./medicion-de-riesgos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MedicionDeRiesgosComponent implements OnInit {
  FormMedicionRiesgos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.FormMedicionRiesgos = this.formBuilder.group({
      informacionPersonal: this.formBuilder.group({
        genero: [''],
        fechaIngreso: [''],
        nombreColaboraborador: [''],
        departamento: [''],
        puesto: [''],
      }),
      opcMultiple: this.formBuilder.array([]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit($event) {
    setTimeout(() => {
      this.save($event);
    }, 600);
  }

  save($event ) {
    console.log("saving")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyZkgmMmc7NjLucLpNEbj93v6-4sA_-67txLKWfAQ/exec';
    const form = document.forms['submit-to-google-sheet'];
    // console.log(form);
    $event.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        console.log('Success!', response);
        document.getElementById('modalTitle').innerHTML = 'Guardado';
        document.getElementById('modalBody').innerHTML = 'Gracias por su participación';
        document.getElementById('modalBtn').innerHTML = 'Ok.';
        document.getElementById('modalBtn').className = 'btn btn-primary';
      })
    .catch(error => {
        console.error('Error!', error.message);
        document.getElementById('modalTitle').innerHTML = 'Error';
        document.getElementById('modalBody').innerHTML = 'Hubo un error en su envío. Intente de nuevo.';
        document.getElementById('modalBtn').innerHTML = 'Cerrar';
        document.getElementById('modalBtn').className = 'btn btn-secondary';
    });
  }
}
