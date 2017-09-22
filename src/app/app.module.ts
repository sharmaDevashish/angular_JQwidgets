import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxDockingLayoutComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdockinglayout';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxButtons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent, jqxGridComponent, jqxDockingLayoutComponent,jqxButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
