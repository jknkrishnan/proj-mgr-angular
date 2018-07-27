import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../User';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  httpOption = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  
  constructor(private _http : HttpClient) { }
 

  get(): Observable<User[]>
  {    
     return this._http.get<any>(environment.url+"User").catch(this.handleError);
  }

  private handleError(error: Response) 
  {
    return Observable.throw(error.statusText);
  }

  getById(id : number): Observable<User[]>
  {
    return this._http.get<any>(environment.url+"User/"+id).catch(this.handleError);
  }
  
  post(item : User) : Observable<User>
  {    
    return this._http.post<any>(environment.url+"User",JSON.stringify(item),this.httpOption).catch(this.handleError);       
  }

  put(id : number, item : User) : Observable<User>
  {    
    return this._http.put<any>(environment.url+"User/"+id,JSON.stringify(item),this.httpOption).catch(this.handleError);        
  }

  delete(id : number) : Observable<User>
  {    
    return this._http.delete<any>(environment.url+"User/"+id,this.httpOption).catch(this.handleError);       
  }

}
