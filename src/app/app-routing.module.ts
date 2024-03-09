import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MiembroComponent } from './miembro/miembro.component';
import { VentaMembresiaComponent } from './venta-membresia/venta-membresia.component';
import { ConsultasMiembrosComponent } from './consultas-miembros/consultas-miembros.component';
import { ConsultasPlanesComponent } from './consultas-planes/consultas-planes.component';
import { PlanesPostComponent } from './planes/components/planes-post/planes-post.component';
import { PlanesGetComponent } from './planes/components/planes-get/planes-get.component';
import { PlanesPutComponent } from './planes/components/planes-put/planes-put.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a la página de inicio de sesión por defecto
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent ,canActivate: [AuthGuardService]},
  { path: 'miembro', component: MiembroComponent ,canActivate: [AuthGuardService]},
  { path: 'venta-membresia', component: VentaMembresiaComponent ,canActivate: [AuthGuardService]},
  { path: 'consulta-m', component: ConsultasMiembrosComponent ,canActivate: [AuthGuardService]},
  { path: 'consulta-p', component: ConsultasPlanesComponent ,canActivate: [AuthGuardService]},
  { path: 'planespost', component: PlanesPostComponent,canActivate: [AuthGuardService]},
  { path: 'Planesget', component: PlanesGetComponent,canActivate: [AuthGuardService]},
  { path: 'planesput', component: PlanesPutComponent,canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
