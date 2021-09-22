import { Injectable } from '@angular/core';
import { Poney } from '../models/poney.model';
import { Race } from '../models/race.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  get races(): Race[] {
    return this._races;
  }

  get ponies(): Observable<Poney[]> {
    return this.http.get<Poney[]>('http://localhost:3000/ponies');
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

  private _ponies: Poney[] = [];
}
