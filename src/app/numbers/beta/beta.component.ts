import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  numbers = [];
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers(1);
  }

  pushRandom(){
    this._dataService.addNumber(Math.floor(Math.random() * 10) + 1, 1);
  }

}
