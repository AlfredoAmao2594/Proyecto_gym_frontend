import { Component,OnInit }  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Planes } from '../../model/planes';
import { PlanesService } from '../../services/planes.service';

@Component({
  selector: 'app-planes-put',
  templateUrl: './planes-put.component.html',
  styleUrls: ['./planes-put.component.scss']
})
export class PlanesPutComponent implements OnInit{
  putplanform!: FormGroup;


  submitted =false;
  constructor(public planesService: PlanesService,
    public fb: FormBuilder,
    ){}

   ngOnInit(): void{
    this.putplanform = this.fb.group({
      nombreplan: ['', Validators.required],
      tiempo: ['', Validators.required],
      diaMes: ['', Validators.required],
      precio: [0, Validators.required],

    })
  }
  updatePlanes(): void {
    const data = {
    nombreplan: this.putplanform.value.nombreplan,
    tiempo: this.putplanform.value.tiempo,
    diaMes: this.putplanform.value.diaMes,
    precio: this.putplanform.value.precio,

    };
     this.planesService.create(data)
       .subscribe({
         next: (response) => {
         console.log(response);
         this.submitted = true;
         },
         error: (error) => {
         console.log(error);
         }
  })
 }
}
