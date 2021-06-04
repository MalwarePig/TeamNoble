import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [ {
      path: 'tareas',
      loadChildren: () => import('./../../pages/tareas/tareas.module').then( m => m.TareasPageModule)
    },
    {
      path: 'equipos',
      loadChildren: () => import('./../../pages/equipos/equipos.module').then( m => m.EquiposPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
