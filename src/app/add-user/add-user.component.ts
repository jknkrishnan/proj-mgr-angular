import { Component, OnInit, HostListener } from '@angular/core';
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


  @HostListener("input") input(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
  
  constructor(private userrouter : Router, private userservice : UserService) { 
    this.user_item = new User();    
  }

  ngOnInit() {
    this.userservice.get().subscribe((obj) => {  
      console.log(obj);     
      this.user_all = obj
    });
  }

  setVisibility() : boolean
  {    
    return ((this.user_item.Employee_Id != null) && (this.user_item.First_Name != null) 
    && (this.user_item.Last_Name != null))  
  }

  submit()
  {
    
  }

  reset()
  {
    this.user_item.Employee_Id = null;
    this.user_item.First_Name = null;
    this.user_item.Last_Name = null;
    this.user_item.User_Id = null;
  }


}
