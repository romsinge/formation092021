import { Component } from '@angular/core';
import { Race } from './models/race.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AMBIENT IT';

  getDate() {
    return new Date();
  }

  races: Race[] = [
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
}
