import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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

  createProduct(product: Product){
    let params = new HttpParams();
    params = params.append('name', product.name);
    params = params.append('description', product.description);
    params = params.append('price', product.price.toString());
    params = params.append('amount', product.amount.toString());
    params = params.append('supplier', product.supplier);
    return this.http.get<any>(this.BASE_URL+'/create', {params})
  }

  getProductById(id: string){
    return this.http.get<any>(this.BASE_URL+'/id/'+ id)
  }

  getProductbyName(){
    return this.http.get<any>(this.BASE_URL+'/:name')
  }

  updateProduct(updatedProduct: Product) {
    let params = new HttpParams();
    params = params.append('name', updatedProduct.name);
    params = params.append('description', updatedProduct.description);
    params = params.append('price', updatedProduct.price.toString());
    params = params.append('amount', updatedProduct.amount.toString());
    params = params.append('supplier', updatedProduct.supplier);
    return this.http.get<any>(this.BASE_URL + "/update/" + updatedProduct._id, {params});
  }

  deleteProduct(id: String) {
    return this.http.get<any>(this.BASE_URL + "/delete/" + id);
  }
}
