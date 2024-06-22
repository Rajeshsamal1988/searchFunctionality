import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://mocki.io/v1/5a052eb1-bf45-4010-b6fb-9f7c8b7ac0af'; 

  constructor(private _http: HttpClient) { }
//get all products
  getProducts(): Observable<any> {
    return this._http.get<any>(this.url);
  }

 //get a particular product
  // getProductById(id: any): Observable<any> {
    
  //   return this._http.get<any[]>(this.url).pipe(
  //     map(products => products.find(product => product.id === id))
  //   );
  // }
  getProductById(id: number): Observable<any> {
    return this._http.get<any>(`${this.url}/${id}`);
  }
  // getProductById(id: any): Observable<any> {
  //   return this._http.get(`${this.url}/${id}`)
  // }
  
}
export interface Product {
  id: number;
  // name: string;
  // category: string;
  // price: number;
  // description: string;
}
