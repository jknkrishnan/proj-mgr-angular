import { Project } from './Project';
import { Task } from './Task';
export class User {
    User_Id : number;
    First_Name : string;
    Last_Name : string;
    Employee_Id : number;
    Project : Project[];
    Task : Task[];
}