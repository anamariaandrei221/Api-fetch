import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http:HttpClient) {
     
   }
   getData1()
   {
     let url="https://petstore.swagger.io/v2/pet/findByStatus?status=available"
      return this.http.get(url);
    }
    getData2()
    {
      let url="https://petstore.swagger.io/v2/pet/findByStatus?status=pending"
       return this.http.get(url);
     }
     getData3()
     {
       let url="https://petstore.swagger.io/v2/pet/findByStatus?status=sold"
        return this.http.get(url);
      }
}
