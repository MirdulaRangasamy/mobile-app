import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from './mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  basePath = `http://localhost:8080/mobile`;

  constructor(private http:HttpClient ) { }

  getMobiles():Observable<Mobile[]>{
    console.log("In get");
   return this.http.get<Mobile[]>(this.basePath);
  }

  addMobile(mobile:Mobile):Observable<Mobile>{
    console.log("In post");
    return this.http.post<Mobile>(this.basePath,mobile);
  }

  updateMobile(mobile:Mobile):Observable<Mobile>{
    console.log("In put");
    console.log(mobile);
    return this.http.put<Mobile>(this.basePath,mobile);
  }

  deleteMobile(imeiNo:string):Observable<string>{
    console.log("In delete");
    return this.http.delete<string>(this.basePath+"/"+imeiNo);
  }
}
