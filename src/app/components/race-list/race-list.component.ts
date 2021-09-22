import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from 'src/app/models/race.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'amb-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss'],
})
export class RaceListComponent implements OnInit {
  races: Observable<Race[]> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.races = this.dataService.races;
  }
}
