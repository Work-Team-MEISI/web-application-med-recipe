import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/core/services/icon/icon.service';
import { LocaleService } from 'src/app/core/services/locale/locale.service';
import { CitizenEntity } from '../entity/citizen.entity';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.scss']
})
export class CitizenComponent implements OnInit {
  private readonly _citizens: Array<CitizenEntity> = new Array<CitizenEntity>();

  constructor(
    private readonly _localeService: LocaleService,
    private readonly _iconService: IconService,
  ) {
    this._citizens.push(
      new CitizenEntity(
        "1",
        "1",
        "1",
        "Diogo",
        "Oliveira",
        "01/01/2022"
      ),
      new CitizenEntity(
        "2",
        "2",
        "2",
        "Diogo",
        "Oliveira",
        "01/01/2022"
      )
    )
  }

  ngOnInit(): void { }

  public get localeService(): LocaleService {
    return this._localeService;
  }

  public get iconService(): IconService {
    return this._iconService;
  }

  public get citizens(): Array<CitizenEntity> {
    return this._citizens;
  }

}
