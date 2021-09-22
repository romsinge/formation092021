import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Poney } from 'src/app/models/poney.model';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss'],
})
export class PoneyComponent implements OnInit {
  @Input() poney: Poney | null = null;
  @Output() win: EventEmitter<Poney> = new EventEmitter();

  intervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.startRunning();
  }

  ngOnDestroy() {
    this.stopRunning();
  }

  startRunning() {
    if (this.poney) {
      this.poney.distance = 0;

      this.intervalId = setInterval(() => {
        if (typeof this.poney?.distance === 'number') {
          this.poney.distance += Math.ceil(Math.random() * 10);

          if (this.poney.distance >= 90) {
            this.poney.distance = 90;
            this.win.emit(this.poney);
          }
        }
      }, 1000);
    }
  }

  stopRunning() {
    clearInterval(this.intervalId);
  }

  handleClick() {
    console.log('CLICK :', this.poney?.name);
  }
}
