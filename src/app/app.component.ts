import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  private stepper: Stepper;
  cadastroForm: FormGroup;
  formResult: string = '';

  constructor(private fb: FormBuilder){}

  next() {
    this.stepper.next();
  }

  onSubmit() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid){
      this.formResult = JSON.stringify(this.cadastroForm.value)
    }
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })

    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
}
