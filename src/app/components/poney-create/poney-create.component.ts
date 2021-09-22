import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Poney } from 'src/app/models/poney.model';

@Component({
  selector: 'amb-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss'],
})
export class PoneyCreateComponent implements OnInit {
  poney: Poney = {
    name: '',
    image: '',
    color: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  handleSubmit() {
    const image = `https://ng-ponyracer.ninja-squad.com/assets/images/pony-${this.poney.color}-running.gif`;

    this.http
      .post('http://localhost:3000/ponies', {
        ...this.poney,
        image,
      })
      .subscribe((data) => console.log(data));
  }
}
