import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticacionService } from '../../../services/auth/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;
  private authService = inject(AuthenticacionService);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();

  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
  }

  public enviarFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }

    console.log(this.myForm.value);
  }

  public get f():any{
    return this.myForm.controls;
  }

  signInWithGoogle(){
    this.authService.logInWithGoogle();
  }
}
