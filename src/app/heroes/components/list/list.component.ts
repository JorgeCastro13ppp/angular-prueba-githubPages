import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman','Ironman','Hulk','SheHulk','Thor'];
  public deletedHero?:string ;
  // public deletedHero?:string ;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
    // console.log(deletedHero);


  }
}