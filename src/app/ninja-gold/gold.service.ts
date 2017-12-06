import { Injectable } from '@angular/core';

@Injectable()
export class GoldService {

  gold = 0;

  messages = [];
  
  constructor() { }

  updateGold(){
    return this.gold;
  }
  
  action(place){
  let amt;
  switch(place){
    case 'Farm':
      amt = Math.floor(Math.random() * (6-2) + 2);
      this.gold += amt;
      console.log('farm', this.gold)
      this.messages.push(`You earned ${amt} gold at the farm`);
      break;
    case 'Cave':
      amt = Math.floor(Math.random() * (11-5) + 5);
      this.gold += amt;
      this.messages.push(`You earned ${amt} gold at the cave`);
      break;
    case 'House':
      amt = Math.floor(Math.random() * (16-7) + 7);
      this.gold += amt;
      this.messages.push(`You earned ${amt} gold at the house`);
      break;
    case 'Casino':
      let chance = (Math.floor(Math.random() * 2) === 0);
      amt = Math.floor(Math.random() * (100-1) + 1);
      if(chance){
        this.gold += amt;
        this.messages.push(`You earned ${amt} gold at the casino`);
      }
      else {
        this.gold -= amt;
        this.messages.push(`You lost ${amt} gold at the casino`);
      }
      break;
    }
  }

}
