import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http'
import { AppComponent } from './app.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { DetailsComponent } from './details/details.component';
import { CarrelloComponent } from './carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    VegetableListComponent,
    DetailsComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
