import { Component, OnInit } from '@angular/core';
import { Scientist } from '../model/scientist.model';
import { ScientistService } from '../services/scientist.service';

@Component
({
  selector: 'app-scientists',
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.css']
})
export class ScientistsComponent implements OnInit
{

  scientists : Scientist[]; //un tableau de chînes de caractères

  constructor(private scientistService: ScientistService)
  {
    this.scientists = scientistService.listeScientists();
  }

  supprimerScientist(s: Scientist)
  {
    //console.log(p);
    let conf = confirm("Are You sure you want to delete " + s.name + " ?");
    if (conf)
      this.scientistService.supprimerScientist(s);
  }
  ngOnInit(): void {  }
}
