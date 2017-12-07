import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  
  constructor(private _http: Http) {
  }

  getData(username) {
    return this._http.get(`http://api.github.com/users/${username}`).map(res => res.json());
  }
  
}