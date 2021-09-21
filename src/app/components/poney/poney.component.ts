import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Poney } from 'src/app/models/poney.model';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input() poney: Poney | null = null
  @Output() win: EventEmitter<Poney> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    this.win.emit(this.poney as Poney)
  }

  handleClick() {
    console.log('CLICK :', this.poney?.name)
  }
}
