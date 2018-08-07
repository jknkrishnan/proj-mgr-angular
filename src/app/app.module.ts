import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjmgrhomeComponent } from './projmgrhome/projmgrhome.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UserFilterPipe} from './add-user/user-filter.pipe';
import { UserSortFilterPipe} from './add-user/user-sort.pipe';
import {ProjectFilterPipe} from './add-project/project-filter.pipe';
import {ProjectSortFilterPipe} from './add-project/project-sort.pipe';
import {ParentFilterPipe} from './add-task/parent-filter.pipe';
import {TaskSortFilterPipe} from './view-task/task-sort.pipe';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MatCardModule } from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

const appRoute : Routes = [
  { path:'adduser', component:AddUserComponent}, 
  { path:'addproject', component:AddProjectComponent},
  { path:'addtask', component:AddTaskComponent},
  { path:'viewtask', component:ViewTaskComponent},
  { path:'addtask/:id', component:AddTaskComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    ProjmgrhomeComponent,
    AddUserComponent,
    AddProjectComponent,
    ViewTaskComponent,    
    AddTaskComponent,
    UserFilterPipe,
    UserSortFilterPipe,    
    ProjectFilterPipe,
    ProjectSortFilterPipe,
    ParentFilterPipe,
    TaskSortFilterPipe,
    MessageDialogComponent    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule,
    HttpClientModule, 
    MatCardModule,   
    MatToolbarModule,
    MatTableModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

