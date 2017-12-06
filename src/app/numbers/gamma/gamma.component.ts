import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {

  number = null;
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.number = this._dataService.retrieveNumbers(2);
  }

  getDiff(){
    this.number = this._dataService.subNumbers();
  }

}
