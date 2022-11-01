import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScientistsComponent } from './scientists/scientists.component';
import { AddScientistComponent } from './add-scientist/add-scientist.component';

import { FormsModule } from '@angular/forms';
import { UpdateScientistComponent } from './update-scientist/update-scientist.component';

@NgModule({
  declarations: [
    AppComponent,
    ScientistsComponent,
    AddScientistComponent,
    UpdateScientistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
