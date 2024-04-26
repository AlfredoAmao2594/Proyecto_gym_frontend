import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/Auth/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  userForm!: FormGroup; // Asegúrate de tener el nombre correcto para el FormGroup

  submitted = false;  

  constructor(
    public fb: FormBuilder,
    public dialog: MatDialog,
    public serviceAuth: LoginService,
    public toast : ToastrService
  ){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['',Validators.required],

    });
  }

  close():void{
    this.dialog.closeAll();
  }

  signup():void{
    this.submitted = true;
    if(this.userForm.value.nombre == ''){
      this.toast.warning('Debe Ingresar Nombre','Advertencia!');
      return;
    }

    if(this.userForm.value.apellido == ''){
      this.toast.warning('Debe Ingresar Apellido','Advertencia!');
      return;
    }


    if(this.userForm.value.email == ''){
      this.toast.warning('Debe Ingresar Correo','Advertencia!');
      return;
    }

    if(this.userForm.value.username == ''){
      this.toast.warning('Debe Ingresar Usuario','Advertencia!');
      return;
    }

    if(this.userForm.value.password == ''){
      this.toast.warning('Debe Ingresar Password','Advertencia!');
      return;
    }

    let data = {
      nombre: this.userForm.value.nombre,
      apellido: this.userForm.value.apellido,
      email: this.userForm.value.email,
      username: this.userForm.value.username,
      password: this.userForm.value.password,
    };

    this.serviceAuth.singup(data).subscribe(
      resp=>{
        this.dialog.closeAll()
      }
    )
  }
}
