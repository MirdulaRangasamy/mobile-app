import { Component } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-delete-mobile',
  templateUrl: './delete-mobile.component.html',
  styleUrls: ['./delete-mobile.component.css']
})
export class DeleteMobileComponent {
  imeiNoValue!:string;
  

  constructor(private mobileService:MobileService){

  }
  onSubmit(){
     alert(this.imeiNoValue);
     this.mobileService.deleteMobile(this.imeiNoValue).subscribe(data =>{
        console.log(data);
     });
  }
}
