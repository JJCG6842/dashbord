import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductItemComponent } from "./product-item/product-item.component";

@Component({
  selector: 'app-list-products',
  imports: [ProductItemComponent],
  templateUrl: './list-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {

  products = input.required<string[]>()
}
