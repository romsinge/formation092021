import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Poney } from 'src/app/models/poney.model';
import { Race } from 'src/app/models/race.model';
import { DataService } from 'src/app/services/data.service';
import { PoneyComponent } from '../poney/poney.component';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  @Input() race: Race | undefined;
  @ViewChildren('poneyComponents') poneyComponentList:
    | QueryList<PoneyComponent>
    | undefined;

  ponies: Poney[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.ponies = this.dataService.ponies;
  }

  handleWin(poney: Poney): void {
    console.log(`GAME OVER. THE WINNER IS ${poney.name}`);
    this.poneyComponentList?.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning();
    });
  }
}
