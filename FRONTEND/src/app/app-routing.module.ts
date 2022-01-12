import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { DetailsComponent } from './details/details.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { PasajerosComponent } from './pasajeros/pasajeros.component';
import { ReservasComponent } from './reservas/reservas.component';


export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
    
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
  
      {
        path: "vuelos",
        component: VuelosComponent,

      },
      {
        path: "pasajeros",
        component: PasajerosComponent,

      },
      {
        path: "reservas",
        component: ReservasComponent,

      },
      {
        path: "details",
        component: DetailsComponent,
      
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'vuelos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
