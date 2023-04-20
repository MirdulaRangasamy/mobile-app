import { Component } from '@angular/core';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent {
  imeiNoValue!:string;
  brandValue!:string;
  modelValue!:string;
  priceValue!:number;

  constructor(private mobileService:MobileService){

  }
  onSubmit(){
     let mobile:Mobile = {imeiNo:this.imeiNoValue,brand:this.brandValue,model:this.modelValue,price:this.priceValue};
     alert(JSON.stringify(mobile));
     this.mobileService.updateMobile(mobile).subscribe(data =>{
        console.log(data);
     });
  }
}
