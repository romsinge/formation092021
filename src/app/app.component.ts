import { Component } from '@angular/core';
import { Poney } from './models/poney.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AMBIENT IT';

  handleWin(poney: Poney): void {
    console.log(`GAME OVER. THE WINNER IS ${poney.name}`)
  }

  ponies: Poney[] = [
    {
      name: "Romain",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    },
    {
      name: "Yoann",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif"
    },
    {
      name: "Emile",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    }
  ]
}
