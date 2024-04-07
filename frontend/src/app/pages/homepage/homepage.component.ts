import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  products: Product[] = []

  constructor( private productService : ProductService) {
    productService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(res)
    })
  }

  getData() {
    return this.http.get<any>('');
  }
}
