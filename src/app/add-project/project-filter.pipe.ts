import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../Project';
@Pipe({
  name: 'proj_filter'
})
export class ProjectFilterPipe implements PipeTransform {
  
    transform(proj : Project[], searchText: string): Project[] 
    {           
        if (proj && proj.length){            
            return proj.filter(myfilter =>{
                if ((searchText) && (myfilter.Project_Name.toLowerCase().indexOf(searchText.toLowerCase()) === -1))
                {
                    return false;
                }             
                return true;                
           })
        }
        else {            
            return proj;            
        }        
    }   
}