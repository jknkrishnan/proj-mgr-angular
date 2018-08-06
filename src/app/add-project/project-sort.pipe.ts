import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../Project';
@Pipe({
  name: 'project_sort'
})
export class ProjectSortFilterPipe implements PipeTransform {
    dt1  : Date;
    dt2    : Date;

    transform(project : Project[], args: string): Project[]
    {           
             
        if ((args === 'Priority') && (project !== undefined))
        {          
            project.sort((a: Project, b: Project) => {
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
        
        if ((args === 'Start_Date') && (project !== undefined))
        {          
            project.sort((a: Project, b: Project) => {                
                this.dt1 = new Date(a.Start_Date);
                this.dt2 = new Date(b.Start_Date);
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

        if ((args === 'End_Date') && (project !== undefined))
        {          
            project.sort((a: Project, b: Project) => {                
                this.dt1 = new Date(a.End_Date);
                this.dt2 = new Date(b.End_Date);
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

        if ((args === 'Remarks') && (project !== undefined))
        {          
            project.sort((a: Project, b: Project) => {
                if (a.Remarks < b.Remarks) {
                    return -1;
                } 
                else if (a.Remarks > b.Remarks) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } 
        
        return project;
    }
}