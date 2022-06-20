import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import {PetsService} from "../pets.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from "rxjs";
import { map } from "rxjs/operators";
import {tap} from "rxjs/operators";
import { setupTestingRouterInternal } from '@angular/router/testing';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  petData:any=[];
  selectedStatus: string = '';
  selectChangeHandler (event: any) {
   
    this.selectedStatus = event.target.value;
    console.log(this.selectedStatus);
  }
  constructor(public http: HttpClient,private router : Router) {

      
  }
  ngOnInit(): void {
    let autoComplete: any=[];
    const request1 = this.http.get(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
    );
    const request2 = this.http.get("https://petstore.swagger.io/v2/pet/findByStatus?status=pending");

    const requestArray = [];
    requestArray.push(request1);
    requestArray.push(request2);

    forkJoin(requestArray)
      .pipe(map(data => data.reduce((result, arr) =>[...result,...arr],[]))).subscribe(data => {
        autoComplete = data;
        console.log(autoComplete);
      });

   
  }

  
  goToPage(pageName :string) :void
  {
      this.router.navigate([`${pageName}`]);
  }

  
}
