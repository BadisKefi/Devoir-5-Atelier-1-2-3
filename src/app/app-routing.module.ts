import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScientistsComponent } from './scientists/scientists.component';
import { AddScientistComponent } from './add-scientist/add-scientist.component';
import { UpdateScientistComponent } from './update-scientist/update-scientist.component';


const routes: Routes =
[
  {path: "scientists", component : ScientistsComponent},
  {path: "add-scientist", component : AddScientistComponent},
  {path: "", redirectTo: "scientists", pathMatch: "full"},
  {path: "updateScientist/:id", component: UpdateScientistComponent}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
