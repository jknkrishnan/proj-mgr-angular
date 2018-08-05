import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task } from '../Task';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOption = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  
  constructor(private _http : HttpClient) { }

  get(): Observable<Task[]>
  {    
     return this._http.get<any>(environment.url+"Task").catch(this.handleError);
  }

  private handleError(error: Response) 
  {
    return Observable.throw(error.statusText);
  }

  getById(id : number): Observable<Task[]>
  {
    return this._http.get<any>(environment.url+"Task/"+id).catch(this.handleError);
  }
  
  post(item : Task) : Observable<Task>
  {    
    return this._http.post<any>(environment.url+"Task",JSON.stringify(item),this.httpOption).catch(this.handleError);       
  }

  put(id : number, item : Task) : Observable<Task>
  {    
    return this._http.put<any>(environment.url+"Task/"+id,JSON.stringify(item),this.httpOption).catch(this.handleError);        
  }

  delete(id : number) : Observable<Task>
  {    
    return this._http.delete<any>(environment.url+"Task/"+id,this.httpOption).catch(this.handleError);       
  }
}
