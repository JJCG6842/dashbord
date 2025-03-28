import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponent { 
  menuOption=[
    {
      icono:'fa-solid falchart-line',
      label:'Productos',
      description:'Lista de productos',
      route:'/dashboard/productos',
    },
    {
      icono:'fa-solid fa-magnifying-glass',
      label:'Busqueda',
      description:'Buscar Productos',
      route:'/dashboard/buscar',
    },
  ]
}
