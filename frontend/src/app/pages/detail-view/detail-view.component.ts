import {Component, Provider} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {Supplier} from "../../models/supplier";
import {SupplierService} from "../../services/supplier.service";
import {response} from "express";

@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss'
})
export class DetailViewComponent {
  product: Product = {
    _id: '',
    name: '',
    description: '',
    price: 0,
    amount: 0,
    supplier: ''
  };

  supplier: Supplier = {
    _id: '',
    name: '',
    email: '',
    address: '',
    manager: '',
    products: []
  }

  constructor(private route: ActivatedRoute, private productService: ProductService, private supplierService: SupplierService) {
    this.route.url.subscribe(res => {
      console.log(res[1].path);
      if (res[1].path) {
        productService.getProductById(res[1].path).subscribe(res => {
          this.product = res;
          supplierService.getSupplierById(res.supplier).subscribe(res => {
            this.supplier = res;
          })
        })
      }
    })
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product._id).subscribe( (response) => console.log(response))
  }
}
