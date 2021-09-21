import { Component, QueryList, ViewChildren } from '@angular/core';
import { PoneyComponent } from './components/poney/poney.component';
import { Poney } from './models/poney.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren('poneyComponents') poneyComponentList: QueryList<PoneyComponent> | undefined

  title = 'AMBIENT IT';

  handleWin(poney: Poney): void {
    console.log(`GAME OVER. THE WINNER IS ${poney.name}`)
    this.poneyComponentList?.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning()
    })
  }

  ponies: Poney[] = [
    {
      name: "Romain",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-green-running.gif",
      color: "gold"
    },
    {
      name: "Yoann",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif",
      color: "rebeccapurple"
    },
    {
      name: "Emile",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif",
      color: "lavender"
    },
    {
      name: "Bertrand",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif",
      color: "orangered"
    }
  ]
}
