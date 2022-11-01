import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';

import { ScientistService } from '../services/scientist.service';
import { Scientist } from '../model/scientist.model';
//import { ConsoleReporter } from 'jasmine';
@Component
({
  selector: 'app-update-scientist',
  templateUrl: './update-scientist.component.html',
})

export class UpdateScientistComponent implements OnInit
{
  currentScientist = new Scientist();

  constructor
  (
    private activateRoute: ActivatedRoute,
    private router :Router,
    private scientistService: ScientistService,
  ) { }

  ngOnInit(): void
  {
    this.currentScientist = this.scientistService.consulterScientist(this.activateRoute.snapshot.params['id']);
    console.log(this.currentScientist);
  }
  updateScientist()
  {
    this.scientistService.updateScientist(this.currentScientist);
    this.router.navigate(['scientists']);

  }
  
}