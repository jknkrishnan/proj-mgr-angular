import { TestBed, inject } from '@angular/core/testing';

import { ParentService } from './parent.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';


import { Parent } from 'src/app/Parent';
import { environment } from 'src/environments/environment';

import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

let proj_obj: [{ Parent_Id : 1, Parent_Task: 'p1', Project_Id : 1,
                 }]

describe('ParentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentService,{ provide: XHRBackend, useClass: MockBackend }],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([ParentService], (service: ParentService) => {
    expect(service).toBeTruthy();
  }));

  it('test parent get service',  
  inject([ParentService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Parent : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.get().subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Parent_Id).toEqual(proj_obj[0].Parent_Id);
      expect(result[0].Parent_Task).toEqual(proj_obj[0].Parent_Task);
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);      
    });
}));

it('test parent get by id service',  
  inject([ParentService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Parent : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.get(1).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Parent_Id).toEqual(proj_obj[0].Parent_Id);
      expect(result[0].Parent_Task).toEqual(proj_obj[0].Parent_Task);
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);      
    });
}));

it('test parent post by id service',  
  inject([ParentService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Parent : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.get(Parent).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Parent_Id).toEqual(proj_obj[0].Parent_Id);
      expect(result[0].Parent_Task).toEqual(proj_obj[0].Parent_Task);
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);      
    });
}));

it('test parent put by id service',  
  inject([ParentService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Parent : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.put(1,Parent).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Parent_Id).toEqual(proj_obj[0].Parent_Id);
      expect(result[0].Parent_Task).toEqual(proj_obj[0].Parent_Task);
      expect(result[0].Project_Id).toEqual(proj_obj[0].Project_Id);      
    });
}));

it('test parent delete by id service',  
  inject([ParentService,XHRBackend], (service,mockBackend) => {
    const mockResponse = {
      Parent : proj_obj
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    
    service.delete(1).subscribe((result) => {
      expect(result.length).toBeGreaterThan(0);         
      expect(result[0].Parent_Id).toEqual(proj_obj[0].Parent_Id);      
    });
}));



});
