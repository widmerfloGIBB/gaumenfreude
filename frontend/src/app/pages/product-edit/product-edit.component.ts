import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {SupplierService} from "../../services/supplier.service";
import {Product} from "../../models/product";
import {Supplier} from "../../models/supplier";
import {HeaderComponent} from "../../components/header/header.component";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {
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

  suppliers: Supplier[] = []

  constructor(private route: ActivatedRoute, private productService: ProductService, private supplierService: SupplierService) {
    this.route.url.subscribe(res => {
      console.log(res[1].path);
      if (res[1].path) {
        productService.getProductById(res[1].path).subscribe(res => {
          this.product = res;
          supplierService.getSupplierById(res.supplier).subscribe(res => {
            this.supplier = res;
            supplierService.getAllSuppliers().subscribe(res => {
              console.log(res)
              if(this.product.supplier != res._id) {
                this.suppliers.push(res)
              }
            })
          })
        })
      }
    })
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe( (response) => console.log(response))

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
