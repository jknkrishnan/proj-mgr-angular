import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { User } from '../User';
import {Router} from  '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user_item : User;
  user_all : User[];
  visible : boolean = false;
  caption : string = "Add User";
  sortCaption : string = "First_Name";
  errorCaption : string;
  
  @ViewChild('panel') public panel:ElementRef;

  @HostListener("input") input(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
  
  constructor(private userrouter : Router, private userservice : UserService) { 
    this.user_item = new User();    
  }

  ngOnInit() {
    this.get();
    this.caption = "Add User";
    this.resetuser();
  }

  setVisibility() : boolean
  {    
    return ((this.user_item.Employee_Id != null) && (this.user_item.First_Name != null) 
      && (this.user_item.Last_Name != null))  
  }

  submituser()
  {
    if (this.user_item.User_Id > 0)
    {
      this.updateuser();
    }
    else
    {
      this.adduser();
    }
  }

  resetuser()
  {
    this.user_item.Employee_Id = null;
    this.user_item.First_Name = null;
    this.user_item.Last_Name = null;
    this.user_item.User_Id = null;
    this.caption = "Add User";
  }

  getuser(record : number)
  {
    this.userservice.getById(record).subscribe((obj) => {         
      this.user_item = obj[0];
      this.caption = "Update User";
      this.visible = this.setVisibility();
    });
  }

  adduser()
  {
    this.userservice.post(this.user_item).subscribe((obj) => {  
      console.log(obj);  
      this.get();
      this.resetuser();
      this.visible = this.setVisibility();
    });
  }

  updateuser()
  {
    this.userservice.put(this.user_item.User_Id, this.user_item).subscribe((obj) => {  
      console.log(obj);  
      this.get();
      this.resetuser();
      this.visible = this.setVisibility();
      this.moveToSpecificView();
    });
  }

  get()
  {
    this.userservice.get().subscribe((obj) => {  
      console.log(obj);     
      this.user_all = obj
    });
  }

  deleteuser(record : number)
  {
    this.userservice.getById(record).subscribe((obj) => {         
      this.user_item = obj[0];      
      if (((obj[0].Task != null) && (Object.keys(obj[0].Task).length > 0)) || 
          ((obj[0].Project != null) && (Object.keys(obj[0].Project).length > 0) ))
      {
        alert("Task/Project exist for selected user. User cannot not be deleted");           
        return;
      }
      else
      {
        this.userservice.delete(record).subscribe((obj) => {        
          this.get();
          this.resetuser();
          this.visible = this.setVisibility();
          this.moveToSpecificView();
        });
      }
    });    
  }
  
  sort(str :string)
  {    
    if (str==='F')
    {
      this.sortCaption = "First_Name";
    }
    else 
    if (str==='L')
    {
      this.sortCaption = "Last_Name";
    }
    else 
    if (str==='E')
    {
      this.sortCaption = "Employee_Id";
    }    

  }

  public moveToSpecificView(): void {
    setTimeout(() => {
        this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    });
  } 
}
