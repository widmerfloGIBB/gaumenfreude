import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {
  product: Product = {
    _id: '',
    name: '',
    description: '',
    price: 0,
    amount: 0,
    supplier: ''
  };

  constructor(private productService: ProductService) {
  }

  createProduct() {
    this.productService.createProduct(this.product).subscribe( (response) => console.log(response))
  }

  nameChanged(event: any) {
    this.product.name = event.target.value;
  }
  descriptionChanged(event: any) {
    this.product.description = event.target.value;
  }
  priceChanged(event: any) {
    this.product.price = event.target.value;
  }
  amountChanged(event: any) {
    this.product.amount = event.target.value;
  }
  supplierChanged(event: any) {
    this.product.supplier = event.target.value;
  }
}
