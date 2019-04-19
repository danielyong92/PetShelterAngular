import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  onePet:any;
  

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
  });

    this.getThisPet();
    this.getPetForlike();
  }

  getThisPet(){
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      this.onePet=data['pet']
    })
  }

  delete(onePet){
    let observable = this._httpService.deletePet(this.id);
    observable.subscribe(data => {
      this.router.navigate([''])
    })
  }

  onLike(onePet) {
    // onePet.showLike = false;
    console.log('I JUST CLICKED THE LIKE')
    let Observable = this._httpService.addOneLike(this.id, onePet);
    Observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.getThisPet()
    })
  }

  getPetForlike() {
    let Observable = this._httpService.getOnePet(this.id);
    Observable.subscribe(data => {
      console.log("Got our One pet", data);
      this.onePet = data['data'] 
      // this.onePet.showLike = true;
    })
  }
  
  
  



}
