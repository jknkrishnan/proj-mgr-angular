import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../Project';
@Pipe({
  name: 'project_sort'
})
export class ProjectSortFilterPipe implements PipeTransform {
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
                if (a.Start_Date < b.Start_Date) {
                    return -1;
                } 
                else if (a.Start_Date > b.Start_Date) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } 

        if ((args === 'End_Date') && (project !== undefined))
        {          
            project.sort((a: Project, b: Project) => {
                if (a.End_Date < b.End_Date) {
                    return -1;
                } 
                else if (a.End_Date > b.End_Date) {
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