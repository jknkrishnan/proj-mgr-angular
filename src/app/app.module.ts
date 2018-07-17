import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjmgrhomeComponent } from './projmgrhome/projmgrhome.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { AddTaskComponent } from './add-task/add-task.component';

const appRoute : Routes = [
  { path:'adduser', component:AddUserComponent}, 
  { path:'addproject', component:AddProjectComponent},
  { path:'addtask', component:AddTaskComponent},
  { path:'viewtask', component:ViewTaskComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    ProjmgrhomeComponent,
    AddUserComponent,
    AddProjectComponent,
    ViewTaskComponent,
    AddParentComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
