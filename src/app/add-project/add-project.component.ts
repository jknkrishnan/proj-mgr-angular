import { Component, OnInit, ViewChild, HostListener,ElementRef } from '@angular/core';
import { Project } from '../Project';
import {Router} from  '@angular/router';
import { User } from '../User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project_item : Project;
  project_all  : Project[];
  user_all : User[];
  visible : boolean = false;
  caption : string = "Add Project";
  sortCaption : string = "Start_Date";
  str_check : boolean;
  selectedItem : User;
  selectedUser : User;
  errorCaption : string = "";  
    

  @HostListener("input") input(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
  
  
  constructor(private userrouter : Router, private userservice : UserService) 
  { 
    this.project_item = new Project();     
    this.project_item.Priority = 1;
  }

  ngOnInit() {
    this.getuser();
  }

  setVisibility() : boolean
  {
    if (this.str_check)
    {
      this.visible = (this.project_item.Project_Name != null) && (this.project_item.Start_Date != null) && (this.project_item.End_Date != null)
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
    if ((this.str_check) && (this.project_item.Start_Date > this.project_item.End_Date))
    {      
      this.errorCaption = "Project start date is greater than end date"; 
      return;          
    }
    
  }

}

