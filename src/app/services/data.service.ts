import { Injectable } from '@angular/core';
import { Poney } from '../models/poney.model';
import { Race } from '../models/race.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  get races(): Race[] {
    return this._races;
  }

  get ponies(): Poney[] {
    return this._ponies;
  }

  getRaceById(id: string): Race | undefined {
    return this.races.find((race) => race.id === id);
  }

  private _races: Race[] = [
    {
      id: '1',
      name: 'Paris',
      poneyIds: ['1', '2'],
    },
    {
      id: '2',
      name: 'Marseille',
      poneyIds: ['3', '4'],
    },
  ];

  private _ponies: Poney[] = [
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
