import { Component, OnInit } from '@angular/core';
import { CitizenEntity } from '../entity/citizen.entity';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.scss']
})
export class CitizenComponent implements OnInit {
  private readonly _citizens: Array<CitizenEntity> = new Array<CitizenEntity>();

  constructor() { }

  ngOnInit(): void { }

  public get citizens(): Array<CitizenEntity> {
    return this._citizens;
  }

}
