import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl = environment.url

  constructor(public _http: HttpClient) { }


  public createProduct(productData): any {

    const myResponse = this._http.post(this.baseUrl + '/product/add', productData)
    return myResponse
  }

  public editProduct(productData, uuid): any {

    const myResponse = this._http.put(this.baseUrl + `/product/${uuid}`, productData)
    return myResponse
  }

  public getProduct(): Observable<any> {
    const myResponse = this._http.get(this.baseUrl + '/product')
    return myResponse
  }

  public getProductById(uuid): Observable<any> {
    const myResponse = this._http.get(this.baseUrl + `/product?medicine_id=${uuid}`)
    return myResponse
  }

  public getProductList(): Observable<any> {
    const productJson = 'assets/products.json'
    return this._http.get(productJson)
  }

  public sendEmail(emailBody) {
    console.log('send email api called')
    let myResponse = this._http.post(this.baseUrl + '/product/mail', emailBody, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    })
    return myResponse
  }

}
