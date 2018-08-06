import { Component, OnInit, ViewChild, HostListener,ElementRef } from '@angular/core';
import { Project } from '../Project';
import {Router} from  '@angular/router';
import { User } from '../User';
import { UserService } from '../services/user.service';
import { ProjectService } from '../services/project.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project_item : Project;
  usr : User;
  project_all  : Project[];
  user_all : User[];
  visible : boolean = false;
  caption : string = "Add Project";
  sortCaption : string = "Start_Date";
  str_check : boolean;
  selectedItem : User;
  selectedUser : User;
  errorCaption : string = "";  
  today : Date;
  dtStart : Date;
  dtEnd : Date;     

  @ViewChild('panel') public panel:ElementRef;

  @HostListener("input") input(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
    
  constructor(private userrouter : Router, private userservice : UserService, private projservice : ProjectService) 
  { 
    this.project_item = new Project();     
    this.project_item.Priority = 0;
  }

  ngOnInit() {    
    this.getuser();
    this.get();
    this.caption = "Add Project";
    this.resetproject();
  }

  setVisibility() : boolean
  {
    if (this.str_check)
    {
      this.visible = (this.project_item.Project_Name != null) && 
      (this.project_item.Start_Date != null) && (this.project_item.End_Date != null)
      && (this.project_item.User_Id != null)
    }
    else
    {
      this.visible = (this.project_item.Project_Name != null) 
      && (this.project_item.User_Id != null)
    }     
    return this.visible;
  }

  getuser()
  {
    this.userservice.get().subscribe((obj) => {  
      console.log(obj);     
      this.user_all = obj
    });
  }

  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;     
  }

  selectUser()
  {
    this.selectedUser = this.selectedItem;
    this.project_item.User_Id = this.selectedUser.User_Id;
    this.project_item.FullName = this.selectedUser.First_Name + " " + this.selectedUser.Last_Name;
    this.visible = this.setVisibility();
  }

  submitproject()
  {
    this.dtStart = new Date(this.project_item.Start_Date);
    this.dtEnd = new Date(this.project_item.End_Date);
    if ((this.str_check) && (this.dtStart> this.dtEnd))
    {      
      this.errorCaption = "Project start date is greater than end date"; 
      return;          
    }
    this.project_item.Remarks = 'No';
    this.project_item.Suspend = 0;

    if (this.project_item.Project_Id > 0)
    {
      this.updateproject();
    }
    else
    {
      this.addproject();
    }    
  }

  get()
  {
    this.projservice.get().subscribe((obj) => {        
      this.project_all = obj  
      this.project_all.forEach(element => { 
        element.Start_Date = moment(element.Start_Date).format('YYYY-MM-DD'); 
        element.End_Date = moment(element.End_Date).format('YYYY-MM-DD');
        if (element.Task != null)
        {
          element.taskcount = Object.keys(element.Task).length;          
        }
        else
        {
          element.taskcount = 0;          
        }
      });    
    });
  }

  resetproject()
  {
    this.project_item.Project_Id = null;
    this.project_item.Project_Name = null;
    let dt = new Date();
    this.project_item.Start_Date = moment(dt).format('YYYY-MM-DD');
    this.project_item.End_Date = moment(moment()).add(1, 'days').format('YYYY-MM-DD');
    this.project_item.Priority = 0;
    this.project_item.User_Id = null;
    this.project_item.FullName = null;
    this.caption = "Add Project";    
  }

  getproject(record : number,flag : string)
  {
    this.projservice.getById(record).subscribe((obj) => {          
      this.project_item = obj[0];           
      this.project_item.Start_Date = moment(this.project_item.Start_Date).format('YYYY-MM-DD');
      this.project_item.End_Date   = moment(this.project_item.End_Date).format('YYYY-MM-DD');
      if (this.project_item.Start_Date === null)
      {
        this.str_check = false;
      }
      else
      {
        this.str_check = true;
      }
      this.userservice.getById(this.project_item.User_Id).subscribe((obj) => {
        this.usr = obj[0];
        this.project_item.FullName =  this.usr.First_Name + " " + this.usr.Last_Name; 
      });
      this.caption = "Update Project";
      this.visible = this.setVisibility();  
      if (this.project_item.Task != null)
      {
        let count = 0        
        this.project_item.Task.forEach(element => { 
            count = count + 1;
        });
        this.project_item.taskcount = count;        
      }
      if (flag === 'S')
      {
        this.project_item.Remarks = 'Suspended';
        this.project_item.Suspend = 1;        
        this.updateproject();
      }
      this.moveToSpecificView();
    });    
  }

  addproject()
  {    
    this.projservice.post(this.project_item).subscribe((obj) => {  
      console.log(obj);  
      this.get();
      this.resetproject();
      this.visible = this.setVisibility();
    });
  }

  updateproject()
  {
    this.projservice.put(this.project_item.Project_Id, 
      this.project_item).subscribe((obj) => {  
      console.log(obj);  
      this.get();
      this.resetproject();
      this.visible = this.setVisibility();      
    });
  }    

  sort(str :string)
  {    
    if (str==='S')
    {
      this.sortCaption = "Start_Date";
    }
    else 
    if (str==='E')
    {
      this.sortCaption = "End_Date";
    }
    else 
    if (str==='P')
    {
      this.sortCaption = "Priority";
    } 
    else 
    if (str==='R')
    {
      this.sortCaption = "Remarks";
    }     

  }

  public moveToSpecificView(): void {
    setTimeout(() => {
        this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    });
  }
}

