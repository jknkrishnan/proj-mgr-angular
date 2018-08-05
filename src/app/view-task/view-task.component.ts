import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';
import { TaskService } from '../services/task.service';
import { Task } from '../Task';
import { Parent } from '../Parent';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  task_all : Task[];
  parent_all : Parent[];
  constructor(private taskservice : TaskService, private parentservice : ParentService) { }

  ngOnInit() {
  }

  gettask()
  {
    this.taskservice.get().subscribe((obj) => {        
      this.task_all = obj      
    });
  }

  getparent()
  {
  }

}
