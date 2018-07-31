import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../User';
@Pipe({
  name: 'user_sort'
})
export class UserSortFilterPipe implements PipeTransform {
    transform(users : User[], args: string): User[]
    {        
        if ((args === 'First_Name') && (users !== undefined))
        {          
            users.sort((a: User, b: User) => {
                if (a.First_Name < b.First_Name) {
                    return -1;
                } 
                else if (a.First_Name > b.First_Name) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        else if ((args === 'Last_Name') && (users !== undefined))
        {
            users.sort((a: User, b: User) => {
                if (a.Last_Name < b.Last_Name) {
                    return -1;
                } 
                else if (a.Last_Name > b.Last_Name) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        else if ((args === 'Employee_Id') && (users !== undefined))
        {
            users.sort((a: User, b: User) => {
                if (a.Employee_Id < b.Employee_Id) {
                    return -1;
                } 
                else if (a.Employee_Id > b.Employee_Id) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        return users;
    }
}