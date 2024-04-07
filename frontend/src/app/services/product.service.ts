import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = "http://localhost:5000/products"

  constructor( private http: HttpClient) { }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.BASE_URL)
  // }

  getAllProducts(){
    return this.http.get<any>(this.BASE_URL)
  }

  createProduct(){
    return this.http.get<any>(this.BASE_URL+'/create')
  }

  getProductById(){
    return this.http.get<any>(this.BASE_URL+'/id/:id')
  }

  getProductbyName(){
    return this.http.get<any>(this.BASE_URL+'/:name')
  }
}
