import { Injectable } from '@angular/core';
import { Scientist } from "../model/scientist.model";

@Injectable
({
  providedIn: 'root'
})

export class ScientistService
{
  scientists : Scientist[];
  scientist! : Scientist;

  constructor()
  {
    this.scientists =
    [
      { id : 1, name : "Ibn al-Haytham", birthDate : new Date("01/14/2011"), deathDate
      : new Date("01/14/2011")},
      { id : 2, name : "Leonardo da Vinci", birthDate : new Date("01/14/2011"), deathDate
      : new Date("01/14/2011")},
      { id : 3, name : "Ibn Sina", birthDate : new Date("01/14/2011"), deathDate
      : new Date("01/14/2011")}
    ]
  }
  supprimerScientist( scien: Scientist)
  {
    const index = this.scientists.indexOf(scien, 0);
    if (index > -1)
      this.scientists.splice(index, 1);
  }
  listeScientists():Scientist[]
  {
    return this.scientists;
  }
  ajouterScientist( scientist: Scientist)
  {
    this.scientists.push(scientist);
  }
  consulterScientist(id:number): Scientist
  {
    this.scientist = this.scientists.find(s => s.id == id)!;
    return this.scientist;
  }

  trierScientists()
  {
    /*this.scientist = this.scientist.sort((n1,n2) =>
    {
      if (n1.id > n2.id)
      return 1;
      if (n1.id < n2.id)
      return -1;

      return 0;
    });*/
  }  

  updateScientist(s:Scientist)
  {
    this.supprimerScientist(s);
    this.ajouterScientist(s);
    this.trierScientists();
  }

}

