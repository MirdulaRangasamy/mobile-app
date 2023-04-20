import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { ViewMobileComponent } from './view-mobile/view-mobile.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { DeleteMobileComponent } from './delete-mobile/delete-mobile.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddMobileComponent,
    ViewMobileComponent,
    UpdateMobileComponent,
    DeleteMobileComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
