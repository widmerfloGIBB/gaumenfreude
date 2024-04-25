import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {Product} from "../../models/product";
import {Supplier} from "../../models/supplier";
import {SupplierService} from "../../services/supplier.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-supplier-create',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './supplier-create.component.html',
  styleUrl: './supplier-create.component.scss'
})
export class SupplierCreateComponent {
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

  constructor(private supplierService: SupplierService) {
  }

  createSupplier() {
    this.supplierService.createSuppliers(this.supplier).subscribe( (response) => console.log(response))

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
