import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Poney } from 'src/app/models/poney.model';
import { Race } from 'src/app/models/race.model';
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

  handleWin(poney: Poney): void {
    console.log(`GAME OVER. THE WINNER IS ${poney.name}`);
    this.poneyComponentList?.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning();
    });
  }

  ponies: Poney[] = [
    {
      id: '1',
      name: 'Romain',
      image:
        'https://ng-ponyracer.ninja-squad.com/assets/images/pony-green-running.gif',
      color: 'gold',
    },
    {
      id: '2',
      name: 'Yoann',
      image:
        'https://ng-ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif',
      color: 'rebeccapurple',
    },
    {
      id: '3',
      name: 'Emile',
      image:
        'https://ng-ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif',
      color: 'lavender',
    },
    {
      id: '4',
      name: 'Bertrand',
      image:
        'https://ng-ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif',
      color: 'orangered',
    },
  ];
}
