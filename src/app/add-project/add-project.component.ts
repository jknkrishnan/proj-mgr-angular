import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project_item : Project;
  project_all  : Project[];
  visible : boolean = false;
  caption : string = "Add Project";
  sortCaption : string = "Start_Date";
  str_check : boolean;

  constructor(private userrouter : Router) 
  { 
    this.project_item = new Project();     
    this.project_item.Priority = 0;
  }

  ngOnInit() {
  }

  setVisibility() : boolean
  {
    if (this.str_check)
    {
      this.visible = (this.project_item.Project_Name != null) && (this.project_item.Start_Date != null) && (this.project_item.End_Date != null)
      && (this.project_item.Priority != null) && (this.project_item.User_Id != null)
    }
    else
    {

    }     
    return this.visible;
  }

}
