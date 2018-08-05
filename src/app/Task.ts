import { User } from './User';
import { Project } from './Project';

export class Task {
    Task_Id : number;
    Parent_Id : number;
    TaskDesc : string;
    StartDate : string;
    EndDate : string;
    Priority : number;
    Status : string;
    Project_Id : number;    
    Project : Project;
    User_Id : number;
    User : User;
    FullName : string;
    ProjectName : string;
    ParentName : string;
}