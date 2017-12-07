import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github-score',
  templateUrl: './github-score.component.html',
  styleUrls: ['./github-score.component.css']
})
export class GithubScoreComponent implements OnInit {

  data = null;
  
  constructor(private _github: GithubService) { }

  ngOnInit() {
    this._github.data.subscribe(data => this.data = data);
  }

  onSubmit(form){
    // form.form.markAsPristine();
    this.data = this._github.getData(form.form.value.username);
  }

}
