import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private fb: FormBuilder) { }

  formContact: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.minLength(5)],],
    email: ["", [Validators.required, Validators.email],],
    asunto: ["", [Validators.required, Validators.minLength(5)],],
    descripcionConsulta: ["", [Validators.required, Validators.minLength(5)],]
  })

  sendEmail = (): void => {
    if (this.formContact.invalid) {
      this.formContact.markAllAsTouched();
      return;
    }
    this.getNotification();
    this.formContact.reset({
      nombre: "",
      email: "",
      asunto: "",
      descripcionConsulta: "",
    })
  }

  getNotification = (): void => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu consulta ha sido enviada con éxito",
      showConfirmButton: false,
      timer: 2500,
      background: "whitesmoke",
      color: "gray"
    });
  }

}
