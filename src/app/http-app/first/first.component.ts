import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
  tasks = [];
  
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.tasks.subscribe(tasks => this.tasks = tasks);
  }

}
