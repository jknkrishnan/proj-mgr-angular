import { Task } from './Task';
import { Parent } from './Parent';
export class Project {
    Project_Id : number;
    Project_Name : string;
    Start_Date : string;
    End_Date : string;
    Priority : number;
    Suspend : number;
    Remarks : string;
    User_Id : number;    
    FullName : string;
    Task : Task[];
    Parent : Parent[];
    taskcount : number;
}
