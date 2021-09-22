import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
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
  poneyForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required, this.isColorValid]),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.poneyForm);
  }

  isColorValid(control: AbstractControl): ValidationErrors | null {
    return ['red', 'orange', 'blue', 'purple'].includes(control.value)
      ? null
      : {
          isColorValid: true,
        };
  }

  handleSubmit() {
    const image = `https://ng-ponyracer.ninja-squad.com/assets/images/pony-${this.poney.color}-running.gif`;

    this.http
      .post('http://localhost:3000/ponies', {
        ...this.poneyForm.value,
        image,
      })
      .subscribe((data) => console.log(data));
  }
}
