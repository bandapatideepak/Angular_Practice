import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListofstudentsDirective } from './listofstudents.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListofstudentsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
