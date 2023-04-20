import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { ViewMobileComponent } from './view-mobile/view-mobile.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { DeleteMobileComponent } from './delete-mobile/delete-mobile.component';

const routes: Routes = [
  {path:"addMobile",component:AddMobileComponent},
  {path:"viewMobile",component:ViewMobileComponent},
  {path:"updateMobile",component:UpdateMobileComponent},
  {path:"deleteMobile",component:DeleteMobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
