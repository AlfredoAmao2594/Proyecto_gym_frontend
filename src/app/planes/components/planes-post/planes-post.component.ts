import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Planes } from '../../model/planes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planes-post',
  templateUrl: './planes-post.component.html',
  styleUrls: ['./planes-post.component.scss']
})
export class PlanesPostComponent implements OnInit {

  postplanform!: FormGroup;


  submitted =false;
  constructor(public planesService: PlanesService,
    public fb: FormBuilder,
    ){}

   ngOnInit(): void{
    this.postplanform = this.fb.group({
      nombreplan: ['', Validators.required],
      tiempo: ['', Validators.required],
      diaMes: ['', Validators.required],
      precio: [0, Validators.required],

    })
  }
  createPlanes(): void {
    const data = {
    nombreplan: this.postplanform.value.nombreplan,
    tiempo: this.postplanform.value.tiempo,
    diaMes: this.postplanform.value.diaMes,
    precio: this.postplanform.value.precio,

    };
     this.planesService.create(data)
       .subscribe({
         next: (response) => {
         console.log(response);
         this.submitted = true;
         Swal.fire({
          title: 'Plan Registrado!',
          text: 'El Plan se ha registrado exitosamente.',
          icon: 'success'
        });
         },

         error:(error)  => {

         console.log(error);
         }
  })

 }

}
