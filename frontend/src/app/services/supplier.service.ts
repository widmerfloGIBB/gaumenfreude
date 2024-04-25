import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Supplier} from "../models/supplier";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class SupplierService{
  BASE_URL = "http://localhost:5000/suppliers"

  supplier: Supplier = {
    _id: '',
    name: '',
    email: '',
    address: '',
    manager: '',
    products: []
  }

  constructor(private http: HttpClient) {}

  getAllSuppliers() {
    return this.http.get<Supplier>(this.BASE_URL);
  }
  createSuppliers(supplier: Supplier) {
    let params = new HttpParams();
    params = params.append('name', supplier.name);
    params = params.append('email', supplier.email);
    params = params.append('address', supplier.address);
    params = params.append('manager', supplier.manager);
    return this.http.get<any>(this.BASE_URL+"/create", {params});
  }

  getSupplierById(id: string) {
    return this.http.get<any>(this.BASE_URL+"/id/" + id);
  }

  findSupplierByName() {
    return this.http.get<any>(this.BASE_URL+"/:name");
  }

  updateSupplier(updatedSupplier: Supplier) {
    let params = new HttpParams();
    params = params.append('name', updatedSupplier.name);
    params = params.append('email', updatedSupplier.email);
    params = params.append('address', updatedSupplier.address);
    params = params.append('manager', updatedSupplier.manager);
    return this.http.get<any>(this.BASE_URL + "/update/" + updatedSupplier._id, {params});
  }

  deleteSupplier(id: String) {
    return this.http.get<any>(this.BASE_URL + "/delete/" + id);
  }
}
