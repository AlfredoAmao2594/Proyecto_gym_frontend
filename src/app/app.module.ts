import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LoginModule } from './login/login.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/Auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/Auth/error-interceptor.service';
import { NavComponent } from './shared/nav/nav.component';

import { HeaderComponent } from './shared/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { VentaMembresiaComponent } from './venta-membresia/venta-membresia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultasPlanesComponent } from './consultas-planes/consultas-planes.component';
import { ConsultasMiembrosComponent } from './consultas-miembros/consultas-miembros.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanesComponent } from './planes/planes.component';
import { PlanesPostComponent } from './planes/components/planes-post/planes-post.component';
import { PlanesGetComponent } from './planes/components/planes-get/planes-get.component';
import { PlanesPutComponent } from './planes/components/planes-put/planes-put.component';
import { MiembroModule } from './miembro/miembro.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    HeaderComponent,
    VentaMembresiaComponent,
    ConsultasPlanesComponent,
    ConsultasMiembrosComponent,
    PlanesComponent,
    PlanesPostComponent,
    PlanesGetComponent,
    PlanesPutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MenubarModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule,
    MiembroModule,
    MatDialogModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
    provideToastr(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
