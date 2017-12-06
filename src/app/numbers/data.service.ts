import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  numbers = [ [],[],[null] ];
  
  constructor() { }

  retrieveNumbers(i){
    return this.numbers[i];
  }

  addNumber(num, i){
    this.numbers[i].push(num);
  }

  subNumbers(){
    let sumA = 0;
    let sumB = 0;
    for(let a of this.numbers[0]){ sumA += a; }
    for(let b of this.numbers[1]){ sumB += b; }
    this.numbers[2][0] = sumA - sumB;
    return this.numbers[2][0];
  }

}
