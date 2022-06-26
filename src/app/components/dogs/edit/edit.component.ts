import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dog } from 'src/app/dog';
import { ActivatedRoute } from '@angular/router'

import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  breedOfDog = new FormControl('');
  descriptionOfDog = new FormControl('');
  weight = new FormControl('');
  height= new FormControl('');
  origin= new FormControl('');
  id="";
  dogs: Dog[] = [];
  
  private sub:any;

  constructor(private route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
   });
   
   let dog = JSON.parse(localStorage.getItem(this.id) || '{}');
   this.breedOfDog.setValue(dog.breed);
   this.origin.setValue(dog.origin);
   this.descriptionOfDog.setValue(dog.description);
   this.weight.setValue(dog.weight);
   this.height.setValue(dog.height);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public edit() {
    let dog = new Dog(+this.id, this.breedOfDog.value, this.origin.value, this.descriptionOfDog.value, this.weight.value, this.height.value)
    this.dogs.push(dog);
    localStorage.setItem(this.id, JSON.stringify(dog));
    this._router.navigate(['/dogs']);
  }
}
