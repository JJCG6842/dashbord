import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListProductsComponent } from "../../components/list-products/list-products.component";
const imageUrls:string[]=[
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6VLgWq2tES-qtCHwaPaJvWjI5XPuGc98pA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6VLgWq2tES-qtCHwaPaJvWjI5XPuGc98pA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6VLgWq2tES-qtCHwaPaJvWjI5XPuGc98pA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6VLgWq2tES-qtCHwaPaJvWjI5XPuGc98pA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6VLgWq2tES-qtCHwaPaJvWjI5XPuGc98pA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6VLgWq2tES-qtCHwaPaJvWjI5XPuGc98pA&s',
]

@Component({
  selector: 'app-productos',
  imports: [ListProductsComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductosComponent { 
  products= imageUrls;
}
