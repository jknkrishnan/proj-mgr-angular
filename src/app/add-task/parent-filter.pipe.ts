import { Pipe, PipeTransform } from '@angular/core';
import { Parent } from '../Parent';
@Pipe({
  name: 'parent_filter'
})
export class ParentFilterPipe implements PipeTransform {
  
    transform(parent : Parent[], searchText: string): Parent[] 
    {           
        if (parent && parent.length){            
            return parent.filter(myfilter =>{
                if ((searchText) && (myfilter.Parent_Task.toLowerCase().indexOf(searchText.toLowerCase()) === -1))
                {
                    return false;
                }             
                return true;                
           })
        }
        else {            
            return parent;            
        }        
    }   
}