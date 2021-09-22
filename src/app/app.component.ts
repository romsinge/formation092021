import { Component } from '@angular/core';
import { Race } from './models/race.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AMBIENT IT';
  races: Race[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.races = this.dataService.races;
  }

  getDate() {
    return new Date();
  }
}
