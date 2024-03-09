import { Component, OnInit } from '@angular/core';
import { Planes } from '../../model/planes';
import { PlanesService } from '../../services/planes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planes-get',
  templateUrl: './planes-get.component.html',
  styleUrls: ['./planes-get.component.scss']
})

export class PlanesGetComponent implements OnInit{
  listplanes: Planes[] =[];
  currentIndex = -1;
  nombreplan ='';

  submitted =false;
  constructor(private planesService: PlanesService){}
  ngOnInit(): void {
    this.list();
  }

  list():void{
    this.planesService.readAll()
    .subscribe({
      next: (planes) => {
        this.listplanes = planes;
        console.log(planes);
      },
      error: (error) => {
        console.log(error);
      }

    });
  }
  refresh(): void {

    this.list();
    this.currentIndex = -1;
  }


  getAllData(): void {
     this.listplanes = [];
     this.planesService.readAll()
       .subscribe(
         res => {
           this.listplanes = res;
         },
         err => {

         }
       );
   }

   delete(Planes: any) {
    console.log(Planes)
    this.planesService.delete(Planes.planesId).subscribe(res => {
            console.log(res);
            Swal.fire({
              title:'Atenccion !!',
              text: '¿Está seguro que desea eliminar el producto?',
              showCloseButton: true,
              showCancelButton: true
            }).then((willDelete) => {
              console.log(willDelete);
              if (willDelete.value) {
                this.planesService.delete(0).subscribe({
                  next: (response) => {
                    console.log(response);
                    Swal.fire('ok!', 'Registro eliminado satisfactoriamente', 'success')
                    .then(() => {
                      this.getAllData();
                    });
                  },
                  error: () => {
                    Swal.fire('Error!', 'No se puedo borrar el proveedor', 'error');
                  }
                });
              }
          });
        });

}
}

