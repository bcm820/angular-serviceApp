import { Component, OnInit } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-ninja-gold',
  templateUrl: './ninja-gold.component.html',
  styleUrls: ['./ninja-gold.component.css']
})
export class NinjaGoldComponent implements OnInit {
  
  gold = this._goldService.gold;
  
  farm = 'Farm';
  cave = 'Cave';
  house = 'House';
  casino = 'Casino';
  
  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  update(){
    this.gold = this._goldService.updateGold();
  }

}

