import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {Product} from "../../models/product";
import {Supplier} from "../../models/supplier";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {SupplierService} from "../../services/supplier.service";

@Component({
  selector: 'app-supplier-edit',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './supplier-edit.component.html',
  styleUrl: './supplier-edit.component.scss'
})
export class SupplierEditComponent {
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
        supplierService.getSupplierById(res[1].path).subscribe(res => {
          this.supplier = res;
        })
      }
    })
  }

  updateSupplier() {
    this.supplierService.updateSupplier(this.supplier).subscribe( (response) => console.log(response))

  }

  nameChanged(event: any) {
    this.supplier.name = event.target.value;
  }
  emailChanged(event: any) {
    this.supplier.email = event.target.value;
  }
  addressChanged(event: any) {
    this.supplier.address = event.target.value;
  }
  managerChanged(event: any) {
    this.supplier.manager = event.target.value;
  }

}
