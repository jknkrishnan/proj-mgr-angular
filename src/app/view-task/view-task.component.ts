import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';
import { TaskService } from '../services/task.service';
import { Task } from '../Task';
import { Parent } from '../Parent';
import { Project } from '../Project';
import { ProjectService } from '../services/project.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  task_all : Task[];
  projecttasks : Task[] = [];
  parent_all : Parent[];
  parent : Parent;
  navigateProj : Project;
  selectedProject : Project;
  project_all : Project[];
  projectname : string;
  task_item : Task;
  sortCaption : string;
  
  constructor(private taskservice : TaskService, 
              private parentservice : ParentService,
              private projectservice : ProjectService) { }

  ngOnInit() {
    this.getprojects();    
  }

  gettask(Project_Id : number)
  {
    this.taskservice.get().subscribe((obj) => {        
      this.task_all = obj
      this.task_all.forEach(element => { 
        
        this.parentservice.getById(element.Parent_Id).subscribe((obj) => {  
          this.parent = obj[0];
          element.ParentName = this.parent.Parent_Task;
        });        
        
        if (element.Project_Id === Project_Id)
        {
          this.projecttasks.push(element);
        }

        element.StartDate = moment(element.StartDate).format('YYYY-MM-DD'); 
        
        element.EndDate = moment(element.EndDate).format('YYYY-MM-DD');
      });
    });
  }

  getparent()
  {
  }

  getprojects()
  {
    this.projectservice.get().subscribe((obj) => {        
      this.project_all = obj
    });
  }

  listProjectClick(event, newValue) {    
    this.navigateProj = newValue;     
  }

  selectProject()
  {
    this.selectedProject = this.navigateProj;       
    this.gettask(this.selectedProject.Project_Id);  
    this.projectname =  this.selectedProject.Project_Name;     
  }

  //update task status
  endtask(task_id : number)
  {
    this.taskservice.getById(task_id).subscribe((obj) => { 
      this.task_item = obj[0];    
      this.task_item.Status = "Closed";
      this.taskservice.put(task_id,this.task_item).subscribe((obj) => {});  
    });    
  }


  sort(str :string)
  {    
    if (str==='S')
    {
      this.sortCaption = "StartDate";      
    }
    else 
    if (str==='E')
    {
      this.sortCaption = "EndDate";      
    }
    else 
    if (str==='P')
    {
      this.sortCaption = "Priority";
    } 
    else 
    if (str==='C')
    {
      this.sortCaption = "Status";
    }     

  }

}
