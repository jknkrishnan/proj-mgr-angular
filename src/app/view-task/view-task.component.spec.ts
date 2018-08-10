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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
