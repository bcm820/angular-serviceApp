import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github-score',
  templateUrl: './github-score.component.html',
  styleUrls: ['./github-score.component.css']
})

export class GithubScoreComponent implements OnInit {

  data;
  
  constructor(private _github: GithubService) { }

  ngOnInit() {}

  onSubmit(form){

    let username = form.form.value.username;

    this._github.getData(username).subscribe(
      res => this.data = res,
      err => this.data = null
    );

    form.reset();

  }

}
