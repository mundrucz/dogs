import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/dog';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  dogs: Dog[] = [];
  cardShow = false;
  listShow = true;
  
  constructor() { }

  ngOnInit(): void {
    //localStorage.clear();
    for (let index = 0; index < localStorage.length; index++) {
      this.dogs.push(JSON.parse(localStorage[index]));
    }
    console.log(localStorage);
  }

  public isShow(){
    this.cardShow = this.listShow;
    this.listShow = !this.cardShow
  }
}
