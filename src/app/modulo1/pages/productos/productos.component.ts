import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductosComponent { }
