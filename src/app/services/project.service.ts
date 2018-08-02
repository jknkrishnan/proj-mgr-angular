import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from '../Project';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ProjectService { 

  httpOption = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  
  constructor(private _http : HttpClient) { }


  get(): Observable<Project[]>
  {    
     return this._http.get<any>(environment.url+"Project").catch(this.handleError);
  }

  private handleError(error: Response) 
  {
    return Observable.throw(error.statusText);
  }

  getById(id : number): Observable<Project[]>
  {
    return this._http.get<any>(environment.url+"Project/"+id).catch(this.handleError);
  }
  
  post(item : Project) : Observable<Project>
  {    
    return this._http.post<any>(environment.url+"Project",JSON.stringify(item),this.httpOption).catch(this.handleError);       
  }

  put(id : number, item : Project) : Observable<Project>
  {    
    return this._http.put<any>(environment.url+"Project/"+id,JSON.stringify(item),this.httpOption).catch(this.handleError);        
  }

  delete(id : number) : Observable<Project>
  {    
    return this._http.delete<any>(environment.url+"Project/"+id,this.httpOption).catch(this.handleError);       
  }
}
