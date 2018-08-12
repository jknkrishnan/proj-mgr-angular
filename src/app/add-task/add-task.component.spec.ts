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

const TASK_OBJECT : Task = new Task();


describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let task_service : TaskService;
  let user_service : UserService;
  let project_service : ProjectService;
  let parent_service : ParentService;
  let fixture: ComponentFixture<AddTaskComponent>;
  let spy: any;

  

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
    component = TestBed.createComponent(AddTaskComponent).componentInstance;
    task_service = TestBed.get(TaskService);    
    user_service = TestBed.get(UserService);   
    project_service =  TestBed.get(ProjectService);   
    parent_service =  TestBed.get(ParentService);   
    
    spyOn(task_service, 'get').and.callThrough();

    spyOn(task_service, 'post').and.callThrough();
    spyOn(task_service, 'put').and.callThrough();
    spyOn(task_service, 'delete').and.callThrough();

    spyOn(user_service, 'get').and.callThrough();

    spyOn(project_service, 'get').and.callThrough();

    spyOn(parent_service, 'get').and.callThrough();
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

  it('get user', () => {    
    component.getuser();
    expect(user_service.get).toHaveBeenCalledWith();
  });  

  it('get project', () => {    
    component.getproject();
    expect(project_service.get).toHaveBeenCalledWith();
  });

  it('get parent', () => {    
    component.getparent();
    expect(parent_service.get).toHaveBeenCalledWith();
  }); 

  it('get task by id', () => {        
  });

  it('add task', () => {        
  });

  it('update task', () => {        
  });

  it('add parent task', () => {        
  });

  it('delete task', () => {        
  });
  
  it('test add user button visibility false', () => {    
    component.task_item =  new Task();     
    component.setVisibility()
    expect(component.setVisibility()).toEqual(false);
  });  
  
  it('test ngonit', () => {    
    component.ngOnInit();
    expect(component.caption).toMatch('Add Task');
  }); 

  it('select user', () => {   
    component.selectedItem = new User(); 
    component.selectUser();
    expect(component.selectedItem).toBeDefined;
  });

  it('select project', () => {   
    component.selectedProject = new Project(); 
    component.navigateProj = new Project(); 
    component.selectProject();
    expect(component.selectedProject).toBeDefined;
    expect(component.navigateProj).toBeDefined;
  });

  it('select parent', () => {   
    component.selectedParent = new Parent(); 
    component.navigateParent = new Parent(); 
    component.selectParent();
    expect(component.selectedParent).toBeDefined;
    expect(component.navigateParent).toBeDefined;
  });
});
