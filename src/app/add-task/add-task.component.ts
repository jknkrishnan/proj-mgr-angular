import { Component, OnInit, ViewChild, HostListener,ElementRef } from '@angular/core';
import { Project } from '../Project';
import { Task } from '../Task';
import { Parent } from '../Parent';
import {Router} from  '@angular/router';
import { User } from '../User';
import { UserService } from '../services/user.service';
import { ProjectService } from '../services/project.service';
import { ParentService } from '../services/parent.service';
import { TaskService } from '../services/task.service';
import * as moment from 'moment';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {  
  
  visible : boolean = false;
  task_item : Task;  
  parent_item : Parent;  
  caption : string;
  user_all : User[];
  project_all : Project[];
  parent_all : Parent[] = [];
  parents    : Parent[];
  errorCaption : string;
  selectedItem : User;
  selectedUser : User;
  navigateProj : Project;
  navigateParent : Parent;
  selectedProject : Project;
  selectedParent : Parent;
  str_check : boolean;
  dtStart : Date;
  dtEnd : Date;
  editTask : boolean;
  task_id : number;  
  
  @ViewChild('panel') public panel:ElementRef;

  @HostListener("input") input(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
  constructor(private userservice : UserService, private projservice : ProjectService, 
              private taskservice : TaskService, private parentservice : ParentService,
              private route : ActivatedRoute) {
    this.task_item = new Task();
    this.task_item.Priority = 0;
    this.parent_item = new Parent();    
    
   }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params : Params) => {
        this.task_id  = params['id'];        
      }
    );
    if (this.task_id > 0) 
    {      
      this.resettask();
      this.resetparent();
      this.getuser();
      this.getproject();               
      this.gettask(this.task_id);      
      this.caption = "Update Task";
      this.editTask = true;
    }
    else
    {     
      this.getuser();
      this.getproject();             
      this.resettask();
      this.resetparent();
      this.caption = "Add Task";   
      this.editTask = false;   
    }
  }

  gettask(task_id : number)
  {
    this.taskservice.getById(task_id).subscribe((obj) => { 
      this.task_item = obj[0];  
      this.getparent();   
      this.task_item.StartDate = moment(this.task_item.StartDate).format('YYYY-MM-DD');
      this.task_item.EndDate   = moment(this.task_item.EndDate).format('YYYY-MM-DD'); 
      this.userservice.getById(this.task_item.User_Id).subscribe((obj) => {        
        this.task_item.FullName =  obj[0].First_Name + " " + obj[0].Last_Name; 
      });
      this.projservice.getById(this.task_item.Project_Id).subscribe((obj) => {
        this.task_item.ProjectName = obj[0].Project_Name;
      });
      this.parentservice.getById(this.task_item.Parent_Id).subscribe((obj) => {
        this.task_item.ParentName = obj[0].Parent_Task;
      });        
    });
  }


  setVisibility() : boolean
  {
    if (this.str_check)
    {
      this.visible = (this.task_item.Project_Id != null) && (this.task_item.TaskDesc != null)
    }
    else
    {
      this.visible = (this.task_item.Project_Id != null) && (this.task_item.TaskDesc != null) &&
                     (this.task_item.Priority != null)   && (this.task_item.StartDate != null) &&
                     (this.task_item.EndDate != null)    && (this.task_item.User_Id != null);
    }
    return this.visible ;
  }

  getuser()
  {
    this.userservice.get().subscribe((obj) => {           
      this.user_all = obj;
    });
  }

  getproject()
  {
    this.projservice.get().subscribe((obj) => {        
      this.project_all = obj;      
    });
  }

  getparent()
  {    
    this.parentservice.get().subscribe((obj) => {                        
        this.parents = obj;
        this.parents.forEach(element => { 
          if (element.Project_Id === this.task_item.Project_Id) 
          {
            this.parent_all.push(element);
          }
        });   
      });      
  }
  
  resettask()
  {
    this.task_item.Task_Id = null;
    this.task_item.Parent_Id = null;
    this.task_item.TaskDesc = null;    
    this.task_item.Priority = 0;
    this.task_item.Status = null;
    this.task_item.Project_Id = null;
    this.task_item.User_Id = null; 
    this.task_item.FullName = null;
    this.task_item.ProjectName = null;
    this.task_item.ParentName = null;  
    this.str_check = false;  
    let dt = new Date();
    this.task_item.StartDate = moment(dt).format('YYYY-MM-DD');
    this.task_item.EndDate = moment(moment()).add(1, 'days').format('YYYY-MM-DD');    
    this.resetparent();
    this.visible = this.setVisibility();
    this.caption = "Add Task"; 
    this.errorCaption = "";
    this.editTask = false;
  }
  
  resetparent()
  {
    this.parent_item.Parent_Id = null;
    this.parent_item.Parent_Task = null;
    this.parent_item.Project_Id  = null;    
  }

  add()
  {
    if (this.str_check)
    {
      this.addparent();
    }
    else if (this.task_item.Task_Id > 0)
    {
      this.updatetask();      
    }
    else
    {
      this.addtask();
    }
  }

  updatetask()
  {
    this.dtStart = new Date(this.task_item.StartDate);
    this.dtEnd = new Date(this.task_item.EndDate);
    if (this.dtStart> this.dtEnd)
    {      
        this.errorCaption = "Project start date is greater than end date"; 
        return;
    }
    else
    {
        this.taskservice.put(this.task_item.Task_Id,this.task_item).subscribe((obj) => {                
          //this.resettask();
          //this.resetparent();
          this.visible = this.setVisibility();
          this.errorCaption = "Task updated"
        }); 
    }

  }

  addparent()
  {
    this.parent_item.Parent_Task = this.task_item.TaskDesc;
    this.parent_item.Project_Id = this.task_item.Project_Id;
    this.parentservice.post(this.parent_item).subscribe((obj) => {        
      this.getparent();
      this.resettask();
      this.resetparent();
      this.visible = this.setVisibility();
      this.errorCaption = "Parent task sucessfully added"
    });
  }

  addtask()
  {   
    this.dtStart = new Date(this.task_item.StartDate);
    this.dtEnd = new Date(this.task_item.EndDate);
    if (this.dtStart> this.dtEnd)
    {      
        this.errorCaption = "Project start date is greater than end date"; 
        return;
    }
    else
    {
      this.task_item.Status = "Open";
      this.taskservice.post(this.task_item).subscribe((obj) => {                
          this.resettask();
          this.resetparent();
          this.visible = this.setVisibility();
          this.errorCaption = "Task added"
        }); 
    }
  }

  listClick(event, newValue) {    
    this.selectedItem = newValue;     
  }

  selectUser()
  {
    this.selectedUser = this.selectedItem;
    this.task_item.User_Id = this.selectedUser.User_Id;
    this.task_item.FullName = this.selectedUser.First_Name + " " + this.selectedUser.Last_Name;
    this.visible = this.setVisibility();
  }

  selectProject()
  {
    this.selectedProject = this.navigateProj;
    this.task_item.Project_Id = this.selectedProject.Project_Id;
    this.task_item.ProjectName = this.selectedProject.Project_Name;
    this.getparent() ;
    this.visible = this.setVisibility();
  }

  selectParent()
  {   
    this.selectedParent = this.navigateParent;
    this.task_item.Parent_Id = this.selectedParent.Parent_Id;
    this.task_item.ParentName = this.selectedParent.Parent_Task;
    this.getparent();
    this.visible = this.setVisibility();  
  }

  listProjectClick(event, newValue) {    
    this.navigateProj = newValue;     
  }    

  listParentClick(event, newValue) {    
    this.navigateParent = newValue; 
  } 
  parentchange()
  {
    if (this.str_check)
    {
      this.caption = "Add Parent"
    }
    else
    {
      this.caption = "Add Task"
    }
    this.setVisibility();
  }
}
