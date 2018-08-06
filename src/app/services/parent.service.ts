import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Parent } from '../Parent';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  httpOption = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  
  constructor(private _http : HttpClient) { }

  get(): Observable<Parent[]>
  {    
     return this._http.get<any>(environment.url+"Parent").catch(this.handleError);
  }
  
  private handleError(error: Response) 
  {
    return Observable.throw(error.statusText);
  }

  getById(id : number): Observable<Parent[]>
  {
    return this._http.get<any>(environment.url+"Parent/"+id).catch(this.handleError);
  } 
  
  post(item : Parent) : Observable<Parent>
  {    
    return this._http.post<any>(environment.url+"Parent",JSON.stringify(item),this.httpOption).catch(this.handleError);       
  }

  put(id : number, item : Parent) : Observable<Parent>
  {    
    return this._http.put<any>(environment.url+"Parent/"+id,JSON.stringify(item),this.httpOption).catch(this.handleError);        
  }

  delete(id : number) : Observable<Parent>
  {    
    return this._http.delete<any>(environment.url+"Parent/"+id,this.httpOption).catch(this.handleError);       
  }
}
