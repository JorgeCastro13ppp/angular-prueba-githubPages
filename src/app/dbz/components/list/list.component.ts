import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ion-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }]

  // onDeleteId = Index value:number ;
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    //Emitir el ID del personaje
    if (!id){
      return;
    }
    console.log(id);
    this.onDelete.emit(id);
  }
}
