import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GithubService {

  data = new BehaviorSubject({});
  
  constructor(private _http: HttpClient) {
  }

  getData(name){
    this._http.get(`http://api.github.com/users/${name}`)
    .subscribe((data: any) => {
      this.data.next(data);
    });
  }

}