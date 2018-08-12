import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectComponent } from './add-project.component';

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
import { ProjectSortFilterPipe} from '../add-project/project-sort.pipe';
import {ParentFilterPipe} from '../add-task/parent-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import * as moment from 'moment';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;
  let user_service : UserService;
  let project_service : ProjectService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectComponent,ProjectFilterPipe,
        ProjectSortFilterPipe,UserFilterPipe ],
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
        ProjectService
      ]
    })
    .compileComponents();
    user_service = TestBed.get(UserService);   
    project_service =  TestBed.get(ProjectService);  
    spyOn(user_service, 'get').and.callThrough();
    spyOn(project_service, 'get').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resettask', () => {    
    component.resetproject();
    expect(component.caption).toMatch('Add Project');
    expect(component.project_item.Project_Id).toBeNull;
    expect(component.project_item.Project_Name).toBeNull;    
    expect(component.project_item.Priority).toEqual(0);
    expect(component.project_item.Start_Date).toEqual(moment(new Date()).format('YYYY-MM-DD'))
    expect(component.project_item.End_Date).toEqual(moment(moment()).add(1, 'days').format('YYYY-MM-DD')); 
    expect(component.project_item.FullName).toBeNull;
  }); 
  
  it('get user', () => {    
    component.getuser();
    expect(user_service.get).toHaveBeenCalledWith();
  });  

  it('get project', () => {    
    component.get();
    expect(project_service.get).toHaveBeenCalledWith();
  });

  it('get project by id', () => {        
  });

  it('add project', () => {        
  });

  it('update project', () => {        
  });

  it('suspend project', () => {        
  });

  it('sort Start_Date', () => {
    component.sort('S');
    expect(component.sortCaption).toMatch('Start_Date');
  });

  it('sort End_Date', () => {
    component.sort('E');
    expect(component.sortCaption).toMatch('End_Date');
  });

  it('sort Priority', () => {
    component.sort('P');
    expect(component.sortCaption).toMatch('Priority');
  });

  it('sort Remarks', () => {
    component.sort('R');
    expect(component.sortCaption).toMatch('Remarks');
  });

  it('test ngonit', () => {    
    component.ngOnInit();
    expect(component.caption).toMatch('Add Project');
  }); 

  it('select user', () => {   
    component.selectedItem = new User(); 
    component.selectedUser = new User(); 
    component.selectUser();
    expect(component.selectedItem).toBeDefined;
    expect(component.selectedUser).toBeDefined;
  }); 

});
