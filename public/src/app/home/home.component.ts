import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { 

    this.allPets();
  }

  allpets:any;

  ngOnInit() {
  }

  allPets() {
    let allpets = this._httpService.getPets();
    allpets.subscribe(data => {

      console.log("Got out tasks!", data)
      this.allpets = data['pets'];
    
    })
  }

}
