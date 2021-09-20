import { Component, Input, OnInit } from '@angular/core';
import { Poney } from 'src/app/models/poney.model';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input() poney: Poney | null = null

  constructor() {}

  ngOnInit(): void {

  }

  handleClick() {
    console.log('CLICK :', this.poney?.name)
  }
}
