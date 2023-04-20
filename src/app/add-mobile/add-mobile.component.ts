import { Component } from '@angular/core';
import { Mobile } from '../mobile';
import { HttpClientModule } from '@angular/common/http';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent {
  imeiNoValue:string = "";
  brandValue!:string;
  modelValue!:string;
  priceValue!:number;

  constructor(private mobileService:MobileService){

  }
  onSubmit(){
     let mobile:Mobile = {imeiNo:this.imeiNoValue,brand:this.brandValue,model:this.modelValue,price:this.priceValue};
     alert(JSON.stringify(mobile));
     this.mobileService.addMobile(mobile).subscribe(data =>{
        console.log(data);
     });
  }
}
