import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';

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
import {ParentFilterPipe} from '../add-task/parent-filter.pipe';
import {TaskSortFilterPipe} from '../view-task/task-sort.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;
  let task_service : TaskService;  
  let project_service : ProjectService;
  let parent_service :ParentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskComponent,TaskSortFilterPipe,ProjectFilterPipe ],
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
    task_service = TestBed.get(TaskService);        
    project_service =  TestBed.get(ProjectService);   
    parent_service =  TestBed.get(ParentService);   

    spyOn(task_service, 'get').and.callThrough();
    spyOn(project_service, 'get').and.callThrough();
    spyOn(parent_service, 'get').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get project', () => {    
    component.getprojects();
    expect(project_service.get).toHaveBeenCalledWith();    
  });  

  it('get ngoninit', () => {    
    component.project_all = [];
    component.ngOnInit();
    expect(component.project_all).toBeDefined();
    
  }); 

  it('get task', () => {    
    component.gettask(1);    
    expect(task_service.get).toHaveBeenCalledWith();
  });  

  it('select project', () => {   
    component.selectedProject = new Project(); 
    component.navigateProj = new Project(); 
    component.selectProject();
    expect(component.selectedProject).toBeDefined;
    expect(component.navigateProj).toBeDefined;
  });

  it('sort StartDate', () => {
    component.sort('S');
    expect(component.sortCaption).toMatch('StartDate');
  });

  it('sort EndDate', () => {
    component.sort('E');
    expect(component.sortCaption).toMatch('EndDate');
  });

  it('sort Priority', () => {
    component.sort('P');
    expect(component.sortCaption).toMatch('Priority');
  });

  it('sort Status', () => {
    component.sort('C');
    expect(component.sortCaption).toMatch('Status');
  });

  it('end task', () => {
    
  });

  it('edit task', () => {
    
  });
});
