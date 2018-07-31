import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../User';
@Pipe({
  name: 'user_filter'
})
export class UserFilterPipe implements PipeTransform {
  
    transform(users : User[], searchText: string): User[] 
    {           
        if (users && users.length){            
            return users.filter(myfilter =>{
                if ((searchText) && (myfilter.First_Name.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
                    &&  (myfilter.Last_Name.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
                    &&  (myfilter.Employee_Id.toString().toLowerCase().indexOf(searchText.toLowerCase()) === -1))
                {
                    return false;
                }             
                return true;                
           })
        }
        else {            
            return users;            
        }        
    }   
}