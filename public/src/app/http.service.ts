import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  addPet(newPet){
    // console.log("HERE IS SERVICEEEEEE")
    return this._http.post('/create', newPet)
  }

  getPets(){
    return this._http.get('/pets');
  }

  getOnePet(_id){
    return this._http.get('/pet/'+ _id);
  }

  deletePet(_id){
    return this._http.delete('/pet/'+ _id)
  }

  editPet(pet_id,onePet){
    return this._http.put('/pet/'+ pet_id, onePet)
  }

  addOneLike(pet_id, onePet) {
    console.log('THIS FROM SERVICE')
    return this._http.put('/petlike/'+pet_id, onePet)
  }

}