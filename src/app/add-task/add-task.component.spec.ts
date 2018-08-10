import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';

import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';
import { ParentService } from '../services/parent.service';
import { ProjectService } from '../services/project.service';

import { User } from '../User';
import { Project } from '../Project';
import { Task } from '../Task';
import { Parent } from '../Parent';
import { Observable } from 'rxjs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserFilterPipe} from '../add-user/user-filter.pipe';
import { ProjectFilterPipe} from '../add-project/project-filter.pipe';
import {ParentFilterPipe} from './parent-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import * as moment from 'moment';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let user_service : MockUserService
  let fixture: ComponentFixture<AddTaskComponent>;
  let spy: any;

  class MockUserService extends UserService {
    authenticated = false;
  
    isAuthenticated() {
      return this.authenticated;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskComponent,UserFilterPipe,
                      ParentFilterPipe,ProjectFilterPipe ],
      imports: [
        FormsModule,
        ReactiveFormsModule, 
        BrowserModule,
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,   
        MatToolbarModule,
        MatTableModule,
      ],
      providers: [
        UserService,
        TaskService,
        ParentService,
        ProjectService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  

  it('resettask', () => {    
    component.resettask();
    expect(component.caption).toMatch('Add Task');
    expect(component.task_item.Task_Id).toBeNull;
    expect(component.task_item.Parent_Id).toBeNull;
    expect(component.task_item.TaskDesc).toBeNull;
    expect(component.task_item.Priority).toEqual(0);
    expect(component.task_item.Status).toBeNull;
    expect(component.task_item.Project_Id).toBeNull;
    expect(component.task_item.User_Id).toBeNull;
    expect(component.task_item.FullName).toBeNull;
    expect(component.task_item.ProjectName).toBeNull;
    expect(component.task_item.ParentName).toBeNull;
    expect(component.str_check).toBeFalsy;
    expect(component.task_item.StartDate).toEqual(moment(new Date()).format('YYYY-MM-DD'))
    expect(component.task_item.EndDate).toEqual(moment(moment()).add(1, 'days').format('YYYY-MM-DD'));    
    expect(component.errorCaption).toMatch('') ;
    expect(component.editTask).toBeFalsy;
  }); 

  it('resetparent', () => {    
    component.resetparent();    
    expect(component.parent_item.Parent_Id).toBeNull;
  }); 

});
