import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import { Dog } from 'src/app/dog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  closeResult = '';
  
  id = "";
  private sub: any;
  breed = "";
  description = "";
  weight = "";
  height = "";
  origin = "";
  dogs : Dog[] = [];

  constructor(private route: ActivatedRoute,
    private _router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
    });

    let dog = JSON.parse(localStorage.getItem(this.id) || '{}');
    this.breed = dog.breed;
    this.origin=dog.origin;
    this.description = dog.description;
    this.height=dog.height;
    this.weight=dog.weight;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteDog() {
      for (let index = 0; index < localStorage.length; index++) {
        this.dogs.push(JSON.parse(localStorage[index]));
      }
      localStorage.clear();

      this.dogs.splice( +this.id, 1);

      for (let index = 0; index < this.dogs.length; index++) {
        this.dogs[index].id = +localStorage.length.toString();
         localStorage.setItem(localStorage.length.toString(), JSON.stringify(this.dogs[index]));
      }

      this._router.navigate(['/dogs']);
  }
  
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if(result=='ok'){
        this.deleteDog()
      }
    }
    );
  }
}


