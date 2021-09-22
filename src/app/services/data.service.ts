import { Injectable } from '@angular/core';
import { Poney } from '../models/poney.model';
import { Race } from '../models/race.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  get races(): Observable<Race[]> {
    return this.http.get<Race[]>('http://localhost:3000/races');
  }

  get ponies(): Observable<Poney[]> {
    return this.http.get<Poney[]>('http://localhost:3000/ponies');
  }

  getRaceById(id: string): Observable<Race | undefined> {
    return this.races.pipe(
      map((races) => {
        return races.find((race) => {
          return race.id === id;
        });
      })
    );
  }

  private _races: Race[] = [];

  private _ponies: Poney[] = [];
}
