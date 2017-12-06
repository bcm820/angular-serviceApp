import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-http-app',
  templateUrl: './http-app.component.html',
  styleUrls: ['./http-app.component.css']
})
export class HttpAppComponent implements OnInit {
  
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(text){
    let newTask = {text:text}
    this._taskService.addTask(newTask);
  }

}
