import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-view-mobile',
  templateUrl: './view-mobile.component.html',
  styleUrls: ['./view-mobile.component.css']
})
export class ViewMobileComponent implements OnInit{
  mobiles:Mobile[] = [];
  
  constructor(private mobileService:MobileService){

  }

  ngOnInit(): void {
      this.mobileService.getMobiles().subscribe((data:Mobile[]) => {
        this.mobiles = data;
      });
  }

}
