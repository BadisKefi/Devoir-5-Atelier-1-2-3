import { Component, OnInit } from '@angular/core';
import { Scientist } from '../model/scientist.model';
import { ScientistService } from '../services/scientist.service';


@Component({
  selector: 'app-add-scientist',
  templateUrl: './add-scientist.component.html',
  styleUrls: ['./add-scientist.component.css']
})
export class AddScientistComponent implements OnInit {

  newScientist = new Scientist();
  constructor(private scientistService: ScientistService) { }

  addScientist(){
    this.scientistService.ajouterScientist(this.newScientist);
      }

  ngOnInit(): void {
  }

}
