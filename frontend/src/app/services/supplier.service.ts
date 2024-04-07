import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService{
  BASE_URL = "http://localhost:5000/suppliers"
  constructor(private http: HttpClient) {}

  getAllSuppliers() {
    return this.http.get<any>(this.BASE_URL);
  }
  createSuppliers() {
    return this.http.get<any>(this.BASE_URL+"/create");
  }

  findSupplierById() {
    return this.http.get<any>(this.BASE_URL+"/id/:id");
  }

  findSupplierByName() {
    return this.http.get<any>(this.BASE_URL+"/:name");
  }
}
