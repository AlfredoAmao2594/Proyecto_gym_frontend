

import { formatDate, getLocaleDateFormat } from '@angular/common';
import { VentaMembresiaService } from './venta-membresia.service';
import { Component, OnInit ,LOCALE_ID, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-venta-membresia',
  templateUrl: './venta-membresia.component.html',
  styleUrls: ['./venta-membresia.component.scss'],
  //providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }]
})



//export class VentaMembresiaComponent {}
export class VentaMembresiaComponent implements OnInit {

  ventamForm!: FormGroup;
  planes: any;
  miembros:any;
  nroDocumento: string ='';
  today = moment().format('YYYY-MM-DD');


  constructor(
    public fb: FormBuilder,
    //public planesService: ,
    //public miembrosService:,
    public ventaMembresiaService: VentaMembresiaService,
    public serviceToast: ToastrService
    //
  ){

  }

  // Ejemplo de formateo de fecha

  ngOnInit(): void {
    this.ventamForm = this.fb.group({
      fechaInicio: [this.today, Validators.required],
      fechaVencimiento: [this.today, Validators.required],
      estado: [1, Validators.required],
      miembroId: ['', Validators.required],
      planesId: ['', Validators.required],
      usuarioId: ['', Validators.required],
      monto: ['', Validators.required],
      metodoPago: ['', Validators.required],
      nroDocumento: ['', Validators.required],
      duracionPlan: ['', Validators.required],
      nombreM:['', Validators.required],
      apellidoM: ['', Validators.required],


    }
    );
    console.log(this.nroDocumento)

    this.ventaMembresiaService.getAllPlanes().subscribe(resp => {
      this.planes= resp;
    },

    )
  }


  buscarMiembro() {
    console.log('Buscando miembro...');
    const nroDocumento = this.ventamForm.get('nroDocumento')?.value;
    this.ventaMembresiaService.getAllMiembros(nroDocumento).subscribe(resp => {
      console.log('Datos del miembro:', resp);

      if (resp && resp.length > 0) {
        const primerMiembro = resp[0];

        this.ventamForm.patchValue({
          miembroId: primerMiembro.miembroId,
          nombreM: primerMiembro.nombre,
          apellidoM: primerMiembro.apellido
        });
      } else {
        console.log('No se encontraron datos para el número de documento proporcionado.');
        this.serviceToast.error('No se encontraron datos para el número de documento proporcionado','Error!')
      }
    });
  }



  onValorChange(idPlan: any): void{
    if(idPlan){
      const planSeleccionado = this.planes.find((plan:{ planesId : Number}) => plan.planesId == idPlan);
    this.ventamForm.patchValue({
      monto: planSeleccionado.precio,
      duracionPlan: planSeleccionado.tiempo  + ' '+ planSeleccionado.diaMes
    });
    }
  }




  guardarVenta():void{
    const Body = {

      fechaInicio: this.ventamForm.value.fechaInicio,
      fechaVencimiento: this.ventamForm.value.fechaVencimiento,
      estado: this.ventamForm.value.estado,
      miembros: {
        miembroId: this.ventamForm.value.miembroId
      },
      planes: {
        planesId: this.ventamForm.value.planesId
      },
      usuarios: {
        usuarioId: this.ventamForm.value.usuarioId
      },
      pagos: [
        {
          fechaPago: this.today,
          monto:this.ventamForm.value.monto,
          metodoPago: this.ventamForm.value.metodoPago
        }
      ]

    };
    console.log(Body)
    this.ventaMembresiaService.crearVentaMembresia(Body).subscribe(resp=>{
      this.serviceToast.success('Registro Exitoso!!','OK!!');
      this.ventamForm.reset();
    },
    error => {
      console.error(error)
      this.serviceToast.error('Ocurrio un Error','OK!!')
    }
    )
  }


}

