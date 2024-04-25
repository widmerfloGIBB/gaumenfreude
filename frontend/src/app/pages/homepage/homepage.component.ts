import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {SupplierService} from "../../services/supplier.service";
import {JsonPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeaderComponent,
    JsonPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  products: Product[] = []
  suppliers: any;
  supplierById:any;
  supplierByName:any;
  productById:any;
  productByName:any;
  inputValue: string = '';
  constructor( private product : ProductService,private supplier:SupplierService) {}
  ngOnInit() {
    this.supplier.getAllSuppliers().subscribe((response) => {
      this.suppliers = response;
    });

    this.product.getAllProducts().subscribe((response)=>{
      console.log(response)
      this.products = response
    })
  }


  findProductById(){
    this.product.getProductById("").subscribe((response)=>{
      this.productById = response;
    })
  }

  findProductByName(){
    this.product.getProductbyName().subscribe((response)=>{
      this.productByName = response;
    })
  }

  findSupplierById(){
    this.supplier.getSupplierById("").subscribe((response)=>{
      this.supplierById= response;
    })
  }

  findSupplierByName() {
    this.supplier.findSupplierByName().subscribe((response)=>{
      this.supplierByName = response;
    })
  }



}
