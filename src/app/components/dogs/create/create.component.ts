import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/dog';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {
  breedOfDog = new FormControl('');
  descriptionOfDog = new FormControl('');
  height=new FormControl('');
  weight=new FormControl('');
  origin=new FormControl('');

  constructor() {}
  ngOnInit(): void {
  }
 
  public add() {
    let dog = new Dog(localStorage.length, this.breedOfDog.value, this.origin.value, this.descriptionOfDog.value, this.weight.value, this.height.value);

    this.breedOfDog.setValue("");
    this.descriptionOfDog.setValue("");
    this.weight.setValue("");
    this.height.setValue("");
    this.origin.setValue("");

    
    localStorage.setItem(localStorage.length.toString(), JSON.stringify(dog));
  }
}
