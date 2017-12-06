import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place;
  @Output() update = new EventEmitter();
  
  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  onClick(place){
    this._goldService.action(place);
    this.update.emit();
  }

}
