import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  numbers = [];
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers(0);
  }

  pushRandom(){
    this._dataService.addNumber(Math.floor(Math.random() * 10) + 1, 0);
  }

}
