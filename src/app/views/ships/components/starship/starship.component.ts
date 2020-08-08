import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent{

  @Input() starShip: any;

  constructor() { }

}
