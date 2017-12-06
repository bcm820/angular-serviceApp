import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  
  tasks = new BehaviorSubject([]);
  
  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks(){
    this._http.get('https://5a285e9084a17f0012a94660.mockapi.io/task').subscribe(
      (tasks: any[]) => { this.tasks.next(tasks); }
    ); // HttpClient.get takes a URL and returns a list of objects
  } // BehaviorSubject.next updates this.tasks with the new list

  addTask(newTask){
    this._http.post('https://5a285e9084a17f0012a94660.mockapi.io/task', newTask).subscribe(
      res => this.getTasks()); // HttpClient.post takes a URL and an object
  } // BehaviorSubject.next invokes the getTasks service method to update components

}
