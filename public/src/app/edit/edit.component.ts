import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editPet:any;
  id:any;
  onePet:any;
  errormessage:any;
  errormessage2:any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
  });

  this.getThisPet();

  }

  getThisPet(){
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      this.onePet=data['pet']
    })
  }

  onEditSubmit(onePet){
    let Observable = this._httpService.editPet(this.id,onePet);
   Observable.subscribe(data => {
     console.log("Edited pet", data)
     if (data['error'] != null) {
      this.errormessage = data['error']['errors']['name']['message'];
      this.errormessage2 = data['error']['errors']['type']['message'];
    }
    else {
      this.router.navigate(['']);
    }
   })
  }

  goBack(){
    this.router.navigate(['']);
  }





}
