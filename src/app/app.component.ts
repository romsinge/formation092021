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

  getDate() {
    return new Date()
  }

  ponies: Poney[] = [
    {
      id: "1",
      name: "Romain",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-green-running.gif",
      color: "gold"
    },
    {
      id: "2",
      name: "Yoann",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif",
      color: "rebeccapurple"
    },
    {
      id: "3",
      name: "Emile",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif",
      color: "lavender"
    },
    {
      id: "4",
      name: "Bertrand",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif",
      color: "orangered"
    }
  ]
}
