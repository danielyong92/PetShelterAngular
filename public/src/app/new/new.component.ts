import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPet:any;
  errmessage:any;
  errmessage2:any;


  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newPet = {name: "", type: "", desc: "", skill1: "", skill2: "", skill3: ""}
  }

  onSubmit(){
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      this.newPet = {name: "", type: "", desc: "", skill1: "", skill2: "", skill3: ""}
      console.log(data);
      if (data['errors'] != null) {
        console.log('FIX ERROR BELOW !!! :)')
        this.errmessage = data['errors']['errors']['name']['message'];
        this.errmessage2 = data['errors']['errors']['type']['message'];
      }
      else {
        console.log('this should redirect...upon creation')
        this.goBack(); //go home if it success!!! :)
      }
    })
  }

  goBack(){
    this.router.navigate(['']);
  }

}
