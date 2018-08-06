import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task';
@Pipe({
  name: 'task_sort'
})
export class TaskSortFilterPipe implements PipeTransform {
    dt1  : Date;
    dt2    : Date;

    transform(project : Task[], args: string): Task[]
    {           
             
        if ((args === 'Priority') && (project !== undefined))
        {          
            project.sort((a: Task, b: Task) => {
                if (a.Priority < b.Priority) {
                    return -1;
                } 
                else if (a.Priority > b.Priority) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } 
        
        if ((args === 'StartDate') && (project !== undefined))
        {   
            project.sort((a: Task, b: Task) => {                
                this.dt1 = new Date(a.StartDate);
                this.dt2 = new Date(b.StartDate);
                if (this.dt1 < this.dt2) {
                    return -1;
                } 
                else if (this.dt1 > this.dt2) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } 

        if ((args === 'EndDate') && (project !== undefined))
        {        
            project.sort((a: Task, b: Task) => {                
                this.dt1 = new Date(a.EndDate);
                this.dt2 = new Date(b.EndDate);
                if (this.dt1 < this.dt2) {
                    return -1;
                } 
                else if (this.dt1 > this.dt2) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } 

        if ((args === 'Status') && (project !== undefined))
        {         
            
            project.sort((a: Task, b: Task) => {
                if (a.Status < b.Status) {
                    return -1;
                } 
                else if (a.Status > b.Status) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } 
        
        return project;
    }
}