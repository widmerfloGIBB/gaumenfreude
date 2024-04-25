import { Component } from '@angular/core';
import {Product} from "../../models/product";
import {Supplier} from "../../models/supplier";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {SupplierService} from "../../services/supplier.service";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-supplier-detail-view',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './supplier-detail-view.component.html',
  styleUrl: './supplier-detail-view.component.scss'
})
export class SupplierDetailViewComponent {
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

  products: Product[] = []

  constructor(private route: ActivatedRoute, private productService: ProductService, private supplierService: SupplierService) {
    this.route.url.subscribe(res => {
      console.log(res[1].path);
      if (res[1].path) {
        supplierService.getSupplierById(res[1].path).subscribe(res => {
          this.supplier = res;
          productService.getAllProducts().subscribe(res => {
            res.map((product: Product) => product.supplier==this.supplier._id ? this.products.push(product) : null)
            console.log(this.products)
          })
        })
      }
    })
  }

  deleteSupplier() {
    this.supplierService.deleteSupplier(this.supplier._id).subscribe((res) => console.log(res))
  }
}
