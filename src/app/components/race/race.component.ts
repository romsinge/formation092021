import { Component, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  @ViewChildren('poneyComponents') poneyComponentList:
    | QueryList<PoneyComponent>
    | undefined;

  ponies: Observable<Poney[]> | undefined;
  race: Race | undefined;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ponies = this.dataService.ponies;

    this.route.params.subscribe((params) => {
      this.race = this.dataService.getRaceById(params.id);
    });
  }

  handleWin(poney: Poney): void {
    console.log(`GAME OVER. THE WINNER IS ${poney.name}`);
    this.poneyComponentList?.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning();
    });
  }
}
